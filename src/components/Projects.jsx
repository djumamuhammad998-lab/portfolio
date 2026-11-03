import React from 'react';

const projects = [
  {
    id: "01",
    title: "MHD TECH - Service Informatique",
    category: "Plateforme de Services IT",
    desc: "Structure offrant des services d'installation de systèmes, réseaux Starlink, et développement logiciel.",
    tech: ["IT Services", "Starlink", "Support"],
    image: "/muhamed.jpg", // Remplacez par le chemin de l'image de votre projet
    link: "#"
  },
  {
    id: "02",
    title: "Galaxy-STOCK Pro",
    category: "Application Desktop",
    desc: "Logiciel de gestion commerciale et de stock multiplateforme développé sous Flutter et Dart.",
    tech: ["Flutter", "Dart", "Desktop"],
    image: "/muhamed.jpg", // Remplacez par le chemin de l'image de votre projet
    link: "#"
  },
  {
    id: "03",
    title: "Système Domotique Intelligent",
    category: "IoT & Embarqué",
    desc: "Prototype de contrôle d'appareils à distance via application mobile et microcontrôleur Arduino.",
    tech: ["Arduino", "Bluetooth", "Android"],
    image: "/muhamed.jpg", // Remplacez par le chemin de l'image de votre projet
    link: "#"
  }
];

export default function Projects() {
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
              {/* Visuel dynamique : image + numéro surimpression */}
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
              <a 
                href={p.link} 
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-400 transition duration-300"
              >
                View Project ➔
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}