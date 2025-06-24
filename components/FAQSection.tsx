'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quels produits utilisez-vous ?',
      answer: 'Nous utilisons exclusivement des produits écologiques, non-toxiques et biodégradables. Ils sont sûrs pour votre famille, vos animaux et l\'environnement tout en étant très efficaces.'
    },
    {
      question: 'Combien de temps dure un nettoyage ?',
      answer: 'La durée varie selon la taille et l\'état de l\'espace. Un appartement de 2 chambres prend généralement 2-3 heures, tandis qu\'une maison complète peut nécessiter 4-6 heures.'
    },
    {
      question: 'Êtes-vous assurés ?',
      answer: 'Oui, nous sommes entièrement assurés et cautionnés. Notre assurance couvre tous les dommages potentiels, vous offrant une tranquillité d\'esprit totale.'
    },
    {
      question: 'Que se passe-t-il si je ne suis pas satisfait ?',
      answer: 'Nous offrons une garantie de satisfaction à 100%. Si vous n\'êtes pas entièrement satisfait, nous revenons gratuitement dans les 24 heures pour corriger le problème.'
    },
    {
      question: 'Proposez-vous des forfaits récurrents ?',
      answer: 'Oui, nous proposons des forfaits hebdomadaires, bi-hebdomadaires et mensuels avec des tarifs préférentiels. Plus la fréquence est élevée, plus les économies sont importantes.'
    },
    {
      question: 'Comment obtenir un devis ?',
      answer: 'Vous pouvez obtenir un devis gratuit en nous appelant au 343-550-4644 ou en remplissant notre formulaire en ligne. Nous vous répondons rapidement avec un prix personnalisé.'
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
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Trouvez rapidement les réponses à vos questions
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