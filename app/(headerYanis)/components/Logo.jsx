import React from 'react';

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <a href="/" className="flex items-center">
        <img
          src="/logo.svg"
          alt="Salon de Coiffure"
          className="h-8 w-auto"
        />
        <span className="ml-2 text-xl font-semibold text-gray-900">BeautéChic</span>
      </a>
    </div>
  );
}