import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Compass, Utensils } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VisitSection() {
  const [selectedOutlet, setSelectedOutlet] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', outlet: 'Darbe Cafe', message: '' });

  const outletDetails = [
    {
      name: "Nishma's Delights Café — Darbe",
      type: "Flagship Café",
      address: "Aradhya Arcade, Bypass Circle, Darbe, Puttur, Karnataka 574202",
      phone: "+91 97314 00313",
      email: "nishmascafe@gmail.com",
      hours: "Monday – Sunday: 11:00 AM – 11:30 PM",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3!2d75.2!3d12.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ1JzM2LjAiTiA3NcKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
    },
    {
      name: "Nishma's Delight Express — Darbe",
      type: "Quick Counter",
      address: "Bypass Circle Counter, Darbe, Puttur, Karnataka 574202",
      phone: "+91 97314 00313",
      email: "nishmascafe@gmail.com",
      hours: "Monday – Sunday: 11:00 AM – 11:30 PM",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3!2d75.2!3d12.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ1JzM2LjAiTiA3NcKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
    },
    {
      name: "Nishma's Delights Café — Sullia",
      type: "Sullia Branch",
      address: "HP Petrol Pump, MK Residency, Gandhinagara, Sullia, Karnataka 574239",
      phone: "+91 97314 00313",
      email: "nishmascafe@gmail.com",
      hours: "Monday – Sunday: 11:00 AM – 11:30 PM",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3!2d75.4!3d12.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMzJzM2LjAiTiA3NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', outlet: 'Darbe Cafe', message: '' });
    }, 4000);
  };

  const curr = outletDetails[selectedOutlet];

  return (
    <section id="visit" className="py-24 relative bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-matcha-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-matcha-900 mb-4">
            <Compass className="h-3.5 w-3.5" />
            <span>Plan Your Visit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-900">
            We’d Love to <span className="italic text-matcha-700 font-normal">Welcome You</span>
          </h2>
          <p className="mt-4 text-espresso-700 text-base">
            Select an outlet location to view address details, opening timings, and get instant directions.
          </p>
        </div>

        {/* Outlet Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-cream-200 p-1.5 border border-cream-300">
            {outletDetails.map((out, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOutlet(idx)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                  selectedOutlet === idx
                    ? 'bg-matcha-700 text-cream-50 shadow-md'
                    : 'text-espresso-800 hover:text-matcha-700'
                }`}
              >
                {out.type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Outlet Info Card & Map */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-matcha-200 shadow-xl">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-matcha-700 bg-matcha-100 px-3 py-1 rounded-full">
                {curr.type}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-900 mt-3">
                {curr.name}
              </h3>

              <div className="mt-6 space-y-4 text-sm text-espresso-800">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-matcha-700 shrink-0 mt-0.5" />
                  <span>{curr.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-caramel-500 shrink-0" />
                  <a href={`tel:${curr.phone.replace(/\s+/g, '')}`} className="font-bold text-matcha-900 hover:underline">
                    {curr.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-espresso-500 shrink-0" />
                  <span>{curr.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-matcha-700 shrink-0" />
                  <span className="font-semibold text-matcha-900">{curr.hours}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-cream-200 flex flex-wrap gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(curr.name + ' ' + curr.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-matcha-700 py-3.5 px-6 text-xs font-bold text-cream-50 hover:bg-matcha-900 transition-colors shadow-md"
              >
                <Compass className="h-4 w-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="https://www.zomato.com/puttur/nishmas-delights-cafe-puttur-locality/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-espresso-800 py-3.5 px-6 text-xs font-bold text-cream-50 hover:bg-caramel-500 transition-colors"
              >
                <Utensils className="h-4 w-4 text-caramel-400" />
                <span>Zomato Delivery</span>
              </a>
            </div>
          </div>

          {/* Quick Contact & Event Catering Form */}
          <div className="glass-panel rounded-3xl p-8 border border-cream-300 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-espresso-900">
              Get in Touch or Reserve a Celebration
            </h3>
            <p className="text-xs sm:text-sm text-espresso-700 mt-1">
              Planning a birthday party, bulk ice cream order, or general inquiry? Send us a quick note!
            </p>

            {formSubmitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-matcha-50 text-matcha-900 border border-matcha-200 text-center animate-fade-in">
                <CheckCircle className="h-10 w-10 text-matcha-700 mx-auto mb-2" />
                <h4 className="font-bold text-lg">Message Sent!</h4>
                <p className="text-xs mt-1 text-matcha-700">
                  Thank you! The Nishma's team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-espresso-800 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl bg-cream-50 border border-cream-300 px-4 py-3 text-xs text-espresso-900 focus:outline-none focus:border-matcha-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-espresso-800 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-2xl bg-cream-50 border border-cream-300 px-4 py-3 text-xs text-espresso-900 focus:outline-none focus:border-matcha-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-espresso-800 mb-1">Select Outlet</label>
                  <select
                    value={formData.outlet}
                    onChange={(e) => setFormData({...formData, outlet: e.target.value})}
                    className="w-full rounded-2xl bg-cream-50 border border-cream-300 px-4 py-3 text-xs text-espresso-900 focus:outline-none focus:border-matcha-700"
                  >
                    <option>Darbe Delights Café</option>
                    <option>Darbe Delight Express</option>
                    <option>Sullia Delights Café</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-espresso-800 mb-1">Message / Event Details</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can help make your day special..."
                    className="w-full rounded-2xl bg-cream-50 border border-cream-300 px-4 py-3 text-xs text-espresso-900 focus:outline-none focus:border-matcha-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-matcha-700 py-3.5 text-xs font-bold text-cream-50 hover:bg-matcha-900 transition-colors shadow-md"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
