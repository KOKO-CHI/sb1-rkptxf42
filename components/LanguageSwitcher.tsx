'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
            language === 'fr'
              ? 'bg-white text-[#2563EB] shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
            language === 'en'
              ? 'bg-white text-[#2563EB] shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}