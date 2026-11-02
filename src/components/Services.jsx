import React from 'react';

const services = [
  {
    icon: "💻",
    title: "Développement Logiciel & Mobile",
    desc: "Création d'applications mobiles cross-platform et de logiciels robustes adaptés à vos besoins métiers."
  },
  {
    icon: "🌐",
    title: "Web Development & Webmaster",
    desc: "Conception de sites web dynamiques (React, Tailwind) et gestion/maintenance de plateformes en ligne."
  },
  {
    icon: "📡",
    title: "Mise en place réseau Starlink",
    desc: "Installation professionnelle et optimisation de connexions internet par satellite haut débit."
  },
  {
    icon: "⚙️",
    title: "Systèmes & Bureautique",
    desc: "Installation de systèmes d'exploitation, suites bureautiques et support technique informatique."
  },
  {
    icon: "📊",
    title: "Gestion de Projets & Conseil",
    desc: "Accompagnement en transformation digitale, conseil stratégique et architecture de projets IT."
  },
  {
    icon: "🤖",
    title: "IoT & Systèmes Embarqués",
    desc: "Prototypage intelligent (Arduino, modules Bluetooth) et automatisation connectée."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#120a07] text-white px-8 md:px-16">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-3">My Services</h2>
        <p className="text-gray-400 text-sm">
          Comprehensive digital solutions tailored to your business needs (MHD TECH).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, idx) => (
          <div 
            key={idx}
            className="bg-[#1c110d] border border-stone-800/80 rounded-2xl p-8 hover:border-orange-500/60 transition duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center text-xl font-bold mb-6">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}