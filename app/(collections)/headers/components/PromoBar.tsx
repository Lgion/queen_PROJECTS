import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-rose-600 text-white py-2 px-4 text-center relative">
      <p className="text-sm font-medium">
        -20% sur toutes les prestations du mardi au jeudi ! 
        <a href="#booking" className="underline ml-2 hover:text-rose-200">
          Réserver maintenant
        </a>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-rose-700 rounded-full transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}