'use client';

import { Phone } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function UrgentBanner() {
  const { t } = useLanguage();

  return (
    <div className="urgent-banner">
      <Phone size={16} />
      <span>{t('urgentBanner')}</span>
    </div>
  );
}