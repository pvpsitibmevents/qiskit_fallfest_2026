import React, { useState, useEffect } from 'react';

export default function InauguralGallery({ showHeader = true, className = '', maxPreview = null }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: `${import.meta.env.BASE_URL}gallery/poster_release_2.jpg`,
      fallback: `${import.meta.env.BASE_URL}gallery/6.JPG`,
      title: 'Official Poster Release by Principal Sir',
      subtitle: 'Dr. K. Sivaji Babu releasing the official Q-CONNECT 2026 poster',
      category: 'Poster Release',
      featured: true,
    },
    {
      id: 2,
      src: `${import.meta.env.BASE_URL}gallery/poster_release_1.jpg`,
      fallback: `${import.meta.env.BASE_URL}gallery/5.JPG`,
      title: 'Inaugural Ceremony Assembly',
      subtitle: 'Dignitaries and organizing committee gathered for the ceremonial launch',
      category: 'Ceremony',
    },
    {
      id: 3,
      src: `${import.meta.env.BASE_URL}gallery/poster_release_3.jpg`,
      fallback: `${import.meta.env.BASE_URL}gallery/8.JPG`,
      title: 'Unveiling the Event Roadmap',
      subtitle: 'Official launch of the 12-step quantum learning journey',
      category: 'Poster Release',
    },
    {
      id: 4,
      src: `${import.meta.env.BASE_URL}gallery/poster_release_4.jpg`,
      fallback: `${import.meta.env.BASE_URL}gallery/9.JPG`,
      title: 'Inaugural Address & Guidance',
      subtitle: 'Principal Sir sharing his inspiring vision for quantum education',
      category: 'Ceremony',
    },
    {
      id: 5,
      src: `${import.meta.env.BASE_URL}gallery/poster_release_5.jpg`,
      fallback: `${import.meta.env.BASE_URL}gallery/11.JPG`,
      title: 'Faculty Leadership & Committee',
      subtitle: 'Department leadership and faculty coordinators at the inauguration',
      category: 'Team',
    },
    {
      id: 6,
      src: `${import.meta.env.BASE_URL}gallery/poster_release_6.jpg`,
      fallback: `${import.meta.env.BASE_URL}gallery/13.JPG`,
      title: 'Poster Unveiling with Department Head',
      subtitle: 'Dr. M. Srilakshmi (HOD, FED) and faculty displaying the poster',
      category: 'Poster Release',
    },
    {
      id: 7,
      src: `${import.meta.env.BASE_URL}gallery/poster_release_7.jpg`,
      fallback: `${import.meta.env.BASE_URL}gallery/15.JPG`,
      title: 'Organizing Faculty & Student Mentors',
      subtitle: 'Co-organizers and student leaders preparing for the fest',
      category: 'Team',
    },
    {
      id: 8,
      src: `${import.meta.env.BASE_URL}gallery/poster_release_8.jpg`,
      fallback: `${import.meta.env.BASE_URL}gallery/16.JPG`,
      title: 'Inauguration Celebration',
      subtitle: 'Commemorating the start of PVPSIT Qiskit Fall Fest 2026',
      category: 'Ceremony',
    },
    {
      id: 9,
      src: `${import.meta.env.BASE_URL}gallery/poster_release_9.jpg`,
      fallback: `${import.meta.env.BASE_URL}gallery/19.JPG`,
      title: 'Official Group Photo & Poster Display',
      subtitle: 'Complete inaugural delegation with the official event banner',
      category: 'Team',
    },
  ];

  const displayedItems = maxPreview ? galleryItems.slice(0, maxPreview) : galleryItems;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % galleryItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, galleryItems.length]);

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className={`py-16 md:py-24 px-gutter max-w-container-max mx-auto w-full ${className}`} id="gallery">
      {showHeader && (
        <div className="text-center mb-16 space-y-4">
          {/* Event Date Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 px-4 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-caps text-xs tracking-widest uppercase font-bold">
              📅 10 SEPTEMBER 2026 • OFFICIAL INAUGURATION
            </span>
          </div>

          <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface dark:text-dark-text tracking-tight">
            Inaugural Ceremony & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">Poster Release</span>
          </h2>

          <p className="font-body-md text-on-surface-variant dark:text-dark-text-muted max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            On <strong className="text-primary dark:text-primary-fixed-dim">10 September 2026</strong>, the official 
            Inaugural Ceremony of <strong>PVPSIT x Qiskit Fall Fest 2026</strong> was celebrated with great enthusiasm. 
            The ceremonial official poster was proudly unveiled and released by our respected Principal Sir, 
            <strong className="text-primary dark:text-primary-fixed-dim"> Dr. K. Sivaji Babu</strong>, alongside Head of Department 
            <strong> Dr. M. Srilakshmi</strong>, Lead Organizer <strong> Dr. Sreedevi Gogula</strong>, faculty co-organizers, 
            and student organizers.
          </p>
        </div>
      )}

      {/* Featured Poster Release Spotlight */}
      <div className="mb-14 bg-[#F8F9FF] dark:bg-dark-surface-card border-2 border-primary/40 dark:border-primary/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden relative group">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-outline-variant/30 dark:border-dark-border shadow-lg relative aspect-[16/10] bg-black/5 dark:bg-black/30 cursor-pointer"
               onClick={() => setSelectedImageIndex(0)}>
            <img
              src={`${import.meta.env.BASE_URL}gallery/poster_release_2.jpg`}
              alt="Official Poster Release by Principal Sir Dr. K. Sivaji Babu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.src = `${import.meta.env.BASE_URL}gallery/6.JPG`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex items-end p-6">
              <div className="text-white">
                <span className="bg-primary text-white font-label-caps text-[11px] px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-2">
                  Featured Moment • 10.09.2026
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-headline-md leading-snug">
                  Official Poster Release by Principal Sir Dr. K. Sivaji Babu
                </h4>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-lg">zoom_in</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-fixed-dim px-3.5 py-1.5 rounded-full text-xs font-label-caps font-bold">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>Ceremonial Landmark</span>
            </div>

            <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface dark:text-dark-text">
              Unveiling Q-CONNECT 2026
            </h3>

            <p className="font-body-md text-sm sm:text-base text-on-surface-variant dark:text-dark-text-muted leading-relaxed">
              Principal Sir <strong>Dr. K. Sivaji Babu</strong> commended the Department of Freshman Engineering and 
              the collaborative efforts of CSE & ECE faculty in bringing this premier 
              <strong> IBM Quantum Community initiative</strong> to PVPSIT students.
            </p>

            <div className="pt-2 space-y-2 text-xs font-label-caps text-on-surface dark:text-dark-text">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span><strong>Date:</strong> 10 September 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span><strong>Venue:</strong> Principal's Office & Conference Chamber, PVPSIT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span><strong>Dignitaries:</strong> Principal Sir, HOD (FED), Lead Organizer, Faculty Co-Organizers, Student Organizer</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setSelectedImageIndex(0)}
                className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-caps text-xs px-5 py-3 rounded-xl shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all font-bold hover:scale-105"
              >
                <span className="material-symbols-outlined text-base">fullscreen</span>
                <span>View Full Photo Gallery ({galleryItems.length} Photos)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 9-Photo Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedImageIndex(idx)}
            className="group bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-black/10 dark:bg-black/30">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = item.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <span className="material-symbols-outlined text-white text-2xl mb-1">zoom_in</span>
                  <p className="text-xs font-semibold">Click to expand</p>
                </div>
              </div>
              <span className="absolute top-3 left-3 bg-black/60 text-white font-label-caps text-[10px] px-2.5 py-1 rounded-full backdrop-blur-md font-bold">
                10 Sept 2026
              </span>
            </div>

            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <h4 className="font-headline-md font-bold text-base text-on-surface dark:text-dark-text group-hover:text-primary transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="font-body-md text-xs text-on-surface-variant dark:text-dark-text-muted leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/20 dark:border-dark-border flex items-center justify-between text-[11px] font-label-caps text-secondary dark:text-secondary-fixed-dim font-bold">
                <span>{item.category}</span>
                <span className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                  View Photo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-20 flex items-center gap-1 font-label-caps text-xs"
              aria-label="Close photo"
            >
              <span>Close</span>
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Navigation Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-110 z-20 border border-white/20"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>

            {/* Navigation Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-110 z-20 border border-white/20"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>

            {/* Large Image Container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-black max-h-[75vh] w-auto">
              <img
                src={galleryItems[selectedImageIndex].src}
                alt={galleryItems[selectedImageIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
                onError={(e) => {
                  e.target.src = galleryItems[selectedImageIndex].fallback;
                }}
              />
            </div>

            {/* Caption & Indicator Bar */}
            <div className="w-full mt-4 text-center text-white space-y-1 px-4">
              <div className="flex items-center justify-between text-xs font-label-caps text-white/70 max-w-xl mx-auto">
                <span>Photo {selectedImageIndex + 1} of {galleryItems.length}</span>
                <span className="bg-primary/30 text-primary-fixed-dim px-3 py-0.5 rounded-full border border-primary/40">
                  10 September 2026
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold font-headline-md">
                {galleryItems[selectedImageIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto">
                {galleryItems[selectedImageIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
