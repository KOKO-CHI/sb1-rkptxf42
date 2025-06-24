'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function PrivacyPage() {
  const { t } = useLanguage();
  const currentDate = new Date().toLocaleDateString('fr-CA');

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Shield className="w-16 h-16 text-[#2563EB] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            {t('privacy.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('privacy.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                <strong>{t('privacy.lastUpdated')} :</strong> {currentDate}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.description')}
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-[#2563EB]" />
                  <h2 className="text-2xl font-bold text-[#111827]">{t('privacy.sections.collection.title')}</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>{t('privacy.sections.collection.content')}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t('privacy.sections.collection.items') as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <UserCheck className="w-6 h-6 text-[#2563EB]" />
                  <h2 className="text-2xl font-bold text-[#111827]">{t('privacy.sections.usage.title')}</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>{t('privacy.sections.usage.content')}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t('privacy.sections.usage.items') as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="w-6 h-6 text-[#2563EB]" />
                  <h2 className="text-2xl font-bold text-[#111827]">{t('privacy.sections.protection.title')}</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>{t('privacy.sections.protection.content')}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t('privacy.sections.protection.items') as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">{t('privacy.sections.sharing.title')}</h2>
                <div className="text-gray-700 space-y-4">
                  <p>{t('privacy.sections.sharing.content')}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t('privacy.sections.sharing.items') as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">{t('privacy.sections.rights.title')}</h2>
                <div className="text-gray-700 space-y-4">
                  <p>{t('privacy.sections.rights.content')}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t('privacy.sections.rights.items') as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">{t('privacy.sections.retention.title')}</h2>
                <p className="text-gray-700">
                  {t('privacy.sections.retention.content')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">{t('privacy.sections.contact.title')}</h2>
                <div className="text-gray-700 space-y-4">
                  <p>{t('privacy.sections.contact.content')}</p>
                  <div className="bg-[#F9FAFB] p-4 rounded-lg">
                    <p><strong>Email :</strong> info@cleamov.ca</p>
                    <p><strong>{t('contact.phone')} :</strong> 343-550-4644</p>
                    <p><strong>{t('contact.serviceArea')} :</strong> Ottawa - Gatineau</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">{t('privacy.sections.modifications.title')}</h2>
                <p className="text-gray-700">
                  {t('privacy.sections.modifications.content')}
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}