'use client';

import { motion } from 'framer-motion';
import { Home, Building, Wrench, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Home size={32} />,
      title: t('services.residential.title'),
      description: t('services.residential.description'),
      link: '/residentiel',
      features: t('services.residential.features')
    },
    {
      icon: <Building size={32} />,
      title: t('services.commercial.title'),
      description: t('services.commercial.description'),
      link: '/commercial',
      features: t('services.commercial.features')
    },
    {
      icon: <Wrench size={32} />,
      title: t('services.postConstruction.title'),
      description: t('services.postConstruction.description'),
      link: '/post-construction',
      features: t('services.postConstruction.features')
    },
    {
      icon: <Sparkles size={32} />,
      title: t('services.endOfLease.title'),
      description: t('services.endOfLease.description'),
      link: '/fin-de-bail',
      features: t('services.endOfLease.features')
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card group cursor-pointer"
            >
              <div className="text-[#2563EB] mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-[#111827] mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {Array.isArray(service.features) ? service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mr-2"></div>
                    {feature}
                  </li>
                )) : null}
              </ul>
              
              <a
                href={service.link}
                className="text-[#2563EB] hover:text-[#1D4ED8] font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-200"
              >
                {t('services.discover')}
                <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}