"use client";;
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
 * Liquid Glass lens engine.
 *
 * Real refraction on the web comes from running an SVG displacement filter as a
 * `backdrop-filter` — there, the filter's SourceGraphic is the content *behind*
 * the element, so `feDisplacementMap` physically bends the page through the
 * lens. We generate a per-lens displacement map (a rounded-rect profile that is
 * flat in the middle and bends hard at the rim) and feed it to the filter.
 *
 * Only Chromium exposes `backdrop-filter: url()`. On Safari / Firefox we fall
 * back to a plain frosted blur, which still reads as glass — just without the
 * bending.
 * ──────────────────────────────────────────────────────────────────────────── */

// ── environment ────────────────────────────────────────────────────────────

function subscribeScheme(cb) {
  if (typeof window === "undefined") return () => undefined;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", cb);
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-theme"],
  });
  return () => {
    mq.removeEventListener("change", cb);
    obs.disconnect();
  };
}

function readDark() {
  if (typeof document === "undefined") return false;
  const root = document.documentElement;
  if (root.classList.contains("dark")) return true;
  if (root.classList.contains("light")) return false;
  if (root.dataset.theme === "dark") return true;
  if (root.dataset.theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function useGlassDark() {
  return useSyncExternalStore(subscribeScheme, readDark, () => false);
}

function useHydrated() {
  const [h, setH] = useState(false);
  useEffect(() => setH(true), []);
  return h;
}

/** Chromium is the only engine that runs url() filters as a backdrop-filter. */
function refractionSupported() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const chromium = /\b(Chrome|Chromium|Edg|OPR|HeadlessChrome)\//i.test(ua);
  const safari = /^((?!chrome|android).)*safari/i.test(ua);
  return chromium && !safari;
}

const mapCache = new Map();
const MAP_CACHE_MAX = 80;

/**
 * Build a PNG data-URL where R/G encode normalised X/Y displacement
 * (128 = no shift). The filter's `scale` sets the real px magnitude, so the map
 * only carries the *shape* of the bend and can be cached across sizes.
 */
function buildLensMap(o) {
  if (typeof document === "undefined") return null;

  const key = `${Math.round(o.w)}x${Math.round(o.h)}|r${Math.round(o.radius)}|b${Math.round(o.band)}|d${o.dome}|s${o.splay}`;
  const hit = mapCache.get(key);
  if (hit) return hit;

  if (o.w < 1 || o.h < 1) return null;
  const aspect = o.w / o.h;
  const mw = aspect >= 1 ? o.resolution : Math.round(o.resolution * aspect);
  const mh = aspect >= 1 ? Math.round(o.resolution / aspect) : o.resolution;
  // Degenerate (zero-pixel) maps would throw in createImageData; bail to fallback.
  if (mw < 1 || mh < 1) return null;

  const canvas = document.createElement("canvas");
  canvas.width = mw;
  canvas.height = mh;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const img = ctx.createImageData(mw, mh);
  const buf = img.data;

  const halfW = o.w / 2;
  const halfH = o.h / 2;
  const r = Math.min(o.radius, halfW, halfH);
  const band = Math.max(1, o.band);

  for (let y = 0; y < mh; y++) {
    for (let x = 0; x < mw; x++) {
      // pixel → lens-space coordinates (px), origin at centre
      const px = ((x + 0.5) / mw - 0.5) * o.w;
      const py = ((y + 0.5) / mh - 0.5) * o.h;

      // signed distance to the rounded-rect edge (negative inside)
      const qx = Math.abs(px) - (halfW - r);
      const qy = Math.abs(py) - (halfH - r);
      const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
      const inside = Math.min(Math.max(qx, qy), 0);
      const sdf = outside + inside - r;

      let nx = 0;
      let ny = 0;

      if (sdf < 0) {
        const depth = -sdf; // distance inward from the rim
        // outward unit normal (gradient of the SDF)
        const gx = qx > qy ? Math.sign(px) : 0;
        const gy = qy >= qx ? Math.sign(py) : 0;
        let dirX = gx;
        let dirY = gy;
        if (qx > 0 && qy > 0) {
          // rounded corner — point radially out of the corner arc
          const len = Math.hypot(qx, qy) || 1;
          dirX = (Math.sign(px) * qx) / len;
          dirY = (Math.sign(py) * qy) / len;
        }

        // rim ramp: 0 in the flat middle → 1 at the very edge
        const ramp = depth < band ? 1 - depth / band : 0;
        const rim = ramp * ramp * (3 - 2 * ramp); // smoothstep
        const mag = rim * o.splay;
        nx = dirX * mag;
        ny = dirY * mag;

        // dome: whole-lens optical convex magnification toward the centre
        if (o.dome !== 0) {
          const u = px / halfW;
          const v = py / halfH;
          // Smooth convex lens curvature across both dimensions without harsh elliptical cutoff
          const fx = u * Math.cos(Math.min(Math.abs(u), 1) * Math.PI * 0.5);
          const fy = v * Math.cos(Math.min(Math.abs(v), 1) * Math.PI * 0.5);
          nx += fx * o.dome;
          ny += fy * o.dome;
        }
      }

      const i = (y * mw + x) * 4;
      buf[i] = clampByte(128 + nx * 127);
      buf[i + 1] = clampByte(128 + ny * 127);
      buf[i + 2] = 128;
      buf[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  const url = canvas.toDataURL("image/png");
  mapCache.set(key, url);
  if (mapCache.size > MAP_CACHE_MAX) {
    const first = mapCache.keys().next().value;
    if (first) mapCache.delete(first);
  }
  return url;
}

function clampByte(v) {
  return v < 0 ? 0 : v > 255 ? 255 : Math.round(v);
}

function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

/**
 * Glass refracts content placed in `children` through lens regions in `lens`.
 * If no `lens` is given, the whole rounded box becomes a single lens.
 */
export function Glass({
  children,
  lens,
  className,
  contentClassName,
  strength = 0.5,
  blur = 0,
  tint,
  tintColor,
  dome = 1.6,
  radius = 24,
  splay = 0,
  refract = true,
  as: Tag = "div"
}) {
  const rootRef = useRef(null);
  const filterId = useId().replace(/[^a-z0-9]/gi, "");
  const dark = useGlassDark();
  const supported = useHydrated() && refractionSupported() && refract;

  const [map, setMap] = useState(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  // Clear glass with high clarity: subtle translucent base so background birds & content refract visibly
  const bgAlpha = tint !== undefined ? clamp01(tint) : (dark ? 0.06 : 0.08);
  const rgb = tintColor ?? (dark ? "24,20,38" : "255,255,255");
  const displace = 24 + strength * 95;

  // Generate / refresh the single-lens map on resize.
  useEffect(() => {
    if (!supported || lens) return;
    const el = rootRef.current;
    if (!el) return;
    const refresh = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w < 4 || h < 4) return;
      setBox({ w, h });
      const cs = getComputedStyle(el);
      const r = parseFloat(cs.borderTopLeftRadius) || radius;
      setMap(
        buildLensMap({
          w,
          h,
          radius: r,
          band: Math.max(6, Math.min(w, h) * (0.12 + strength * 0.16)),
          dome,
          splay,
          resolution: 220,
        }),
      );
    };
    refresh();
    const ro = new ResizeObserver(refresh);
    ro.observe(el);
    return () => ro.disconnect();
  }, [supported, lens, strength, dome, radius, splay]);

  const singleLens = !lens;
  const backdrop =
    singleLens && supported && map
      ? (blur > 0
          ? `url(#${filterId}) blur(${blur}px) saturate(1.5) brightness(1.04)`
          : `url(#${filterId}) saturate(1.4) brightness(1.04) contrast(1.02)`)
      : (blur > 0
          ? `blur(${blur}px) saturate(1.35) brightness(1.02)`
          : `saturate(1.45) brightness(1.05) contrast(1.02)`);

  const El = Tag;
  return (
    <El
      ref={rootRef}
      className={cn("relative isolate overflow-hidden", className)}
      style={{ borderRadius: radius }}
    >
      {singleLens && supported && map && (
        <svg aria-hidden className="pointer-events-none absolute size-0">
          <defs>
            <filter
              id={filterId}
              x="0"
              y="0"
              width="100%"
              height="100%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feImage
                href={map}
                result="map"
                x="0"
                y="0"
                width={box.w}
                height={box.h}
                preserveAspectRatio="none"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="map"
                scale={displace}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
      )}

      {/* single-lens backdrop + tint + rim */}
      {singleLens && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
            style={{ backdropFilter: backdrop, WebkitBackdropFilter: backdrop }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
            style={{ background: `rgba(${rgb},${bgAlpha})` }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
            style={{ boxShadow: rimShadow(dark), background: sheen(dark) }}
          />
        </>
      )}

      {/* explicit lens layer */}
      {lens && (
        <div className="pointer-events-none absolute inset-0 z-0">{lens}</div>
      )}

      {/* content placed cleanly above the refracted backdrop */}
      {children !== undefined && (
        <div className={cn("relative z-10", contentClassName)}>{children}</div>
      )}
    </El>
  );
}

// ── shared chrome ──────────────────────────────────────────────────────────

function rimShadow(dark) {
  // Pure clean glass specular rim highlight without any black borders or corner dark marks
  return dark
    ? "inset 0 1.5px 1px 0 rgba(255,255,255,0.3), inset 0 0 0 1px rgba(255,255,255,0.08), 0 20px 48px -12px rgba(0,0,0,0.55)"
    : "inset 0 1.5px 1px 0 rgba(255,255,255,0.65), inset 0 0 0 1px rgba(255,255,255,0.25), 0 20px 45px -12px rgba(0,0,0,0.08)";
}

function sheen(dark) {
  return dark
    ? "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 38%, transparent 62%, rgba(255,255,255,0.06) 100%)"
    : "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 32%, transparent 58%, rgba(255,255,255,0.1) 100%)";
}

/**
 * GlassPanel — absolute clear glass panel with 0 blur and increased 1.6 dome by default.
 * Splay is 0 so the glass lens refracts smoothly without edge/corner distortion marks.
 */
export function GlassPanel({
  children,
  blur = 0,
  dome = 1.6,
  strength = 0.45,
  tint,
  radius = 24,
  refract = true,
  splay = 0,
  className,
  contentClassName,
  ...props
}) {
  return (
    <Glass
      blur={blur}
      dome={dome}
      strength={strength}
      tint={tint}
      radius={radius}
      refract={refract}
      splay={splay}
      className={className}
      contentClassName={contentClassName}
      {...props}
    >
      {children}
    </Glass>
  );
}

export function GlassLens({
  width,
  height,
  radius = 9999,
  strength = 0.55,
  blur = 0,
  dome = 0.15,
  className,
  style,
  ...props
}) {
  const filterId = useId().replace(/[^a-z0-9]/gi, "");
  const dark = useGlassDark();
  const supported = useHydrated() && refractionSupported();
  const r = Math.min(radius, width / 2, height / 2);

  const map = supported
    ? buildLensMap({
        w: width,
        h: height,
        radius: r,
        band: Math.max(5, Math.min(width, height) * (0.18 + strength * 0.2)),
        dome,
        splay: 1,
        resolution: 200,
      })
    : null;

  const displace = 8 + strength * 60;
  const backdrop =
    supported && map
      ? `url(#${filterId}) blur(${blur}px) saturate(1.5) brightness(1.05)`
      : `blur(${Math.max(blur, 6)}px) saturate(1.5)`;

  const css = {
    width,
    height,
    borderRadius: r,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    boxShadow: rimShadow(dark),
    ...style,
  };

  return (
    <div className={cn("relative", className)} style={css} {...props}>
      {supported && map && (
        <svg aria-hidden className="pointer-events-none absolute size-0">
          <defs>
            <filter
              id={filterId}
              x="0"
              y="0"
              width="100%"
              height="100%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feImage
                href={map}
                result="map"
                x="0"
                y="0"
                width={width}
                height={height}
                preserveAspectRatio="none"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="map"
                scale={displace}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
      )}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[inherit]"
        style={{ background: sheen(dark) }}
      />
    </div>
  );
}

export function GlassSurface({
  tint = 0.5,
  tintColor,
  blur = 14,
  saturation = 1.6,
  radius = 16,
  specular = true,
  handleRef,
  className,
  contentClassName,
  style,
  children,
  ...props
}) {
  const dark = useGlassDark();
  const t = clamp01(tint);
  const rgb = tintColor ?? (dark ? "60,62,68" : "255,255,255");
  const tintRef = useRef(null);

  useEffect(() => {
    if (!handleRef) return;
    handleRef.current = {
      setTintLift(delta) {
        const el = tintRef.current;
        if (el)
          el.style.background = `rgba(${rgb},${Math.max(0.04, Math.min(0.55, t * 0.42 + delta))})`;
      },
    };
  }, [handleRef, rgb, t]);

  const blurPx = blur === 0 ? 0 : Math.max(3, blur * (0.4 + t * 0.6));
  const sat = 1 + (saturation - 1) * Math.max(t, 0.25);
  const backdrop = blurPx > 0 ? `blur(${blurPx}px) saturate(${sat})` : `saturate(${sat}) brightness(1.02)`;

  return (
    <div
      className={cn("relative", className)}
      style={{ borderRadius: radius, ...style }}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ backdropFilter: backdrop, WebkitBackdropFilter: backdrop }}
      />
      <div
        aria-hidden
        ref={tintRef}
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: `rgba(${rgb},${Math.max(0.04, t * 0.42)})` }}
      />
      {specular && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ background: sheen(dark) }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ boxShadow: rimShadow(dark) }}
          />
        </>
      )}
      <div className={cn("relative h-full w-full rounded-[inherit]", contentClassName)}>{children}</div>
    </div>
  );
}
