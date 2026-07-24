import React, { useState } from 'react';
import { Camera, Instagram, Star, Heart, Maximize2, X, Quote } from 'lucide-react';

export default function AmbienceGallery() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    {
      src: '/images/indoor8.jpeg',
      title: 'Warm Arched Seating',
      desc: 'Backlit arched wall panels & cozy cream banquette seating'
    },
    {
      src: '/images/interior.jpeg',
      title: 'Artisan Counter Lighting',
      desc: 'Warm wooden pendant lamps illuminating the ice cream counter'
    },
    {
      src: '/images/indor11.jpeg',
      title: 'Cafe Social Lounge',
      desc: 'Designed for family celebrations and afternoon coffee dates'
    },
    {
      src: '/images/ambiet.jpeg',
      title: 'Signature Ambient Vibe',
      desc: 'Sleek modern interior with serene cozy atmosphere'
    },
    {
      src: '/images/signature.jpeg',
      title: 'Craftsmanship Emblem',
      desc: 'Gold Nishma emblem on polished stone wall'
    }
  ];

  const reviews = [
    {
      author: "Praveen Kumar",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best ice cream cafe in Puttur! The Gudbud sundae and Spanish iced latte are unmatched. Warm ambience."
    },
    {
      author: "Ananya Shetty",
      rating: 5,
      date: "1 month ago",
      comment: "Love the chill vibe! Nishma's has been our go-to spot for birthdays and evening hangouts for years."
    },
    {
      author: "Rahul Rai",
      rating: 5,
      date: "3 weeks ago",
      comment: "Great spot near Bypass Circle! Clean, beautiful interior, delicious sizzling brownie and artisanal coffees."
    }
  ];

  return (
    <section id="ambience" className="py-12 sm:py-24 relative bg-cream-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-matcha-100 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-matcha-900 mb-3">
            <Camera className="h-3.5 w-3.5" />
            <span>Social & Interior Moments</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-5xl font-bold text-espresso-900">
            Step Into <span className="italic text-matcha-700 font-normal">Nishma’s Vibe</span>
          </h2>
          <p className="mt-2 text-xs sm:text-base text-espresso-700">
            Swipe through our warm interior spaces designed for celebrations and quiet coffee breaks.
          </p>
        </div>

        {/* Gallery Horizontal Carousel on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-3 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-6 no-scrollbar">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(item)}
              className="snap-center shrink-0 w-[72vw] sm:w-auto group relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md transition-all duration-500 border border-cream-200"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-3 left-3 right-3 text-cream-50">
                <h4 className="font-serif font-bold text-sm sm:text-lg text-cream-50">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-cream-200 mt-0.5 line-clamp-1">{item.desc}</p>
              </div>

              <div className="absolute top-3 right-3 rounded-full bg-cream-50/80 backdrop-blur-md p-1.5 text-espresso-900 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/nishmadelights._cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-xs font-bold text-espresso-900 border border-cream-300 shadow-md transition-all hover:bg-matcha-700 hover:text-cream-50"
          >
            <Instagram className="h-4 w-4 text-pink-600" />
            <span>Follow @nishmadelights._cafe</span>
          </a>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12 sm:mt-20 pt-10 sm:pt-16 border-t border-cream-300">
          <div className="text-center mb-8">
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-espresso-900">
              Loved by Our Community
            </h3>
            <div className="flex items-center justify-center gap-1 mt-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
              <span className="text-xs font-bold text-espresso-800 ml-1.5">4.2 / 5.0 (105+ Reviews)</span>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-6 no-scrollbar">
            {reviews.map((rev, i) => (
              <div key={i} className="snap-center shrink-0 w-[80vw] sm:w-auto glass-panel rounded-2xl p-4 sm:p-6 relative flex flex-col justify-between">
                <Quote className="h-6 w-6 text-matcha-300 opacity-40 absolute top-3 right-3" />
                <p className="text-xs text-espresso-800 italic leading-relaxed relative z-10">
                  "{rev.comment}"
                </p>
                <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-espresso-900">{rev.author}</h5>
                    <span className="text-[9px] text-espresso-500">{rev.date}</span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/80 backdrop-blur-md cursor-pointer"
        >
          <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-cream-50 shadow-2xl">
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="w-full max-h-[80vh] object-contain bg-espresso-950"
            />
            <div className="p-4 bg-cream-50">
              <h3 className="font-serif text-lg font-bold text-espresso-900">{activeImage.title}</h3>
              <p className="text-xs text-espresso-700 mt-0.5">{activeImage.desc}</p>
            </div>
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 rounded-full bg-cream-50/90 p-1.5 text-espresso-900 hover:bg-cream-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
