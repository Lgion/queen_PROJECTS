"use client"

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, MessageCircle, Phone,
  Scissors, Users, Calendar, Image, Star, Mail, Home
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModePreference.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModePreference.addEventListener('change', handler);
    return () => darkModePreference.removeEventListener('change', handler);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const menuItems = [
    { icon: Home, label: 'Accueil', href: '#' },
    { icon: Scissors, label: 'Services', href: '#services' },
    { icon: Calendar, label: 'Réservations', href: '#reservations' },
    { icon: Users, label: 'Équipe', href: '#team' },
    { icon: Image, label: 'Galerie', href: '#gallery' },
    { icon: Star, label: 'Avis', href: '#reviews' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Notification Bar */}
      {hasNotification && (
        <div className="bg-rose-100 dark:bg-rose-900 px-4 py-2 text-center text-sm relative">
          <p className="text-rose-800 dark:text-rose-100">
            Offre spéciale: -20% sur votre première visite!
          </p>
          <button 
            onClick={() => setHasNotification(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-rose-800 dark:text-rose-100"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-rose-600" />
            <span className="text-xl font-serif font-bold">L'Atelier</span>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-rose-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+33123456789"
              className="hidden md:flex items-center space-x-1 text-sm font-medium hover:text-rose-600"
            >
              <Phone size={18} />
              <span>01 23 45 67 89</span>
            </a>

            <button className="hidden md:block px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors">
              Réserver
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-serif font-bold">Menu</span>
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 text-lg hover:text-rose-600 transition-colors"
                  onClick={toggleMenu}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-4 border-t dark:border-gray-800">
            <button className="w-full px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors mb-4">
              Réserver maintenant
            </button>

            <div className="flex justify-around">
              <a
                href="#location"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                aria-label="Location"
              >
                <MapPin size={24} />
              </a>
              <button
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                aria-label="Chat"
              >
                <MessageCircle size={24} />
              </button>
              <a
                href="tel:+33123456789"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;