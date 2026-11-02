import React from 'react';

const projects = [
  {
    title: "MHD TECH - Service Informatique",
    category: "Plateforme de Services IT",
    desc: "Structure offrant des services d'installation de systèmes, réseaux Starlink, et développement logiciel.",
    tech: ["IT Services", "Starlink", "Support"]
  },
  {
    title: "Galaxy-STOCK Pro",
    category: "Application Desktop",
    desc: "Logiciel de gestion commerciale et de stock multiplateforme développé sous Flutter et Dart.",
    tech: ["Flutter", "Dart", "Desktop"]
  },
  {
    title: "Système Domotique Intelligent",
    category: "IoT & Embarqué",
    desc: "Prototype de contrôle d'appareils à distance via application mobile et microcontrôleur Arduino.",
    tech: ["Arduino", "Bluetooth", "Android"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#170c08] text-white px-8 md:px-16">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-3">Projects</h2>
        <p className="text-gray-400 text-sm">
          A showcase of my recent work in software engineering, web development and IT solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-[#1c110d] border border-stone-800 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
            <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">{p.category}</span>
            <h3 className="text-xl font-bold mt-2 mb-3">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t, tIdx) => (
                <span key={tIdx} className="bg-stone-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-stone-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}