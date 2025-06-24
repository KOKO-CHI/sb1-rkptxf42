'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function TestimonialsSection() {
  const { t, language } = useLanguage();

  const testimonials = language === 'fr' ? [
    {
      name: 'Marie Dubois',
      location: 'Ottawa',
      rating: 5,
      text: 'Service exceptionnel ! Mon appartement n\'a jamais été aussi propre. L\'équipe est professionnelle et utilise des produits qui sentent bon.',
      service: 'Nettoyage résidentiel'
    },
    {
      name: 'Jean-Pierre Martin',
      location: 'Gatineau',
      rating: 5,
      text: 'Parfait pour le nettoyage de fin de bail. J\'ai récupéré l\'intégralité de ma caution grâce à leur travail minutieux.',
      service: 'Fin de bail'
    },
    {
      name: 'Sophie Tremblay',
      location: 'Ottawa',
      rating: 5,
      text: 'Nous faisons appel à CleaMov chaque semaine pour nos bureaux. Toujours impeccable, toujours à l\'heure. Je recommande !',
      service: 'Nettoyage commercial'
    }
  ] : [
    {
      name: 'Marie Dubois',
      location: 'Ottawa',
      rating: 5,
      text: 'Exceptional service! My apartment has never been so clean. The team is professional and uses products that smell great.',
      service: 'Residential cleaning'
    },
    {
      name: 'Jean-Pierre Martin',
      location: 'Gatineau',
      rating: 5,
      text: 'Perfect for end-of-lease cleaning. I got my full deposit back thanks to their meticulous work.',
      service: 'End of lease'
    },
    {
      name: 'Sophie Tremblay',
      location: 'Ottawa',
      rating: 5,
      text: 'We call CleaMov every week for our offices. Always spotless, always on time. I recommend!',
      service: 'Commercial cleaning'
    }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg relative"
            >
              <Quote className="w-8 h-8 text-[#2563EB] mb-4 opacity-50" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-[#111827]">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.location} • {testimonial.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}