import React, { useState } from 'react';

const projects = [
  {
    id: "01",
    title: "MHD TECH - Service Informatique",
    category: "Plateforme de Services IT",
    desc: "Structure offrant des services d'installation de systèmes, réseaux Starlink, et développement logiciel.",
    tech: ["IT Services", "Starlink", "Support"],
    image: "/mhdtech.jpeg", // Assurez-vous que le nom correspond dans public/
    link: "#"
  },
  {
    id: "02",
    title: "Galaxy-STOCK Pro",
    category: "Application Desktop",
    desc: "Logiciel de gestion commerciale et de stock multiplateforme développé sous Flutter et Dart.",
    tech: ["Flutter", "Dart", "Desktop"],
    image: "/galaxymarket.PNG", // Mettez l'image correspondante dans public/
    hasDetails: true,
    details: {
      overview: "Galaxy-STOCK Pro est une solution complète de gestion commerciale et de stock multiplateforme avec une interface sécurisée et multi-rôles.",
      roles: [
        { role: "Compte Administrateur", desc: "Gestion globale des stocks, validation des opérations et supervision générale." },
        { role: "Compte Vente", desc: "Suivi des transactions et enregistrement des sorties de marchandises." },
        { role: "Compte Caissier", desc: "Interface rapide de facturation et encaissement des clients." }
      ]
    }
  },
  {
    id: "03",
    title: "Système Domotique Intelligent",
    category: "IoT & Embarqué",
    desc: "Prototype de contrôle d'appareils à distance via application mobile et microcontrôleur Arduino[cite: 8].",
    tech: ["Arduino", "Bluetooth", "Android"],
    image: "/projetdomotique.PNG", // Mettez l'image correspondante dans public/
    link: "#"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-[#170c08] text-white px-8 md:px-16">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">
          Featured Projects
        </span>
        <h2 className="text-4xl font-extrabold text-orange-500 mt-1 mb-3">Projects</h2>
        <p className="text-gray-400 text-sm">
          A showcase of my recent work in software engineering, web development and IT solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, idx) => (
          <div 
            key={idx} 
            className="bg-[#1c110d] border border-stone-800 rounded-2xl overflow-hidden hover:border-orange-500 transition duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div>
              {/* Visuel dynamique : image spécifique + numéro en surimpression */}
              <div className="relative h-48 overflow-hidden bg-stone-900">
                <span className="absolute top-3 left-3 z-10 text-lg font-extrabold text-white bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md">
                  {p.id}
                </span>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Détails du projet */}
              <div className="p-6 pb-4">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                  {p.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-orange-500 transition duration-300">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {p.desc}
                </p>
                
                {/* Badges Technologies */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-stone-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-stone-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pied de carte avec lien interactif */}
            <div className="px-6 pb-6 pt-2">
              <button 
                onClick={() => p.hasDetails ? setSelectedProject(p) : (window.location.href = p.link)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-400 transition duration-300 cursor-pointer"
              >
                View Project ➔
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fenêtre modale pour afficher les détails du projet Galaxy-STOCK Pro */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1c110d] border border-orange-500/30 rounded-2xl max-w-xl w-full p-6 md:p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>

            <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
              {selectedProject.category}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {selectedProject.details.overview}
            </p>

            <h4 className="text-md font-semibold text-orange-500 mb-3">
              Fonctionnalités des comptes :
            </h4>

            <div className="space-y-3 mb-6">
              {selectedProject.details.roles.map((r, rIdx) => (
                <div key={rIdx} className="bg-stone-900/80 p-3 rounded-lg border border-stone-800">
                  <span className="font-bold text-white text-sm block">{r.role}</span>
                  <span className="text-xs text-gray-400">{r.desc}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => setSelectedProject(null)}
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition duration-300"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}