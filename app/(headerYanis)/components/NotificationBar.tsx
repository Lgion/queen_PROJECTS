import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-rose-500 text-white py-2 text-center text-sm">
      <p className="px-8">
        -20% sur votre première visite avec le code "BIENVENUE"
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-rose-600 rounded-full transition-colors"
        aria-label="Fermer la notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}
