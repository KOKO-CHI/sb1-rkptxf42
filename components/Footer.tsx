'use client';

import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const services = language === 'fr' ? [
    { href: '/residentiel', label: 'Nettoyage résidentiel' },
    { href: '/commercial', label: 'Nettoyage commercial' },
    { href: '/post-construction', label: 'Post-construction' },
    { href: '/fin-de-bail', label: 'Fin de bail' }
  ] : [
    { href: '/residentiel', label: 'Residential cleaning' },
    { href: '/commercial', label: 'Commercial cleaning' },
    { href: '/post-construction', label: 'Post-construction' },
    { href: '/fin-de-bail', label: 'End of lease' }
  ];

  return (
    <footer className="bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-1 rounded-lg">
                <img 
                  src="/LOGO l CLEAMOV 1 copy.png" 
                  alt="CleaMov Canada" 
                  className="w-14 h-14 object-contain filter brightness-110 contrast-110"
                />
              </div>
              <span className="text-2xl font-bold">CleaMov Canada</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <a href="tel:3435504644" className="text-gray-300 hover:text-white transition-colors duration-200">
                  343-550-4644
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <a href="mailto:info@cleamov.ca" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@cleamov.ca
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                <span className="text-gray-300">Ottawa - Gatineau</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.hours')}</h3>
            <p className="text-sm text-gray-300 mb-6 whitespace-pre-line">
              {t('footer.hoursValue')}
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/cleamov/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-[#1877F2] rounded-lg transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/cleamov.canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-[#E4405F] rounded-lg transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            © {currentYear} CleaMov Canada. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
              {t('footer.privacy')}
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}