import React from 'react';

/**
 * QuantumBirdsBackground
 * Renders the full flock of official IBM Quantum birds:
 * - IBM Quantum Eagle (Picture7.png): Larger (102px–108px), majestic soaring raptor with wide wingspan & regal thermal glides
 * - IBM Quantum Falcon (Picture8.png): Sleek (60px–62px), agile predatory raptor with dynamic swoops and dives
 * - IBM Quantum Hummingbirds (bird1.png & bird2.png): Delicate (48px–52px) agile flyers with smooth non-vibrating wingbeats
 * 
 * Features:
 * - Forward-facing flight vectors (beak always points forward in direction of travel)
 * - Majestic, vibration-free avian physics (smooth wingbeats & soaring glides)
 * - Luminous quantum field aura
 */
export default function QuantumBirdsBackground() {
  const eagle = `${import.meta.env.BASE_URL}theme/Picture7.png`;
  const falcon = `${import.meta.env.BASE_URL}theme/Picture8.png`;
  const bird1 = `${import.meta.env.BASE_URL}bird1.png`;
  const bird2 = `${import.meta.env.BASE_URL}bird2.png`;

  const birds = [
    {
      id: 'eagle-1-ltr-majestic',
      src: eagle,
      name: 'IBM Quantum Eagle Majestic Soar',
      flightClass: 'animate-flight-ltr-wave',
      facingClass: 'eagle-falcon-face-ltr',
      flapClass: 'animate-eagle-soar',
      isEagle: true,
      style: {
        animationDelay: '0s',
        animationDuration: '30s',
        width: '110px',
        opacity: 0.5,
      },
    },
    {
      id: 'falcon-2-rtl-top',
      src: falcon,
      name: 'IBM Quantum Falcon High Swift',
      flightClass: 'animate-flight-rtl-top',
      facingClass: 'eagle-falcon-face-rtl',
      flapClass: 'animate-falcon-soar',
      isEagle: false,
      style: {
        animationDelay: '-5s',
        animationDuration: '26s',
        width: '62px',
        opacity: 0.5,
      },
    },
    {
      id: 'hummingbird-3-ltr-swoop',
      src: bird1,
      name: 'IBM Quantum Hummingbird Pink',
      flightClass: 'animate-flight-ltr-swoop',
      facingClass: 'bird1-face-forward-ltr',
      flapClass: 'animate-hummingbird-glide',
      isEagle: false,
      style: {
        animationDelay: '-11s',
        animationDuration: '24s',
        width: '50px',
        opacity: 0.5,
      },
    },
    {
      id: 'eagle-4-rtl-panorama',
      src: eagle,
      name: 'IBM Quantum Eagle High Glide',
      flightClass: 'animate-flight-rtl-arc',
      facingClass: 'eagle-falcon-face-rtl',
      flapClass: 'animate-eagle-soar',
      isEagle: true,
      style: {
        animationDelay: '-16s',
        animationDuration: '34s',
        width: '104px',
        opacity: 0.5,
      },
    },
    {
      id: 'hummingbird-5-ltr-cruise',
      src: bird2,
      name: 'IBM Quantum Hummingbird Purple',
      flightClass: 'animate-flight-ltr-cruise',
      facingClass: 'bird2-face-forward-ltr',
      flapClass: 'animate-hummingbird-glide',
      isEagle: false,
      style: {
        animationDelay: '-22s',
        animationDuration: '28s',
        width: '52px',
        opacity: 0.5,
      },
    },
    {
      id: 'falcon-6-rtl-deep',
      src: falcon,
      name: 'IBM Quantum Falcon Deep Dive',
      flightClass: 'animate-flight-rtl-deep',
      facingClass: 'eagle-falcon-face-rtl',
      flapClass: 'animate-falcon-glide',
      isEagle: false,
      style: {
        animationDelay: '-27s',
        animationDuration: '27s',
        width: '64px',
        opacity: 0.5,
      },
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-[1] select-none"
    >
      {birds.map((b) => (
        <div
          key={b.id}
          className={`absolute will-change-transform ${b.flightClass}`}
          style={b.style}
        >
          {/* Forward-facing orientation: Beak ALWAYS points in flight vector */}
          <div className={`relative ${b.facingClass}`}>
            {/* Aerodynamic wing flapping & body lift */}
            <div className={`relative ${b.flapClass}`}>
              <img
                src={b.src}
                alt=""
                className="relative z-10 w-full h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_0_14px_rgba(255,255,255,0.28)] dark:drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
                loading="eager"
                draggable="false"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
