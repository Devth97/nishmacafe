import React, { useState } from 'react';
import { Coffee, IceCream, Utensils, Flame, Search, Star, ExternalLink, Sparkles, X, Check, Heart } from 'lucide-react';
import { DoodleSparkle, DoodleLatteHeart } from './CafeDoodles';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', name: 'All Delights', icon: Sparkles },
    { id: 'coffee', name: 'Coffees', icon: Coffee },
    { id: 'icecream', name: 'Ice Cream', icon: IceCream },
    { id: 'desserts', name: 'Desserts', icon: Flame },
    { id: 'express', name: 'Shawarma', icon: Utensils },
    { id: 'juices', name: 'Shakes', icon: Sparkles },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Classic Espresso & Cappuccino",
      category: "coffee",
      price: "₹90 - ₹140",
      tag: "Bestseller",
      tagColor: "bg-caramel-500 text-cream-50",
      rating: "4.9",
      description: "Freshly ground Arabica espresso beans extracted to perfection, topped with silky micro-foam latte art.",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
      flavorProfile: "Rich roasted aroma, dark chocolate undertones, velvety micro-foam"
    },
    {
      id: 2,
      name: "Spanish Iced Latte",
      category: "coffee",
      price: "₹160",
      tag: "Chef Special",
      tagColor: "bg-matcha-700 text-cream-50",
      rating: "5.0",
      description: "Double shot espresso shaken with sweetened condensed milk and cold whole milk served over ice cubes.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
      flavorProfile: "Creamy sweet, bold espresso punch, refreshingly ice cold"
    },
    {
      id: 3,
      name: "Handcrafted Gudbud Sundae",
      category: "icecream",
      price: "₹180",
      tag: "Iconic Classic",
      tagColor: "bg-matcha-900 text-cream-50",
      rating: "4.9",
      description: "Multi-layered scoops of handcrafted Vanilla, Strawberry & Mango ice cream with roasted dry fruits, tutty-fruity, and fruit jelly.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      flavorProfile: "Layered sweetness, crunchy roasted nuts, fresh fruit syrup"
    },
    {
      id: 4,
      name: "Belgian Chocolate Scoop & Cone",
      category: "icecream",
      price: "₹120",
      tag: "Customer Favorite",
      tagColor: "bg-espresso-800 text-cream-50",
      rating: "4.8",
      description: "Ultra-rich dark chocolate ice cream made with 70% pure cocoa, served in a freshly baked waffle cone.",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
      flavorProfile: "Decadent dark cocoa, buttery waffle crunch"
    },
    {
      id: 5,
      name: "Signature Sizzling Brownie",
      category: "desserts",
      price: "₹210",
      tag: "Must Try",
      tagColor: "bg-caramel-600 text-cream-50",
      rating: "5.0",
      description: "Warm fudgy walnut brownie served on a sizzling hot iron plate with a cold scoop of vanilla bean ice cream & chocolate fudge drizzle.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      flavorProfile: "Hot & cold contrast, molten chocolate, roasted walnuts"
    },
    {
      id: 6,
      name: "Charcoal Grilled Chicken Shawaya",
      category: "express",
      price: "₹240 (Half) / ₹450 (Full)",
      tag: "Express Special",
      tagColor: "bg-caramel-500 text-cream-50",
      rating: "4.9",
      description: "Whole Arabian charcoal-roasted chicken slow-marinated in special spices, grilled till juicy & smoky, served with garlic toum & rotis.",
      image: "/images/chicken-shawaya.jpg",
      flavorProfile: "Smoky charcoal roast, garlic toum cream, juicy chicken"
    },
    {
      id: 7,
      name: "Special Arabian Roll Shawarma",
      category: "express",
      price: "₹130",
      tag: "Express Popular",
      tagColor: "bg-matcha-700 text-cream-50",
      rating: "4.8",
      description: "Shredded chicken wrapped tightly in pita with pickled cucumbers, french fries, and creamy house garlic sauce.",
      image: "/images/chicken-shawarma-roll.jpg",
      flavorProfile: "Tangy pickled crunch, rich garlic toum, spiced chicken wrap"
    },
    {
      id: 8,
      name: "Avocado & Mango Milkshake",
      category: "juices",
      price: "₹150",
      tag: "Fresh & Healthy",
      tagColor: "bg-matcha-900 text-cream-50",
      rating: "4.7",
      description: "Creamy fresh hass avocado blended with Alphonso mango pulp and cold whole milk topped with chia seeds.",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
      flavorProfile: "Silky avocado richness, tropical sweet mango"
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-12 sm:py-24 relative bg-cream-100/80">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-caramel-400/20 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-caramel-600 mb-3 rotate-[-1deg]">
            <DoodleSparkle className="w-3 h-3 text-caramel-600 opacity-100" />
            <span>Curated Cafe Menu</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-5xl font-bold text-espresso-900">
            Handcrafted <span className="italic text-matcha-700 font-normal">Sips & Treats</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-espresso-800 text-xs sm:text-base">
            Prepared fresh to order using Arabica coffee beans, pure dairy & 70% dark Belgian cocoa.
          </p>
        </div>

        {/* Search Bar & Category Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 w-full sm:w-auto no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 sm:px-5 py-2 text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-matcha-700 text-cream-50 shadow-md scale-105'
                      : 'bg-cream-50 text-espresso-900 border border-cream-300 hover:bg-cream-200'
                  }`}
                >
                  <Icon className={`h-3 w-3 ${isActive ? 'text-cream-50' : 'text-matcha-700'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-espresso-500" />
            <input
              type="text"
              placeholder="Search latte, shawarma..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-cream-50 border border-cream-300 pl-9 pr-3 py-2 text-xs text-espresso-900 placeholder-espresso-500 focus:outline-none focus:border-matcha-700"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-espresso-500 hover:text-espresso-900"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid: 2-Column Compact on Mobile, 4-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group glass-panel rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border border-cream-300/80 hover:border-matcha-300"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider ${item.tagColor} shadow-sm`}>
                    {item.tag}
                  </span>
                  
                  <div className="absolute bottom-2 right-2 rounded-full bg-cream-50/90 backdrop-blur-md px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-bold text-espresso-900 flex items-center gap-0.5 shadow-sm">
                    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-2.5 sm:p-4">
                  <h3 className="font-serif font-bold text-xs sm:text-base text-espresso-900 leading-snug group-hover:text-matcha-700 transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-xs text-espresso-700 line-clamp-2 hidden sm:block">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-2.5 sm:p-4 pt-0 flex items-center justify-between border-t border-cream-200/60 mt-1">
                <span className="font-serif font-bold text-xs sm:text-base text-matcha-900">
                  {item.price}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-matcha-700 group-hover:translate-x-1 transition-transform">
                  View &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Zomato Order Callout */}
        <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-r from-espresso-950 via-espresso-900 to-matcha-900 p-6 sm:p-10 text-cream-50 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl border border-matcha-700/50 relative overflow-hidden">
          <DoodleLatteHeart className="absolute -right-4 -bottom-4 w-24 sm:w-32 h-24 sm:h-32 text-matcha-500/10 pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-caramel-400 bg-espresso-900/80 px-2.5 py-0.5 rounded-full">
              Delivered Fresh
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-bold mt-1.5 text-cream-50">
              Craving Nishma's Delights at Home?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200 mt-1 max-w-xl">
              Get your favorite ice cream sundaes, lattes & shawarma delivered via Zomato across Puttur & Darbe.
            </p>
          </div>

          <a
            href="https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-caramel-500 px-6 py-3 text-xs sm:text-sm font-bold text-cream-50 shadow-lg hover:bg-caramel-600 transition-all hover:scale-105"
          >
            <Utensils className="h-4 w-4" />
            <span>Order on Zomato Now</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-80" />
          </a>
        </div>

      </div>

      {/* Item Detail Modal: Rendered with z-[100] above fixed Navbar header with top padding & prominent close button */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 pb-8 bg-espresso-950/80 backdrop-blur-md overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-cream-50 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-2 border-matcha-300 my-auto relative animate-fade-in"
          >
            <div className="relative aspect-[16/9] bg-espresso-950">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="h-full w-full object-cover"
              />
              
              {/* Prominent High-Contrast Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 z-30 rounded-full bg-espresso-950/90 text-cream-50 p-2.5 shadow-2xl border-2 border-cream-50/40 hover:bg-caramel-500 hover:scale-110 transition-all flex items-center justify-center"
                aria-label="Close detail modal"
              >
                <X className="h-5 w-5 text-cream-50" />
              </button>
            </div>
            
            <div className="p-5 sm:p-6">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${selectedItem.tagColor} mb-1.5`}>
                {selectedItem.tag}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-900">
                {selectedItem.name}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-espresso-800 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="mt-3 rounded-xl bg-matcha-50 p-3 border border-matcha-200">
                <span className="text-[10px] font-bold text-matcha-900 uppercase tracking-widest block mb-0.5">
                  Taste Notes & Texture
                </span>
                <p className="text-xs text-matcha-800 italic">
                  "{selectedItem.flavorProfile}"
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between pt-3 border-t border-cream-200">
                <div>
                  <span className="text-[10px] text-espresso-500 block">Price</span>
                  <span className="font-serif font-bold text-base sm:text-xl text-matcha-900">
                    {selectedItem.price}
                  </span>
                </div>

                <a
                  href="https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-matcha-700 px-5 py-2.5 text-xs font-bold text-cream-50 hover:bg-matcha-900 transition-colors shadow-md"
                >
                  <Utensils className="h-3.5 w-3.5 text-caramel-400" />
                  <span>Order Item</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
