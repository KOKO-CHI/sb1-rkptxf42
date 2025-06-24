'use client';

import { Phone } from 'lucide-react';

export function FloatingButton() {
  return (
    <a
      href="tel:3435504644"
      className="floating-button"
      aria-label="Appeler CleaMov Canada"
    >
      <Phone size={24} />
    </a>
  );
}