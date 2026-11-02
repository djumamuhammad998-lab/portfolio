import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#120a07] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-xs text-gray-500 border-t border-stone-800/60 bg-[#0d0705]">
        © {new Date().getFullYear()} MHD TECH — Muhamed Muvuma Djuma. Tous droits réservés.
      </footer>
    </div>
  );
}