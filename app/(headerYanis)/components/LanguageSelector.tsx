import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
  ];
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Globe className="h-5 w-5 text-gray-600" />
        <span className="hidden md:inline text-sm">{selectedLang.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm ${
                selectedLang.code === lang.code
                  ? 'bg-rose-50 text-rose-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}