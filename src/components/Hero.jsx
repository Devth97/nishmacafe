import React from 'react';
import { Sparkles, MapPin, Coffee, ArrowRight, Star, Heart, Award, ChevronDown, CheckCircle2 } from 'lucide-react';
import { DoodleCoffeeMug, DoodleIceCream, DoodleSparkle, DoodleSquiggle } from './CafeDoodles';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 overflow-x-hidden">
      
      {/* Radial Warm Glow behind Hero */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[28rem] sm:h-[42rem] w-[28rem] sm:w-[42rem] rounded-full bg-gradient-to-tr from-matcha-100/70 via-cream-300/40 to-caramel-400/20 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Headline & Polaroid Photo Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Big Headline & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Taped Cute Sticker Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-cream-50 px-3.5 py-1.5 sm:px-4 sm:py-2 border-2 border-matcha-300 shadow-md mb-5 rotate-[-1deg]">
              <DoodleCoffeeMug className="w-4 h-4 sm:w-5 sm:h-5 text-matcha-700 opacity-90" />
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-espresso-900">
                Aesthetic Cafe & Ice Cream
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-caramel-500 animate-ping" />
              <span className="text-[10px] sm:text-xs font-serif italic text-matcha-700">Est. 2018</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-espresso-900 leading-[1.15]">
              Where Every <br className="hidden sm:inline" />
              <span className="relative inline-block text-gradient-matcha font-normal italic">
                Celebration
                <DoodleSquiggle className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-caramel-500 opacity-80" />
              </span>{" "}
              Begins.
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg lg:text-xl text-espresso-800 font-normal leading-relaxed">
              Step into <strong className="font-bold text-matcha-900">Nishma's Delights</strong> — your cozy aesthetic cafe for handcrafted Gudbud ice creams, freshly brewed artisan coffees, and sizzling desserts across <span className="underline decoration-caramel-500 decoration-wavy">Darbe & Sullia</span>.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-full bg-matcha-700 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold text-cream-50 shadow-xl transition-all duration-300 hover:bg-matcha-900 hover:scale-105"
              >
                <span>Explore Digital Menu</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#outlets"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-full bg-cream-50 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-espresso-900 border-2 border-cream-300 shadow-md transition-all duration-300 hover:bg-cream-200 hover:scale-105"
              >
                <MapPin className="h-4 w-4 text-caramel-500" />
                <span>Visit 3 Outlets</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs text-espresso-800 font-bold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-matcha-700" />
                <span>Handcrafted Fresh Daily</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-matcha-700" />
                <span>7+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-matcha-700" />
                <span>4.2★ Google Reviews</span>
              </div>
            </div>

          </div>

          {/* Right Column: Aesthetic Polaroid Stack & Stickers */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
            
            {/* Polaroid Photo 1 (Cafe Interior) */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-xs bg-cream-50 p-3.5 sm:p-4 pb-6 sm:pb-8 rounded-2xl shadow-2xl border border-cream-300 rotate-[-3deg] transition-transform duration-500 hover:rotate-0 hover:scale-105">
              
              {/* Tape Effect on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-amber-100/80 border border-amber-200/50 backdrop-blur-sm rotate-[2deg] shadow-sm" />

              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-espresso-900">
                <img
                  src="/images/indoor8.jpeg"
                  alt="Nishma's Delights Interior"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-3 sm:mt-4 text-center">
                <span className="font-handwriting text-xl sm:text-2xl text-espresso-900 block font-bold">
                  Warm Cafe Vibes ✨
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-matcha-700 tracking-widest">
                  Flagship Store — Darbe
                </span>
              </div>

              {/* Cute Floating Sticker */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-caramel-500 text-cream-50 text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg rotate-[8deg] flex items-center gap-1">
                <DoodleSparkle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cream-50 opacity-100" />
                <span>100% Pure Happiness</span>
              </div>
            </div>

            {/* Polaroid Photo 2 (Signature Dessert / Logo emblem background) */}
            <div className="hidden sm:block absolute top-12 right-0 sm:-right-2 w-52 sm:w-60 bg-cream-50 p-3 pb-5 rounded-2xl shadow-xl border border-cream-300 rotate-[6deg] -z-0 transition-transform duration-500 hover:rotate-2 hover:z-20">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-espresso-950">
                <img
                  src="/images/signature.jpeg"
                  alt="Nishma's Emblem"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="font-handwriting text-lg text-espresso-900 block">
                  A Taste of Ecstasy ☕
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Outlet Quick Selector Cards */}
        <div id="outlets-quick" className="mt-10 sm:mt-16 pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          
          <a
            href="#darbe-cafe"
            className="group glass-panel rounded-3xl p-5 sm:p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-matcha-200 flex items-center gap-4 sm:gap-5"
          >
            <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl bg-matcha-100 p-2 sm:p-2.5 border border-matcha-200 flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo-cafe-v2.png"
                alt="Nishma's Delights Café"
                className="h-full w-full object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-matcha-700 bg-matcha-100 px-2 py-0.5 rounded-full">
                Flagship Store
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-espresso-900 mt-1">
                Darbe Delights Café
              </h3>
              <p className="text-xs text-espresso-700 mt-0.5">
                Artisan Coffee & Desserts
              </p>
            </div>
          </a>

          <a
            href="#darbe-express"
            className="group glass-panel rounded-3xl p-5 sm:p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-caramel-300 flex items-center gap-4 sm:gap-5"
          >
            <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl bg-cream-200 p-2 sm:p-2.5 border border-cream-300 flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo-express-v2.png"
                alt="Nishma's Delight Express"
                className="h-full w-full object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-caramel-600 bg-cream-300 px-2 py-0.5 rounded-full">
                Quick Counter
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-espresso-900 mt-1">
                Darbe Delight Express
              </h3>
              <p className="text-xs text-espresso-700 mt-0.5">
                Shawarma & Fresh Juices
              </p>
            </div>
          </a>

          <a
            href="#sullia-cafe"
            className="group glass-panel rounded-3xl p-5 sm:p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-matcha-200 flex items-center gap-4 sm:gap-5"
          >
            <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl bg-matcha-50 p-2 sm:p-2.5 border border-matcha-200 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Sullia Delights Café"
                className="h-full w-full object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-matcha-900 bg-matcha-100 px-2 py-0.5 rounded-full">
                Sullia Counter
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-espresso-900 mt-1">
                Sullia Delights Café
              </h3>
              <p className="text-xs text-espresso-700 mt-0.5">
                MK Residency, Gandhinagara
              </p>
            </div>
          </a>

        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="mt-8 sm:mt-12 flex justify-center">
        <a href="#outlets" className="animate-bounce p-2 text-matcha-700 hover:text-espresso-900">
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>
    </section>
  );
}
