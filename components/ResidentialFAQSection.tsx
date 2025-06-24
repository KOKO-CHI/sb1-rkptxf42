'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function ResidentialFAQSection() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === 'fr' ? [
    {
      question: 'Combien coûte un service de ménage résidentiel ?',
      answer: 'Le prix du ménage résidentiel varie selon la taille de votre domicile, la fréquence du service et les tâches spécifiques. Pour un appartement de 2 chambres, comptez entre 80-120$ pour un ménage résidentiel complet. Nous offrons des tarifs préférentiels pour les services de ménage résidentiel réguliers.'
    },
    {
      question: 'À quelle fréquence dois-je faire appel à un service de ménage résidentiel ?',
      answer: 'La fréquence idéale pour le ménage résidentiel dépend de votre mode de vie. Nous recommandons un ménage résidentiel hebdomadaire pour les familles avec enfants ou animaux, bi-hebdomadaire pour les couples actifs, et mensuel pour les personnes seules ou les résidences secondaires.'
    },
    {
      question: 'Que comprend votre service de ménage résidentiel standard ?',
      answer: 'Notre ménage résidentiel standard inclut : nettoyage des salles de bain, cuisine (surfaces, électroménagers), aspiration et lavage des sols, dépoussiérage des meubles, nettoyage des miroirs et vitres intérieures, vidage des poubelles. Le ménage résidentiel peut être personnalisé selon vos besoins.'
    },
    {
      question: 'Utilisez-vous des produits sécuritaires pour le ménage résidentiel ?',
      answer: 'Absolument ! Notre service de ménage résidentiel utilise exclusivement des produits écologiques, non-toxiques et biodégradables. Ces produits sont sûrs pour votre famille, vos animaux domestiques et l\'environnement, tout en étant très efficaces pour le ménage résidentiel.'
    },
    {
      question: 'Dois-je être présent pendant le ménage résidentiel ?',
      answer: 'Non, vous n\'avez pas besoin d\'être présent pendant le ménage résidentiel. Beaucoup de nos clients nous confient leurs clés pour plus de commodité. Notre équipe de ménage résidentiel est entièrement assurée et cautionnée pour votre tranquillité d\'esprit.'
    },
    {
      question: 'Combien de temps dure un ménage résidentiel ?',
      answer: 'La durée du ménage résidentiel varie selon la taille et l\'état de votre domicile. Un appartement de 2 chambres nécessite généralement 2-3 heures de ménage résidentiel, tandis qu\'une maison de 4 chambres peut prendre 4-6 heures. Le premier ménage résidentiel prend souvent plus de temps.'
    },
    {
      question: 'Offrez-vous une garantie sur votre ménage résidentiel ?',
      answer: 'Oui ! Nous offrons une garantie de satisfaction à 100% sur tous nos services de ménage résidentiel. Si vous n\'êtes pas entièrement satisfait de votre ménage résidentiel, contactez-nous dans les 24 heures et nous reviendrons gratuitement corriger le problème.'
    },
    {
      question: 'Comment puis-je préparer ma maison pour le ménage résidentiel ?',
      answer: 'Pour optimiser votre ménage résidentiel, nous recommandons de ranger les objets personnels, sécuriser les objets de valeur, dégager les surfaces à nettoyer, et nous informer de toute instruction spéciale. Cela permet à notre équipe de se concentrer sur le ménage résidentiel proprement dit.'
    }
  ] : [
    {
      question: 'How much does a residential cleaning service cost?',
      answer: 'The price of residential cleaning varies according to the size of your home, frequency of service and specific tasks. For a 2-bedroom apartment, expect between $80-120 for a complete residential cleaning. We offer preferential rates for regular residential cleaning services.'
    },
    {
      question: 'How often should I use a residential cleaning service?',
      answer: 'The ideal frequency for residential cleaning depends on your lifestyle. We recommend weekly residential cleaning for families with children or pets, bi-weekly for active couples, and monthly for single people or secondary residences.'
    },
    {
      question: 'What does your standard residential cleaning service include?',
      answer: 'Our standard residential cleaning includes: bathroom cleaning, kitchen (surfaces, appliances), vacuuming and floor washing, furniture dusting, cleaning mirrors and interior windows, emptying trash. Residential cleaning can be customized according to your needs.'
    },
    {
      question: 'Do you use safe products for residential cleaning?',
      answer: 'Absolutely! Our residential cleaning service uses exclusively eco-friendly, non-toxic and biodegradable products. These products are safe for your family, pets and the environment, while being very effective for residential cleaning.'
    },
    {
      question: 'Do I need to be present during residential cleaning?',
      answer: 'No, you don\'t need to be present during residential cleaning. Many of our clients entrust us with their keys for convenience. Our residential cleaning team is fully insured and bonded for your peace of mind.'
    },
    {
      question: 'How long does residential cleaning take?',
      answer: 'The duration of residential cleaning varies according to the size and condition of your home. A 2-bedroom apartment generally requires 2-3 hours of residential cleaning, while a 4-bedroom house can take 4-6 hours. The first residential cleaning often takes longer.'
    },
    {
      question: 'Do you offer a guarantee on your residential cleaning?',
      answer: 'Yes! We offer a 100% satisfaction guarantee on all our residential cleaning services. If you are not completely satisfied with your residential cleaning, contact us within 24 hours and we will come back free of charge to correct the problem.'
    },
    {
      question: 'How can I prepare my home for residential cleaning?',
      answer: 'To optimize your residential cleaning, we recommend tidying personal items, securing valuables, clearing surfaces to be cleaned, and informing us of any special instructions. This allows our team to focus on the residential cleaning itself.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            {t('faq.residential.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.residential.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#111827] pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#2563EB]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#2563EB]" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}