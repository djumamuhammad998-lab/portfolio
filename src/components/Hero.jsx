import React from 'react';
import profileImg from '../assets/muhamed.jpg';

export default function Hero() {
  return (
    <section className="min-h-[85vh] bg-gradient-to-b from-[#120a07] via-[#1a0f0b] to-[#120a07] text-white px-8 md:px-16 flex items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 flex items-center gap-3">
          Hi, I'm Muhamed <span className="animate-bounce">👋</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-orange-500 mb-6">
          Développeur Full-Stack & Expert IT (MHD TECH)
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Étudiant en Master en génie informatique et ingénieur, je conçois des solutions numériques combinant développement logiciel, applications mobiles, réseaux Starlink et transformation digitale.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition duration-300 shadow-lg shadow-orange-500/20"
          >
            Contact Me ➔
          </a>
          <a
            href="/CV_Muhamed_Muvuma.pdf"
            download="CV_Muhamed_Muvuma_Djuma.pdf"
            className="border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-full transition duration-300 flex items-center gap-2"
>
    📥 Télécharger le CV
</a>
        </div>

        {/* Statistiques */}
        <div className="flex items-center gap-10 border-t border-gray-800 pt-6">
          <div>
            <span className="text-3xl font-extrabold text-orange-500">10+</span>
            <p className="text-xs text-gray-400">Projects</p>
          </div>
          <div>
            <span className="text-3xl font-extrabold text-orange-500">3+</span>
            <p className="text-xs text-gray-400">Years Experience</p>
          </div>
          <div>
            <span className="text-3xl font-extrabold text-orange-500">40+</span>
            <p className="text-xs text-gray-400">Clients</p>
          </div>
        </div>
      </div>

      {/* Visuel avec la photo de profil dans l'arche orange */}
      <div className="hidden lg:block relative mr-12">
        <div className="w-80 h-96 bg-orange-500 rounded-b-[120px] rounded-t-[180px] relative overflow-hidden flex items-end justify-center shadow-2xl shadow-orange-500/20 border-4 border-orange-400">
          <img 
            src={profileImg} 
            alt="Muhamed Muvuma Djuma" 
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}