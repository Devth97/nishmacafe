import React from 'react';
import CafeDoodleBackground from './components/CafeDoodleBackground';
import SteamSunbeamCanvas from './components/SteamSunbeamCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OutletsSection from './components/OutletsSection';
import MenuSection from './components/MenuSection';
import AmbienceGallery from './components/AmbienceGallery';
import StorySection from './components/StorySection';
import VisitSection from './components/VisitSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Hand-Drawn Cafe Doodles Background Layer */}
      <CafeDoodleBackground />

      {/* Dynamic Background Shader & Sunbeams */}
      <SteamSunbeamCanvas />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <OutletsSection />
        <MenuSection />
        <AmbienceGallery />
        <StorySection />
        <VisitSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
