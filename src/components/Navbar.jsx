import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-[#120a07]/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-800/50">
      <div className="text-2xl font-bold tracking-wide text-white">
        MHD<span className="text-orange-500">TECH</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
        <a href="#services" className="hover:text-orange-500 transition duration-300">Services</a>
        <a href="#about" className="hover:text-orange-500 transition duration-300">À propos</a>
        <a href="#skills" className="hover:text-orange-500 transition duration-300">Compétences</a>
        <a href="#projects" className="hover:text-orange-500 transition duration-300">Projets</a>
        <a href="#contact" className="hover:text-orange-500 transition duration-300">Contact</a>
      </div>
      <a 
        href="#contact" 
        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition duration-300 shadow-lg shadow-orange-500/20"
      >
        Let's Talk
      </a>
    </nav>
  );
}