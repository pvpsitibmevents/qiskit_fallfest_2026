import React, { useState } from 'react';

export default function InteractiveQuantumBanner({ className = '' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full aspect-[16/9] min-h-[300px] max-h-[460px] rounded-2xl overflow-hidden border-2 border-primary/20 dark:border-primary/40 bg-gradient-to-br from-[#dce7fc] via-[#e4edff] to-[#ecf3ff] dark:from-[#140e2b] dark:via-[#1e153b] dark:to-[#291740] select-none ${className}`}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Cloud 1 (Top Left) */}
      <div
        className="absolute top-6 left-2 w-48 sm:w-64 h-24 sm:h-32 bg-white/80 dark:bg-white/10 rounded-full animate-cloud-slow pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -0.25}px, ${mousePos.y * -0.25}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="absolute -top-6 left-10 w-28 h-28 bg-white/80 dark:bg-white/10 rounded-full" />
        <div className="absolute -top-3 left-28 w-24 h-24 bg-white/80 dark:bg-white/10 rounded-full" />
      </div>

      {/* Cloud 2 (Bottom Right) */}
      <div
        className="absolute bottom-2 right-4 w-60 sm:w-80 h-28 sm:h-36 bg-white/85 dark:bg-white/10 rounded-full animate-cloud-fast pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="absolute -top-8 left-14 w-32 h-32 bg-white/85 dark:bg-white/10 rounded-full" />
        <div className="absolute -top-5 left-36 w-32 h-32 bg-white/85 dark:bg-white/10 rounded-full" />
      </div>

      {/* Left: Pink Qiskit Fall Fest 2026 Badge */}
      <div
        className="absolute left-[8%] top-[14%] w-[42%] sm:w-[38%] aspect-square flex items-center justify-center animate-badge-float cursor-pointer z-20"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}qiskit-badge.png`}
          alt="Qiskit Fall Fest 2026 Badge"
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Top: Hummingbird 1 (Pink & Blue) */}
      <div
        className="absolute right-[20%] top-[8%] w-[16%] sm:w-[15%] max-w-[150px] aspect-square flex items-center justify-center animate-bird-1 z-30 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}bird1.png`}
          alt="Flying Hummingbird Pink"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right Middle: Hummingbird 2 (Purple & Blue) */}
      <div
        className="absolute right-[33%] top-[22%] w-[18%] sm:w-[17%] max-w-[170px] aspect-square flex items-center justify-center animate-bird-2 z-20 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}bird2.png`}
          alt="Flying Hummingbird Purple"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right Bottom: Animated Quantum Pill (Clean Crisp Edges) */}
      <div
        className="absolute right-[16%] bottom-[14%] w-[30%] sm:w-[28%] max-w-[280px] flex items-center justify-center animate-quantum-pill cursor-pointer z-30"
        style={{
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}quantum-pill.png`}
          alt="Quantum Capsule Tag"
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
