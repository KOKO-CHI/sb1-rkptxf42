'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Nettoyage résidentiel',
    'Nettoyage commercial',
    'Nettoyage post-construction',
    'Nettoyage de fin de bail',
    'Nettoyage de printemps',
    'Autre'
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envoi du formulaire à Formspree
    const res = await fetch('https://formspree.io/f/mkgbawbq', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(e.target)
    });

    setIsSubmitting(false);
    if (res.ok) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } else {
      alert('Erreur lors de l\'envoi. Réessaie plus tard.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Demande envoyée !</h2>
        <p className="text-gray-600 mb-4">
          Merci pour votre demande.<br />
          Nous vous contacterons rapidement.
        </p>
        <button
          className="btn-primary px-6 py-2 rounded-lg font-bold"
          onClick={() => setIsSubmitted(false)}
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white rounded-xl p-8 shadow-lg max-w-xl mx-auto"
    >
      {/* spam trap */}
      <input type="text" name="_honey" className="hidden" />

      {/* custom email subject */}
      <input type="hidden" name="_subject" value="Nouveau message depuis le site" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Votre nom complet"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Téléphone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Votre numéro de téléphone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">Service demandé *</label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Choisir un service</option>
          {services.map((svc, i) => (
            <option key={i} value={svc}>{svc}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message additionnel</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Décrivez vos besoins spécifiques…"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? "Envoi..." : "Envoyer la demande"}</span>
      </motion.button>
    </form>
  );
}
