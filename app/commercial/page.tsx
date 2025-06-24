'use client';

import { motion } from 'framer-motion';
import { Building, Shield, Clock, Sparkles, CheckCircle, Star } from 'lucide-react';
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery';
import { CommercialFAQSection } from '@/components/CommercialFAQSection';
import { useLanguage } from '@/lib/language-context';

export default function CommercialPage() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#2563EB]" />,
      title: t('commercial.features.secure.title'),
      description: t('commercial.features.secure.description')
    },
    {
      icon: <Clock className="w-8 h-8 text-[#2563EB]" />,
      title: t('commercial.features.flexible.title'),
      description: t('commercial.features.flexible.description')
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#2563EB]" />,
      title: t('commercial.features.guaranteed.title'),
      description: t('commercial.features.guaranteed.description')
    }
  ];

  const services = t('commercial.servicesList');

  const industries = language === 'fr' ? [
    'Bureaux d\'affaires',
    'Cliniques médicales', 
    'Restaurants',
    'Magasins de détail',
    'Entrepôts',
    'Centres de fitness',
    'Écoles et garderies',
    'Immeubles de bureaux'
  ] : [
    'Business offices',
    'Medical clinics',
    'Restaurants',
    'Retail stores',
    'Warehouses',
    'Fitness centers',
    'Schools and daycares',
    'Office buildings'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Building className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('commercial.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t('commercial.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              {t('commercial.expertTitle')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('commercial.expertDesc1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('commercial.expertDesc2')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              {t('commercial.whyChooseTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('commercial.whyChooseSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="service-card text-center"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              {t('commercial.servicesTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('commercial.servicesSubtitle')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {Array.isArray(services) && services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              {t('commercial.industriesTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {t('commercial.industriesDesc')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
                >
                  <span className="text-gray-700 font-medium">{industry}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              {t('commercial.areasTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {t('commercial.areasDesc')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['Centre-ville Ottawa', 'Gatineau', 'Kanata Tech Park', 'Orléans', 'Nepean', 'Gloucester', 'Hull', 'Aylmer'].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-[#F9FAFB] p-4 rounded-lg shadow-sm border border-gray-100 text-center"
                >
                  <span className="text-gray-700 font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <BeforeAfterGallery />

      {/* FAQ Section */}
      <CommercialFAQSection />

      {/* CTA Section */}
      <section className="py-16 bg-[#2563EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('commercial.ctaTitle')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('commercial.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary bg-white hover:bg-gray-50">
                {t('common.getQuote')}
              </a>
              <a href="tel:3435504644" className="btn-primary bg-white text-[#2563EB] hover:bg-gray-50">
                {t('common.callNow')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}