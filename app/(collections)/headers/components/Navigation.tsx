import React from 'react';
import { X, ChevronRight, Home, Scissors, Gift, Calendar, Users, Image, Phone } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Accueil', href: '/' },
  { icon: Scissors, label: 'Services', href: '/services' },
  { icon: Gift, label: 'Offres Spéciales', href: '/offers' },
  { icon: Calendar, label: 'Réservations', href: '/bookings' },
  { icon: Users, label: 'Équipe', href: '/team' },
  { icon: Image, label: 'Galerie', href: '/gallery' },
  { icon: Phone, label: 'Contact', href: '/contact' },
];

export default function Navigation({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <nav
      className={`fixed inset-0 bg-white dark:bg-gray-900 transform ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="mt-12 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={onClose}
            >
              <div className="flex items-center space-x-4">
                <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-800 dark:text-gray-200">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}