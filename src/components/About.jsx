import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#170c08] text-white px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Grille visuelle */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="bg-[#1c110d] h-44 rounded-2xl flex items-center justify-center text-gray-300 font-semibold border border-stone-800 p-4 text-center text-sm">
            Flutter & Mobile Apps
          </div>
          <div className="bg-[#1c110d] h-44 rounded-2xl flex items-center justify-center text-gray-300 font-semibold border border-stone-800 p-4 text-center text-sm">
            React & Tailwind Web
          </div>
          <div className="bg-[#1c110d] h-44 rounded-2xl flex items-center justify-center text-gray-300 font-semibold border border-stone-800 p-4 text-center text-sm">
            Réseaux & Starlink
          </div>
          <div className="bg-[#1c110d] h-44 rounded-2xl flex items-center justify-center text-gray-300 font-semibold border border-stone-800 p-4 text-center text-sm">
            IoT & Transformation IT
          </div>
          
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-xl shadow-orange-500/30 whitespace-nowrap text-sm">
            3+ Years Experience
          </div>
        </div>

        {/* Texte de description */}
        <div>
          <h2 className="text-4xl font-extrabold text-orange-500 mb-4">About Me</h2>
          <h3 className="text-xl font-semibold mb-4 text-gray-200">
            Full-Stack Developer & IT Consultant
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            I create digital experiences that combine innovative technology with elegant design. Expert in software engineering, mobile app development, and technical support via MHD TECH.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-bold text-orange-400 mb-2">🌐 Frontend & Web</h4>
              <p className="text-gray-400">React, JavaScript, Tailwind CSS, HTML5</p>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-2">⚙️ Backend & Systems</h4>
              <p className="text-gray-400">Node.js, Python, SQLite, OS Deployments</p>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-2">📱 Mobile & Desktop</h4>
              <p className="text-gray-400">Flutter, Dart, Android Development</p>
            </div>
            <div>
              <h4 className="font-bold text-orange-400 mb-2">🛠️ Tools & Networks</h4>
              <p className="text-gray-400">Git, VS Code, Starlink, Arduino</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}