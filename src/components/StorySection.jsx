import React from 'react';
import { Heart, Sparkles, Coffee, Award, ShieldCheck, Smile } from 'lucide-react';

export default function StorySection() {
  const pillars = [
    {
      icon: Award,
      title: "7+ Years of Craftsmanship",
      desc: "Artisan ice cream recipes and coffee blends perfected through years of hands-on passion."
    },
    {
      icon: ShieldCheck,
      title: "Pure & Fresh Ingredients",
      desc: "Pure dairy milk, real Alphonso mango pulps, 70% dark Belgian cocoa, and freshly roasted Arabica beans."
    },
    {
      icon: Smile,
      title: "Warm Neighborly Hospitality",
      desc: "Where our regulars are greeted by name and every visit feels like home."
    }
  ];

  return (
    <section id="story" className="py-12 sm:py-24 relative bg-cream-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Image composition */}
          <div className="relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-cream-300">
              <img
                src="/images/indoor8.jpeg"
                alt="Nishma's Delights Interior"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge 1 */}
            <div className="glass-panel absolute -bottom-4 -left-4 rounded-2xl p-4 shadow-xl max-w-xs hidden sm:block border border-matcha-200">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-matcha-700 p-2 text-cream-50">
                  <Coffee className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-espresso-900">Artisan Cafe Vibe</h4>
                  <p className="text-[10px] text-espresso-700">Where Every Celebration Begins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-caramel-400/20 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-caramel-600 mb-3">
              <Heart className="h-3.5 w-3.5 fill-current" />
              <span>Our Legacy</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-espresso-900 leading-tight">
              Crafting Pure Joy <br className="hidden sm:inline" />
              <span className="italic text-matcha-700 font-normal">One Scoop & Sip at a Time.</span>
            </h2>

            <div className="mt-4 space-y-3 text-espresso-800 text-xs sm:text-base leading-relaxed">
              <p>
                Nishma’s Delights was founded to create an inviting space where families and friends can mark good days over genuinely extraordinary food and drinks.
              </p>
              <p>
                Backed by more than seven years of dedicated craft in Darbe & Sullia, every detail is held to the highest standard of excellence.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-6 space-y-3">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-cream-50 border border-cream-200">
                    <div className="rounded-xl bg-matcha-100 p-2 text-matcha-900 shrink-0 mt-0.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-espresso-900">{p.title}</h4>
                      <p className="text-[11px] text-espresso-700 mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
