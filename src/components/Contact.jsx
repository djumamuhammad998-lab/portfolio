import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', msg: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: '', msg: '' });

    try {
      // Enregistrement direct dans Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: formData.name, 
            contact: formData.contact, 
            message: formData.message 
          }
        ]);

      if (error) throw error;

      setFeedback({ type: 'success', msg: 'Message envoyé et enregistré avec succès !' });
      setFormData({ name: '', contact: '', message: '' });
    } catch (err) {
      console.error('Erreur Supabase:', err);
      setFeedback({ type: 'error', msg: "Une erreur est survenue lors de l'envoi." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#120a07] text-white px-8 md:px-16 border-t border-stone-800/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Informations de Contact (Basées sur votre affiche MHD TECH) */}
        <div>
          <h2 className="text-4xl font-extrabold text-orange-500 mb-4">Contact</h2>
          <h3 className="text-xl font-semibold mb-6 text-gray-200">Discutons de votre projet informatique</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Besoin d'un développeur, d'une installation Starlink, d'une configuration système ou d'un service informatique complet ? Contactez-nous directement !
          </p>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center font-bold">📞</span>
              <div>
                <p className="text-xs text-gray-400">Téléphone & WhatsApp</p>
                <p className="font-semibold text-white">+243 998344301</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center font-bold">🌐</span>
              <div>
                <p className="text-xs text-gray-400">Réseaux Sociaux</p>
                <p className="font-semibold text-white">@djuma muhamed</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center font-bold">🎓</span>
              <div>
                <p className="text-xs text-gray-400">Profil Académique</p>
                <p className="font-semibold text-white">Étudiant Master en génie info (Université Mapon)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de Contact */}
        <div className="bg-[#1c110d] border border-stone-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-white">Envoyez-moi un message</h3>

          {feedback.msg && (
            <div className={`p-4 rounded-xl mb-4 text-sm ${feedback.type === 'success' ? 'bg-green-900/50 text-green-400 border border-green-700' : 'bg-red-900/50 text-red-400 border border-red-700'}`}>
              {feedback.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Votre Nom</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ex: Jean Paul" 
                className="w-full bg-[#120a07] border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Votre E-mail / Téléphone</label>
              <input 
                type="text" 
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                placeholder="Ex: contact@email.com" 
                className="w-full bg-[#120a07] border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Votre Message</label>
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Décrivez votre besoin (développement, Starlink, installation...)" 
                className="w-full bg-[#120a07] border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-stone-700 text-white font-medium py-3 rounded-xl transition duration-300 shadow-lg shadow-orange-500/20"
            >
              {loading ? "Envoi en cours..." : "Envoyer le Message ➔"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}