import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, MapPin, Coffee, Sparkles, ExternalLink, Clock } from 'lucide-react';
import LoFiAudioPlayer from './LoFiAudioPlayer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Outlets', href: '#outlets' },
    { name: 'Menu & Desserts', href: '#menu' },
    { name: 'Ambience', href: '#ambience' },
    { name: 'Our Story', href: '#story' },
    { name: 'Visit & Map', href: '#visit' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-3.5 sm:px-5 py-2 transition-all duration-500 ${
            scrolled
              ? 'bg-cream-50/95 shadow-lg backdrop-blur-xl border border-matcha-100'
              : 'bg-cream-50/80 backdrop-blur-md border border-cream-200'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <img
              src="/logo.png"
              alt="Nishma's Delights"
              className="h-8 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg leading-none text-espresso-900 tracking-wide">
                Nishma's
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-matcha-700">
                Delights Café
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-cream-200/50 px-4 py-1.5 border border-cream-300/40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-xs font-semibold text-espresso-800 transition-colors duration-200 hover:bg-matcha-700 hover:text-cream-50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Status Badge (desktop) */}
            <div className="hidden xl:flex items-center gap-2 rounded-full bg-matcha-50 px-3 py-1 border border-matcha-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matcha-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-matcha-700"></span>
              </span>
              <span className="text-[11px] font-semibold text-matcha-900">
                Open • 11 AM - 11:30 PM
              </span>
            </div>

            {/* Audio Vibe Player */}
            <LoFiAudioPlayer />

            {/* Order CTA button */}
            <a
              href="https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-espresso-800 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-cream-50 shadow-md transition-all duration-300 hover:bg-caramel-500 hover:shadow-lg"
            >
              <Utensils className="h-3.5 w-3.5 text-caramel-400" />
              <span>Order</span>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-full p-1.5 text-espresso-800 hover:bg-cream-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-3xl bg-cream-50/98 p-5 shadow-2xl backdrop-blur-2xl border border-matcha-200 lg:hidden animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-2.5 text-sm font-bold text-espresso-900 hover:bg-matcha-50 hover:text-matcha-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-cream-200 flex flex-col gap-2.5">
                <div className="flex items-center justify-between px-4 py-2 rounded-2xl bg-matcha-50 text-xs font-bold text-matcha-900">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-matcha-600 animate-pulse" />
                    Open Daily
                  </span>
                  <span>11:00 AM – 11:30 PM</span>
                </div>

                <a
                  href="https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-espresso-800 py-3 text-sm font-bold text-cream-50 hover:bg-caramel-500 transition-colors"
                >
                  <Utensils className="h-4 w-4 text-caramel-400" />
                  <span>Order Delivery on Zomato</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
