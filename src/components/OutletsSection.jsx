import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Coffee, Utensils, IceCream, Compass } from 'lucide-react';

export default function OutletsSection() {
  const outlets = [
    {
      id: 'darbe-cafe',
      title: 'Darbe — Delights Café',
      badge: 'Flagship Café',
      badgeColor: 'bg-matcha-700 text-cream-50',
      icon: Coffee,
      image: '/images/darbe-cafe.jpeg',
      description: 'Handcrafted ice cream, artisan brewed coffee, thick shakes & signature dessert sundaes served in our warm aesthetic café.',
      address: 'Aradhya Arcade, Bypass Circle, Darbe, Puttur, Karnataka 574202',
      timing: '11:00 AM – 11:30 PM (Daily)',
      phone: '+91 97314 00313',
      mapUrl: 'https://maps.google.com/?q=Nishma+Delights+Cafe+Darbe+Puttur',
      zomatoUrl: 'https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order',
    },
    {
      id: 'darbe-express',
      title: 'Darbe — Delight Express',
      badge: 'Quick Counter',
      badgeColor: 'bg-caramel-500 text-cream-50',
      icon: Utensils,
      image: '/images/darbe-express.jpeg',
      description: 'Hot sizzling shawaya, juicy shawarma, fresh fruit juices, hot tea & quick savory snacks on the go.',
      address: 'Bypass Circle Counter, Darbe, Puttur, Karnataka 574202',
      timing: '11:00 AM – 11:30 PM (Daily)',
      phone: '+91 97314 00313',
      mapUrl: 'https://maps.google.com/?q=Nishma+Delight+Express+Darbe+Puttur',
      zomatoUrl: 'https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order',
    },
    {
      id: 'sullia-cafe',
      title: 'Sullia — Delights Café',
      badge: 'Sullia Branch',
      badgeColor: 'bg-matcha-900 text-cream-50',
      icon: IceCream,
      image: '/images/sullia-cafe.jpeg',
      description: 'Bringing the iconic Nishma ice creams, specialty coffees & warm hospitality to our valued guests in Sullia.',
      address: 'HP Petrol Pump, MK Residency, Gandhinagara, Sullia, Karnataka 574239',
      timing: '11:00 AM – 11:30 PM (Daily)',
      phone: '+91 97314 00313',
      mapUrl: 'https://maps.google.com/?q=Nishma+Delights+Cafe+Sullia',
      zomatoUrl: 'https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order',
    },
  ];

  return (
    <section id="outlets" className="py-12 sm:py-24 relative overflow-hidden bg-cream-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-matcha-100 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-matcha-900 mb-3">
            <Compass className="h-3.5 w-3.5" />
            <span>Our Signature Destinations</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-5xl font-bold text-espresso-900">
            Three Outlets. <span className="italic text-matcha-700 font-normal">One Standard.</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-espresso-700 text-xs sm:text-lg">
            Swipe or select an outlet counter near you.
          </p>
        </div>

        {/* Outlets Container: Swipeable Carousel on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-8 no-scrollbar">
          {outlets.map((outlet) => {
            const Icon = outlet.icon;
            return (
              <div
                key={outlet.id}
                id={outlet.id}
                className="snap-center shrink-0 w-[85vw] sm:w-auto glass-panel rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-cream-300"
              >
                {/* Image & Badge */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-espresso-900">
                  <img
                    src={outlet.image}
                    alt={outlet.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-black/20" />
                  
                  <span className={`absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase shadow-md ${outlet.badgeColor}`}>
                    {outlet.badge}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-cream-50">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-caramel-400" />
                      <span className="font-serif font-bold text-base sm:text-lg text-cream-50 drop-shadow">
                        {outlet.title.split('—')[1]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso-900">
                      {outlet.title}
                    </h3>
                    <p className="mt-1 text-xs text-espresso-700 line-clamp-2">
                      {outlet.description}
                    </p>

                    <div className="mt-4 space-y-2 text-xs text-espresso-800">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-3.5 w-3.5 text-matcha-700 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{outlet.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-caramel-500 shrink-0" />
                        <span className="font-medium text-matcha-900">{outlet.timing}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-3 border-t border-cream-200 flex items-center justify-between gap-2">
                    <a
                      href={outlet.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-full bg-cream-200 py-2 px-3 text-[11px] font-bold text-espresso-900 transition-colors hover:bg-matcha-700 hover:text-cream-50"
                    >
                      <Compass className="h-3.5 w-3.5" />
                      <span>Directions</span>
                    </a>

                    <a
                      href={outlet.zomatoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-full bg-espresso-800 py-2 px-3 text-[11px] font-bold text-cream-50 transition-colors hover:bg-caramel-500"
                    >
                      <Utensils className="h-3.5 w-3.5 text-caramel-400" />
                      <span>Zomato</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
