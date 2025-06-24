'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function CommercialFAQSection() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === 'fr' ? [
    {
      question: 'Combien coûte un service de ménage commercial ?',
      answer: 'Le prix du ménage commercial varie selon la superficie de vos locaux, la fréquence du service, le type d\'entreprise et les tâches spécifiques. Pour un bureau de 1000 pi², comptez entre 150-300$ par visite de ménage commercial. Nous offrons des tarifs préférentiels pour les contrats de ménage commercial à long terme.'
    },
    {
      question: 'À quelle fréquence dois-je programmer un ménage commercial ?',
      answer: 'La fréquence du ménage commercial dépend de votre type d\'entreprise et du trafic. Nous recommandons un ménage commercial quotidien pour les restaurants et cliniques, 2-3 fois par semaine pour les bureaux actifs, hebdomadaire pour les petits bureaux, et mensuel pour les entrepôts ou espaces peu fréquentés.'
    },
    {
      question: 'Que comprend votre service de ménage commercial standard ?',
      answer: 'Notre ménage commercial standard inclut : nettoyage des bureaux et espaces de travail, sanitaires et salles de pause, aspiration et lavage des sols, vidage des poubelles et recyclage, dépoussiérage des surfaces, nettoyage des vitres intérieures. Le ménage commercial peut être personnalisé selon vos besoins professionnels.'
    },
    {
      question: 'Travaillez-vous en dehors des heures d\'ouverture pour le ménage commercial ?',
      answer: 'Absolument ! Notre équipe de ménage commercial est disponible en soirée, la nuit, les fins de semaine et jours fériés. Nous adaptons nos horaires de ménage commercial pour ne pas perturber vos activités professionnelles. La plupart de nos clients préfèrent le ménage commercial après les heures d\'ouverture.'
    },
    {
      question: 'Votre équipe de ménage commercial est-elle assurée et vérifiée ?',
      answer: 'Oui, notre équipe de ménage commercial est entièrement assurée, cautionnée et vérifiée. Tous nos employés passent une vérification d\'antécédents et sont formés aux protocoles de sécurité pour le ménage commercial. Nous respectons la confidentialité de vos locaux professionnels.'
    },
    {
      question: 'Utilisez-vous des produits spécialisés pour le ménage commercial ?',
      answer: 'Oui, nous utilisons des produits professionnels adaptés au ménage commercial, incluant des désinfectants de qualité hospitalière quand nécessaire. Nos produits de ménage commercial sont efficaces contre les germes et bactéries tout en étant sécuritaires pour vos employés et clients.'
    },
    {
      question: 'Offrez-vous des services de désinfection pour le ménage commercial ?',
      answer: 'Absolument ! Nos services de ménage commercial incluent la désinfection des surfaces fréquemment touchées : poignées de porte, interrupteurs, claviers, téléphones, comptoirs. Nous utilisons des produits désinfectants approuvés pour le ménage commercial, particulièrement important pour les cliniques et restaurants.'
    },
    {
      question: 'Comment établissez-vous un contrat de ménage commercial ?',
      answer: 'Nous commençons par une évaluation gratuite de vos locaux pour comprendre vos besoins de ménage commercial. Ensuite, nous préparons une soumission détaillée incluant la fréquence, les tâches spécifiques et les tarifs. Nos contrats de ménage commercial sont flexibles et peuvent être ajustés selon l\'évolution de vos besoins.'
    }
  ] : [
    {
      question: 'How much does a commercial cleaning service cost?',
      answer: 'The price of commercial cleaning varies according to the size of your premises, frequency of service, type of business and specific tasks. For a 1000 sq ft office, expect between $150-300 per commercial cleaning visit. We offer preferential rates for long-term commercial cleaning contracts.'
    },
    {
      question: 'How often should I schedule commercial cleaning?',
      answer: 'The frequency of commercial cleaning depends on your type of business and traffic. We recommend daily commercial cleaning for restaurants and clinics, 2-3 times per week for active offices, weekly for small offices, and monthly for warehouses or low-traffic spaces.'
    },
    {
      question: 'What does your standard commercial cleaning service include?',
      answer: 'Our standard commercial cleaning includes: cleaning of offices and workspaces, restrooms and break rooms, vacuuming and floor washing, emptying trash and recycling, dusting surfaces, cleaning interior windows. Commercial cleaning can be customized according to your professional needs.'
    },
    {
      question: 'Do you work outside business hours for commercial cleaning?',
      answer: 'Absolutely! Our commercial cleaning team is available in the evenings, at night, on weekends and holidays. We adapt our commercial cleaning schedules to not disrupt your business activities. Most of our clients prefer commercial cleaning after business hours.'
    },
    {
      question: 'Is your commercial cleaning team insured and verified?',
      answer: 'Yes, our commercial cleaning team is fully insured, bonded and verified. All our employees undergo background checks and are trained in security protocols for commercial cleaning. We respect the confidentiality of your professional premises.'
    },
    {
      question: 'Do you use specialized products for commercial cleaning?',
      answer: 'Yes, we use professional products adapted to commercial cleaning, including hospital-grade disinfectants when necessary. Our commercial cleaning products are effective against germs and bacteria while being safe for your employees and customers.'
    },
    {
      question: 'Do you offer disinfection services for commercial cleaning?',
      answer: 'Absolutely! Our commercial cleaning services include disinfection of frequently touched surfaces: door handles, switches, keyboards, phones, counters. We use approved disinfectant products for commercial cleaning, particularly important for clinics and restaurants.'
    },
    {
      question: 'How do you establish a commercial cleaning contract?',
      answer: 'We start with a free evaluation of your premises to understand your commercial cleaning needs. Then, we prepare a detailed quote including frequency, specific tasks and rates. Our commercial cleaning contracts are flexible and can be adjusted according to the evolution of your needs.'
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
            {t('faq.commercial.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.commercial.subtitle')}
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