import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden fixed inset-x-0 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? 'top-16 opacity-100' : '-top-full opacity-0'
      }`}
    >
      <nav className="px-4 py-6">
        <div className="space-y-4">
          {['Accueil', 'Services', 'Équipe', 'Galerie', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-700 hover:text-rose-600 transition-colors duration-200 text-lg"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="flex-1 flex items-center justify-center py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
            >
              <Facebook className="h-5 w-5 mr-2" />
              Facebook
            </a>
            <a
              href="#"
              className="flex-1 flex items-center justify-center py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </a>
          </div>

          <div className="space-y-4 text-gray-600">
            <a href="tel:+33123456789" className="flex items-center space-x-3">
              <Phone className="h-5 w-5" />
              <span>+33 1 23 45 67 89</span>
            </a>
            <a href="mailto:contact@coiffure-elite.fr" className="flex items-center space-x-3">
              <Mail className="h-5 w-5" />
              <span>contact@coiffure-elite.fr</span>
            </a>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5" />
              <span>123 Rue de la Coiffure, Paris</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}