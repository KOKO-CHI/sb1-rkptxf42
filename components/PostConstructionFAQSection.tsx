'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function PostConstructionFAQSection() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === 'fr' ? [
    {
      question: 'Combien coûte un service de ménage après construction ?',
      answer: 'Le prix du ménage après construction varie selon la superficie du projet, le type de construction et l\'ampleur des débris. Pour une maison neuve de 1500 pi², comptez entre 400-800$ pour un ménage après construction complet. Nous offrons des devis gratuits personnalisés pour chaque projet de ménage après construction.'
    },
    {
      question: 'Combien de temps prend un ménage après construction ?',
      answer: 'La durée du ménage après construction dépend de la taille du projet et de l\'état du chantier. Un appartement nécessite généralement 4-6 heures de ménage après construction, tandis qu\'une maison complète peut prendre 1-2 jours. Le ménage après construction de projets commerciaux peut nécessiter plusieurs jours.'
    },
    {
      question: 'Que comprend votre service de ménage après construction ?',
      answer: 'Notre ménage après construction inclut : élimination de la poussière de construction, nettoyage des résidus de peinture et colle, dégraissage des surfaces, nettoyage des vitres et miroirs, aspiration et lavage des sols, désinfection complète. Le ménage après construction est adapté selon le type de projet.'
    },
    {
      question: 'Utilisez-vous des équipements spécialisés pour le ménage après construction ?',
      answer: 'Absolument ! Notre équipe de ménage après construction utilise des aspirateurs industriels HEPA, des nettoyeurs haute pression, des produits dégraissants professionnels et des outils spécialisés pour éliminer la poussière fine de construction. Ces équipements sont essentiels pour un ménage après construction efficace.'
    },
    {
      question: 'Intervenez-vous immédiatement après la fin des travaux de construction ?',
      answer: 'Oui, nous pouvons intervenir dès que les travaux de construction sont terminés pour le ménage après construction. Nous recommandons d\'attendre que tous les corps de métier aient quitté le chantier avant de commencer le ménage après construction pour éviter de devoir nettoyer à nouveau.'
    },
    {
      question: 'Le ménage après construction inclut-il l\'extérieur ?',
      answer: 'Notre service de ménage après construction peut inclure le nettoyage extérieur selon vos besoins : nettoyage des vitres extérieures, enlèvement des débris de construction dans la cour, nettoyage des entrées et terrasses. Nous adaptons le ménage après construction à l\'ensemble de votre projet.'
    },
    {
      question: 'Garantissez-vous la qualité du ménage après construction ?',
      answer: 'Oui ! Nous offrons une garantie de satisfaction à 100% sur tous nos services de ménage après construction. Si vous n\'êtes pas entièrement satisfait de votre ménage après construction, nous reviendrons gratuitement dans les 48 heures pour corriger tout problème.'
    },
    {
      question: 'Comment préparer le chantier pour le ménage après construction ?',
      answer: 'Pour optimiser le ménage après construction, assurez-vous que tous les travaux sont terminés, que l\'électricité et l\'eau sont fonctionnelles, et que les gros débris ont été évacués. Notre équipe s\'occupe du reste lors du ménage après construction, incluant la poussière fine et les résidus.'
    }
  ] : [
    {
      question: 'How much does a post-construction cleaning service cost?',
      answer: 'The price of post-construction cleaning varies according to the project size, type of construction and extent of debris. For a 1500 sq ft new home, expect between $400-800 for complete post-construction cleaning. We offer free personalized quotes for each post-construction cleaning project.'
    },
    {
      question: 'How long does post-construction cleaning take?',
      answer: 'The duration of post-construction cleaning depends on the project size and site condition. An apartment generally requires 4-6 hours of post-construction cleaning, while a complete house can take 1-2 days. Post-construction cleaning of commercial projects may require several days.'
    },
    {
      question: 'What does your post-construction cleaning service include?',
      answer: 'Our post-construction cleaning includes: construction dust elimination, cleaning paint and glue residues, surface degreasing, window and mirror cleaning, floor vacuuming and washing, complete disinfection. Post-construction cleaning is adapted according to the project type.'
    },
    {
      question: 'Do you use specialized equipment for post-construction cleaning?',
      answer: 'Absolutely! Our post-construction cleaning team uses industrial HEPA vacuums, high-pressure cleaners, professional degreasing products and specialized tools to eliminate fine construction dust. This equipment is essential for effective post-construction cleaning.'
    },
    {
      question: 'Do you intervene immediately after construction work is finished?',
      answer: 'Yes, we can intervene as soon as construction work is completed for post-construction cleaning. We recommend waiting until all trades have left the site before starting post-construction cleaning to avoid having to clean again.'
    },
    {
      question: 'Does post-construction cleaning include the exterior?',
      answer: 'Our post-construction cleaning service can include exterior cleaning according to your needs: exterior window cleaning, removal of construction debris in the yard, cleaning of entrances and terraces. We adapt post-construction cleaning to your entire project.'
    },
    {
      question: 'Do you guarantee the quality of post-construction cleaning?',
      answer: 'Yes! We offer a 100% satisfaction guarantee on all our post-construction cleaning services. If you are not completely satisfied with your post-construction cleaning, we will return free of charge within 48 hours to correct any problem.'
    },
    {
      question: 'How to prepare the site for post-construction cleaning?',
      answer: 'To optimize post-construction cleaning, ensure all work is completed, electricity and water are functional, and large debris has been removed. Our team takes care of the rest during post-construction cleaning, including fine dust and residues.'
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
            {t('faq.postConstruction.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.postConstruction.subtitle')}
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