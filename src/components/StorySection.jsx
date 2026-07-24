import React from 'react';
import { Heart, Sparkles, Coffee, Award, ShieldCheck, Smile } from 'lucide-react';

export default function StorySection() {
  const pillars = [
    {
      icon: Award,
      title: "7+ Years of Craftsmanship",
      desc: "Perfected artisan ice cream recipes and coffee blends perfected through years of hands-on passion."
    },
    {
      icon: ShieldCheck,
      title: "Pure & Fresh Ingredients",
      desc: "No compromise on quality. Pure milk, real fruit pulps, 70% dark Belgian cocoa, and freshly roasted espresso."
    },
    {
      icon: Smile,
      title: "Warm Neighborly Hospitality",
      desc: "Every guest is family. Where our regulars are greeted by name and every visit feels like home."
    }
  ];

  return (
    <section id="story" className="py-24 relative bg-cream-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image composition */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-cream-300">
              <img
                src="/images/indoor8.jpeg"
                alt="Nishma's Delights Interior"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge 1 */}
            <div className="glass-panel absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-xl max-w-xs hidden sm:block border border-matcha-200">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-matcha-700 p-2.5 text-cream-50">
                  <Coffee className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-espresso-900">Artisan Cafe Vibe</h4>
                  <p className="text-xs text-espresso-700">Where Every Celebration Begins</p>
                </div>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="glass-panel absolute -top-6 -right-6 rounded-2xl p-5 shadow-xl hidden sm:block border border-caramel-300">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  <Sparkles className="h-5 w-5 fill-current" />
                </div>
                <span className="font-serif font-bold text-sm text-espresso-900">A Taste of Ecstasy</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-caramel-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-caramel-600 mb-4">
              <Heart className="h-3.5 w-3.5 fill-current" />
              <span>Our Passion & Legacy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-900 leading-tight">
              Crafting Pure Joy <br />
              <span className="italic text-matcha-700 font-normal">One Scoop & Sip at a Time.</span>
            </h2>

            <div className="mt-6 space-y-4 text-espresso-800 text-sm sm:text-base leading-relaxed">
              <p>
                Nishma’s Delights was founded with a singular vision — to create an inviting space where families, friends, and neighbors can celebrate life's good moments over genuinely extraordinary food and drinks.
              </p>
              <p>
                Backed by more than seven years of dedicated craft in the ice cream & specialty coffee trade, Nishma's blends traditional technique with the warmth of local hospitality.
              </p>
              <p>
                From our flagship café in Darbe to the quick counter at Delight Express and our destination in Sullia, every detail is held to the highest standard of excellence.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-10 space-y-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-cream-50 border border-cream-200">
                    <div className="rounded-xl bg-matcha-100 p-2.5 text-matcha-900 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-espresso-900">{p.title}</h4>
                      <p className="text-xs text-espresso-700 mt-0.5">{p.desc}</p>
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
