'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, Scale, Users, Phone } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function TermsPage() {
  const { t } = useLanguage();
  const currentDate = new Date().toLocaleDateString('fr-CA');

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: t('terms.sections.acceptance.title'),
      content: t('terms.sections.acceptance.content')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('terms.sections.services.title'),
      content: t('terms.sections.services.content')
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: t('terms.sections.clientResponsibilities.title'),
      content: t('terms.sections.clientResponsibilities.content')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('terms.sections.ourResponsibilities.title'),
      content: t('terms.sections.ourResponsibilities.content')
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: t('terms.sections.liability.title'),
      content: t('terms.sections.liability.content')
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <FileText className="w-16 h-16 text-[#2563EB] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            {t('terms.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('terms.subtitle')}
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              <strong>{t('terms.lastUpdated')} :</strong> {currentDate}
            </p>
          </div>
          
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-gray-100 pb-6 last:border-b-0"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[#2563EB] mt-1">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-[#111827] mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Conditions supplémentaires</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">{t('terms.sections.cancellation.title')}</h3>
              <p className="text-gray-600">
                {t('terms.sections.cancellation.content')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">{t('terms.sections.pricing.title')}</h3>
              <p className="text-gray-600">
                {t('terms.sections.pricing.content')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">{t('terms.sections.guarantee.title')}</h3>
              <p className="text-gray-600">
                {t('terms.sections.guarantee.content')}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">{t('terms.sections.modifications.title')}</h3>
              <p className="text-gray-600">
                {t('terms.sections.modifications.content')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-[#2563EB] rounded-xl p-8 text-white text-center"
        >
          <Phone className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">{t('terms.questionsTitle')}</h2>
          <p className="text-blue-100 mb-6">
            {t('terms.questionsSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3435504644"
              className="btn-secondary bg-white hover:bg-gray-50 text-[#2563EB]"
            >
              343-550-4644
            </a>
            <a
              href="mailto:info@cleamov.ca"
              className="btn-secondary bg-white hover:bg-gray-50 text-[#2563EB]"
            >
              info@cleamov.ca
            </a>
          </div>
        </motion.div>

        {/* Last Updated */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {t('terms.lastUpdated')} : {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
}