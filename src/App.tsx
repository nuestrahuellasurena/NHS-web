import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EcosystemSection } from './components/EcosystemSection';
import { VolunteerSection } from './components/VolunteerSection';
import { SpeakersSection } from './components/SpeakersSection';
import { SponsorsSection } from './components/SponsorsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-niebla-50 flex flex-col font-sans antialiased text-niebla-800">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <EcosystemSection />
        <VolunteerSection />
        <SpeakersSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
