"use client"

import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Sun, Moon } from 'lucide-react';
import SocialIcons from '../components/SocialIcons';
import NotificationBar from '../components/NotificationBar';
import Logo from '../components/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Réservations', href: '#reservations' },
    { name: 'Équipe', href: '#team' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="relative">
      <NotificationBar />

      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo isDark={isDarkMode} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-rose-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a
                href="tel:+33123456789"
                className="hidden sm:flex items-center space-x-2 text-sm font-medium hover:text-rose-500 transition-colors"
              >
                <Phone size={20} />
                <span>01 23 45 67 89</span>
              </a>

              <a
                href="#reservations"
                className="hidden sm:block px-4 py-2 rounded-full bg-rose-500 text-white text-sm font-medium hover:bg-rose-600 transition-colors"
              >
                Prendre rendez-vous
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Menu principal"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col space-y-4">
              <a
                href="#reservations"
                className="w-full px-4 py-2 text-center rounded-full bg-rose-500 text-white text-sm font-medium hover:bg-rose-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Prendre rendez-vous
              </a>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="https://goo.gl/maps"
                  className="flex items-center space-x-2 text-sm hover:text-rose-500 transition-colors"
                >
                  <MapPin size={20} />
                  <span>Notre salon</span>
                </a>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
