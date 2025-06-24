'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Award, Leaf, Users, ThumbsUp } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('whyChooseUs.insurance.title'),
      description: t('whyChooseUs.insurance.description')
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('whyChooseUs.punctuality.title'),
      description: t('whyChooseUs.punctuality.description')
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('whyChooseUs.certified.title'),
      description: t('whyChooseUs.certified.description')
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: t('whyChooseUs.eco.title'),
      description: t('whyChooseUs.eco.description')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('whyChooseUs.personalized.title'),
      description: t('whyChooseUs.personalized.description')
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: t('whyChooseUs.satisfaction.title'),
      description: t('whyChooseUs.satisfaction.description')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            {t('whyChooseUs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyChooseUs.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl hover:bg-[#F9FAFB] transition-colors duration-200"
            >
              <div className="text-[#2563EB] mb-4 flex justify-center">
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-[#111827] mb-3">
                {reason.title}
              </h3>
              
              <p className="text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}