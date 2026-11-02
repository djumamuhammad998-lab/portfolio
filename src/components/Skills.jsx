import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#120a07] text-white px-8 md:px-16 border-t border-stone-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-3">Skills & Experience</h2>
          <p className="text-gray-400 text-sm">
            My technical expertise and professional journey in IT services (MHD TECH).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Bloc Compétences Techniques */}
          <div className="bg-[#1c110d] border border-stone-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Domaines Techniques</h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="flex justify-between mb-1 text-gray-300">
                  <span>Développement Mobile & Logiciel (Flutter)</span>
                  <span className="text-orange-500 font-bold">95%</span>
                </div>
                <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-gray-300">
                  <span>Développement Web & Webmastering</span>
                  <span className="text-orange-500 font-bold">90%</span>
                </div>
                <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[90%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-gray-300">
                  <span>Réseaux & Installation Starlink</span>
                  <span className="text-orange-500 font-bold">88%</span>
                </div>
                <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[88%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-gray-300">
                  <span>Gestion de Projet & Transformation Digitale</span>
                  <span className="text-orange-500 font-bold">85%</span>
                </div>
                <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc CV & Téléchargement */}
          <div className="bg-[#1c110d] border border-stone-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Mon Curriculum Vitae (CV)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Étudiant en Master en génie informatique[cite: 5] et fondateur de **MHD TECH Service informatique**. Retrouvez le détail complet de mon parcours académique à l'Université Mapon, mes certifications et mes expériences professionnelles.
              </p>
            </div>
            <a 
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-xl text-center transition duration-300 shadow-lg shadow-orange-500/20"
            >
              📥 Télécharger / Demander le CV complet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}