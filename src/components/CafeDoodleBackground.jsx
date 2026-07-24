import React, { useEffect, useState } from 'react';
import {
  DoodleCoffeeMug,
  DoodleIceCream,
  DoodleCoffeeBean,
  DoodleCroissant,
  DoodleTakeawayCup,
  DoodleSparkle,
  DoodleSquiggle,
  DoodleLatteHeart,
  DoodleWaffle
} from './CafeDoodles';

export default function CafeDoodleBackground() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      
      {/* Floating Doodles Layer 1 - Slow Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${offsetY * -0.05}px)` }}
      >
        {/* Top Left Coffee Mug */}
        <div className="absolute top-24 left-[5%] animate-float">
          <DoodleCoffeeMug className="w-12 h-12 text-matcha-700/25 rotate-[-12deg]" />
        </div>

        {/* Top Right Ice Cream */}
        <div className="absolute top-36 right-[8%] animate-float-slow">
          <DoodleIceCream className="w-14 h-14 text-caramel-500/25 rotate-[15deg]" />
        </div>

        {/* Mid Left Coffee Beans */}
        <div className="absolute top-[40%] left-[3%] animate-float">
          <DoodleCoffeeBean className="w-10 h-10 text-espresso-700/20 rotate-[45deg]" />
        </div>

        {/* Mid Right Croissant */}
        <div className="absolute top-[48%] right-[4%] animate-float-slow">
          <DoodleCroissant className="w-14 h-14 text-caramel-600/25 rotate-[-20deg]" />
        </div>

        {/* Bottom Left Waffle */}
        <div className="absolute top-[75%] left-[6%] animate-float">
          <DoodleWaffle className="w-12 h-12 text-matcha-700/20 rotate-[10deg]" />
        </div>

        {/* Bottom Right Takeaway Cup */}
        <div className="absolute top-[82%] right-[7%] animate-float-slow">
          <DoodleTakeawayCup className="w-14 h-14 text-espresso-800/20 rotate-[-15deg]" />
        </div>
      </div>

      {/* Floating Sparkles & Heart Accents */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${offsetY * -0.08}px)` }}
      >
        <div className="absolute top-[18%] left-[25%] animate-pulse">
          <DoodleSparkle className="w-6 h-6 text-caramel-400/35" />
        </div>
        <div className="absolute top-[32%] right-[22%] animate-pulse">
          <DoodleLatteHeart className="w-8 h-8 text-rose-400/30 rotate-[-10deg]" />
        </div>
        <div className="absolute top-[60%] left-[18%] animate-pulse">
          <DoodleSquiggle className="w-16 h-5 text-matcha-500/30" />
        </div>
        <div className="absolute top-[85%] right-[30%] animate-pulse">
          <DoodleSparkle className="w-7 h-7 text-matcha-700/30" />
        </div>
      </div>

      {/* Subtle Grid Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#3c2a21_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />
    </div>
  );
}
