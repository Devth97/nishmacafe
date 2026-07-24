import React from 'react';
import { Instagram, MapPin, Phone, Mail, Utensils, Heart, ArrowUp, Coffee } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-950 text-cream-50 pt-20 pb-12 relative overflow-hidden border-t border-espresso-800">
      
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-matcha-700/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-caramel-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-espresso-800">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Nishma's Delights"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="font-serif font-bold text-xl text-cream-50">Nishma's</h3>
                <p className="text-[10px] uppercase tracking-widest text-caramel-400 font-medium">Delights Café</p>
              </div>
            </div>
            <p className="text-xs text-cream-300 leading-relaxed">
              Where Every Celebration Begins. Handcrafted ice creams, artisan coffees & signature Arabian snacks across Darbe & Sullia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/nishmadelights._cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-espresso-900 p-2.5 text-pink-400 hover:bg-pink-600 hover:text-cream-50 transition-colors border border-espresso-800"
                title="Follow on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-espresso-900 p-2.5 text-caramel-400 hover:bg-caramel-500 hover:text-cream-50 transition-colors border border-espresso-800"
                title="Order on Zomato"
              >
                <Utensils className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Outlets */}
          <div>
            <h4 className="font-serif font-bold text-sm text-cream-50 uppercase tracking-wider mb-4 text-matcha-300">
              Our Locations
            </h4>
            <ul className="space-y-3 text-xs text-cream-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-matcha-500 shrink-0 mt-0.5" />
                <span><strong>Darbe Café:</strong> Aradhya Arcade, Bypass Circle, Darbe, Puttur</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-caramel-400 shrink-0 mt-0.5" />
                <span><strong>Delight Express:</strong> Bypass Circle Counter, Darbe</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-matcha-500 shrink-0 mt-0.5" />
                <span><strong>Sullia Café:</strong> MK Residency, Gandhinagara, Sullia</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-sm text-cream-50 uppercase tracking-wider mb-4 text-matcha-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li><a href="#home" className="hover:text-caramel-400 transition-colors">Home Banner</a></li>
              <li><a href="#outlets" className="hover:text-caramel-400 transition-colors">Our 3 Outlets</a></li>
              <li><a href="#menu" className="hover:text-caramel-400 transition-colors">Digital Menu & Desserts</a></li>
              <li><a href="#ambience" className="hover:text-caramel-400 transition-colors">Interior Ambience</a></li>
              <li><a href="#story" className="hover:text-caramel-400 transition-colors">Our Craft Story</a></li>
              <li><a href="#visit" className="hover:text-caramel-400 transition-colors">Visit & Timings</a></li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="font-serif font-bold text-sm text-cream-50 uppercase tracking-wider mb-4 text-matcha-300">
              Opening Hours & Call
            </h4>
            <div className="space-y-3 text-xs text-cream-300">
              <p className="font-semibold text-cream-100">
                Open Daily: 11:00 AM – 11:30 PM
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-matcha-500" />
                <a href="tel:+919731400313" className="hover:underline text-cream-100 font-bold">+91 97314 00313</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-caramel-400" />
                <span>nishmascafe@gmail.com</span>
              </p>
              <div className="pt-2">
                <a
                  href="https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-matcha-700 px-4 py-2 text-xs font-bold text-cream-50 hover:bg-matcha-900 transition-colors"
                >
                  <Utensils className="h-3.5 w-3.5" />
                  <span>Order Delivery on Zomato</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>© {new Date().getFullYear()} Nishma's Delights. All Rights Reserved.</p>

          <p className="flex items-center gap-1">
            Crafted with <Heart className="h-3.5 w-3.5 text-rose-500 fill-current" /> for Nishma's Cafe Family
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-full bg-espresso-900 px-4 py-2 text-cream-200 hover:bg-matcha-700 hover:text-cream-50 transition-colors border border-espresso-800"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
