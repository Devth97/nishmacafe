import React from 'react';

// Custom hand-drawn style vector cafe doodles
export const DoodleCoffeeMug = ({ className = "w-6 h-6 text-espresso-700 opacity-30" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 24h32v24a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8V24z" />
    <path d="M46 28h6a6 6 0 0 1 0 12h-6" />
    <path d="M22 14c0-4 4-4 4-8" />
    <path d="M30 14c0-4 4-4 4-8" />
    <path d="M38 14c0-4 4-4 4-8" />
  </svg>
);

export const DoodleIceCream = ({ className = "w-6 h-6 text-matcha-700 opacity-30" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M24 32l8 24 8-24" />
    <path d="M20 32h24" />
    <path d="M20 32a12 12 0 1 1 24 0" />
    <path d="M26 20a8 8 0 0 1 12 0" />
    <circle cx="32" cy="10" r="4" fill="currentColor" />
  </svg>
);

export const DoodleCoffeeBean = ({ className = "w-5 h-5 text-caramel-500 opacity-30" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="32" cy="32" rx="16" ry="24" transform="rotate(30 32 32)" />
    <path d="M24 16c6 8 4 24 16 32" />
  </svg>
);

export const DoodleCroissant = ({ className = "w-6 h-6 text-caramel-600 opacity-30" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 40c4-12 14-22 32-20 8 1 12 8 8 16-6 12-20 18-32 12" />
    <path d="M20 28c4 4 8 12 6 18" />
    <path d="M34 22c4 4 8 12 6 18" />
  </svg>
);

export const DoodleTakeawayCup = ({ className = "w-6 h-6 text-espresso-700 opacity-30" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 20l4 36h20l4-36H18z" />
    <path d="M14 14h36v6H14z" />
    <path d="M26 14v-4h12v4" />
    <path d="M22 36c4 2 16 2 20 0" />
  </svg>
);

export const DoodleSparkle = ({ className = "w-5 h-5 text-amber-500 opacity-40" }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className}>
    <path d="M32 0l6 24 24 6-24 6-6 24-6-24-24-6 24-6z" />
  </svg>
);

export const DoodleSquiggle = ({ className = "w-12 h-4 text-matcha-500 opacity-30" }) => (
  <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={className}>
    <path d="M5 10 Q 25 0, 45 10 T 85 10 T 95 10" />
  </svg>
);

export const DoodleLatteHeart = ({ className = "w-6 h-6 text-rose-400 opacity-40" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="32" cy="32" r="22" />
    <path d="M32 38l-7-7a5 5 0 0 1 7-7 5 5 0 0 1 7 7l-7 7z" fill="currentColor" opacity="0.3" />
  </svg>
);

export const DoodleWaffle = ({ className = "w-6 h-6 text-caramel-500 opacity-30" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="14" y="14" width="36" height="36" rx="6" />
    <path d="M26 14v36" />
    <path d="M38 14v36" />
    <path d="M14 26h36" />
    <path d="M14 38h36" />
  </svg>
);
