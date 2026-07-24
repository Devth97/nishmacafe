import React, { useState } from 'react';
import { Sparkles, Utensils, Check } from 'lucide-react';
import { DoodleSparkle } from './CafeDoodles';

export default function InteractiveCafeBar() {
  const drinks = [
    {
      id: 'matcha',
      name: 'Iced Matcha Oat Latte',
      color: 'bg-matcha-500',
      liquidColor: 'from-matcha-700 via-matcha-500 to-cream-100',
      badge: 'Instagram Favorite',
      sweetness: 'Moderate',
      vibe: 'Cozy & Refreshing',
      price: '₹170'
    },
    {
      id: 'espresso',
      name: 'Spanish Caramel Espresso',
      color: 'bg-espresso-700',
      liquidColor: 'from-espresso-900 via-caramel-500 to-cream-200',
      badge: 'Bestseller',
      sweetness: 'Rich & Sweet',
      vibe: 'Bold Energy Surge',
      price: '₹160'
    },
    {
      id: 'belgian',
      name: 'Belgian Cocoa Gelato Shake',
      color: 'bg-espresso-950',
      liquidColor: 'from-espresso-950 via-espresso-800 to-caramel-600',
      badge: 'Decadent',
      sweetness: 'Indulgent',
      vibe: 'Pure Happiness',
      price: '₹190'
    },
    {
      id: 'rose',
      name: 'Rose Berry Iced Brew',
      color: 'bg-rose-400',
      liquidColor: 'from-rose-500 via-rose-300 to-cream-50',
      badge: 'Signature Blend',
      sweetness: 'Fruity & Crisp',
      vibe: 'Sunny Vibe',
      price: '₹150'
    }
  ];

  const [selected, setSelected] = useState(drinks[0]);
  const [iceLevel, setIceLevel] = useState(70);
  const [creamLevel, setCreamLevel] = useState(80);

  return (
    <div className="relative pt-4 sm:pt-6 pb-2 my-8 sm:my-12 max-w-4xl mx-auto px-1 sm:px-0">
      
      {/* Decorative Taped Sticker Header above the card */}
      <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 z-20 bg-caramel-500 text-cream-50 px-4 sm:px-6 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest shadow-lg flex items-center gap-1.5 rotate-[-1deg] border border-cream-100 whitespace-nowrap">
        <DoodleSparkle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cream-50 opacity-100" />
        <span>Interactive Cafe Vibe Lab</span>
      </div>

      <div className="glass-panel rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-10 border-2 border-matcha-300/80 shadow-2xl relative overflow-hidden pt-8 sm:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          
          {/* Left Interactive Controls */}
          <div>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-espresso-900 leading-tight text-center md:text-left">
              Craft Your <span className="italic text-matcha-700 font-normal">Perfect Sip</span>
            </h3>
            <p className="text-xs text-espresso-800 mt-1 text-center md:text-left">
              Pick your favorite drink creation to see its live visual layer blend & flavor profile:
            </p>

            {/* Drink Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mt-4 sm:mt-5">
              {drinks.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelected(d)}
                  className={`p-3 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between ${
                    selected.id === d.id
                      ? 'bg-matcha-700 text-cream-50 border-matcha-700 shadow-md scale-[1.01]'
                      : 'bg-cream-50 text-espresso-900 border-cream-300 hover:bg-cream-200'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold leading-snug">{d.name}</div>
                    <div className={`text-[10px] ${selected.id === d.id ? 'text-cream-200' : 'text-espresso-600'}`}>
                      {d.price}
                    </div>
                  </div>
                  {selected.id === d.id && <Check className="w-4 h-4 text-cream-50 shrink-0 ml-2" />}
                </button>
              ))}
            </div>

            {/* Sliders */}
            <div className="mt-5 sm:mt-6 space-y-3 bg-cream-50/90 p-3.5 sm:p-4 rounded-2xl border border-cream-300">
              <div>
                <div className="flex justify-between text-xs font-bold text-espresso-800 mb-1">
                  <span>Ice Refreshment Level</span>
                  <span>{iceLevel}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={iceLevel}
                  onChange={(e) => setIceLevel(e.target.value)}
                  className="w-full accent-matcha-700 h-2 bg-cream-200 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-espresso-800 mb-1">
                  <span>Sweet Creaminess</span>
                  <span>{creamLevel}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={creamLevel}
                  onChange={(e) => setCreamLevel(e.target.value)}
                  className="w-full accent-caramel-500 h-2 bg-cream-200 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right Animated Cup Visualizer */}
          <div className="flex flex-col items-center justify-center p-5 sm:p-6 bg-cream-100/90 rounded-3xl border border-cream-300 relative shadow-inner">
            
            {/* Animated Cup */}
            <div className="relative w-28 sm:w-32 h-40 sm:h-44 border-4 border-espresso-900 rounded-b-[2rem] rounded-t-lg overflow-hidden bg-cream-50 shadow-inner flex flex-col justify-end">
              
              {/* Liquid Fill Layer */}
              <div
                className={`w-full bg-gradient-to-t ${selected.liquidColor} transition-all duration-700 ease-out relative`}
                style={{ height: `${creamLevel}%` }}
              >
                {/* Liquid Waves */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-white/40 animate-pulse rounded-full" />
              </div>

              {/* Floating Ice Cubes */}
              <div className="absolute inset-0 flex flex-wrap gap-1.5 sm:gap-2 p-2.5 sm:p-3 items-end pointer-events-none">
                {[...Array(Math.floor(iceLevel / 25))].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 bg-white/70 backdrop-blur-sm rounded-md border border-white/90 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Straw */}
            <div className="absolute top-3 sm:top-4 right-1/3 w-2.5 sm:w-3 h-24 sm:h-28 bg-rose-400 rounded-full rotate-[15deg] border-2 border-espresso-900 -z-0" />

            {/* Badge Description */}
            <div className="mt-3 sm:mt-4 text-center">
              <span className="inline-block rounded-full bg-matcha-100 text-matcha-900 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 sm:px-3 sm:py-1 mb-1">
                {selected.badge}
              </span>
              <h4 className="font-serif font-bold text-base sm:text-lg text-espresso-900">{selected.name}</h4>
              <p className="text-xs text-matcha-700 font-serif italic mt-0.5">"{selected.vibe}"</p>
            </div>

            {/* Order Action Button */}
            <a
              href="https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-espresso-900 px-5 sm:px-6 py-2.5 text-xs font-bold text-cream-50 hover:bg-caramel-500 transition-colors shadow-md"
            >
              <Utensils className="w-3.5 h-3.5 text-caramel-400" />
              <span>Order This Vibe on Zomato</span>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}
