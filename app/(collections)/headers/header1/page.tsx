"use client"

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, MapPin, MessageCircle, Phone,
  Scissors, Users, Calendar, Image, Star, Mail, Home,
  ShoppingCart, Search // Ajout des nouveaux icônes
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(2); // Simulation d'items dans le panier
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModePreference.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModePreference.addEventListener('change', handler);
    return () => darkModePreference.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Rechercher"
            >
              <Search size={20} />
            </button>

            {/* Cart Button */}
            <div className="relative" ref={cartRef}>
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Panier"
              >
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Menu déroulant du panier - Modification du positionnement */}
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg border dark:border-gray-800 z-50 transform -translate-x-1/2 sm:translate-x-0 sm:right-0 left-1/2 sm:left-auto">
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-4">Mon Panier</h3>
                    
                    {/* Articles du panier */}
                    <div className="space-y-4 max-h-96 overflow-auto">
                      {/* Example cart item */}
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">Shampoing Premium</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Quantité: 1</p>
                          <p className="text-sm font-medium text-rose-600">25,00 €</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                          <X size={16} />
                        </button>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">Soin Hydratant</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Quantité: 1</p>
                          <p className="text-sm font-medium text-rose-600">35,00 €</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                          <X size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Total et boutons */}
                    <div className="mt-4 pt-4 border-t dark:border-gray-800">
                      <div className="flex justify-between mb-4">
                        <span className="font-medium">Total</span>
                        <span className="font-medium">60,00 €</span>
                      </div>
                      
                      <div className="space-y-2">
                        <button className="w-full px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors">
                          Voir le panier
                        </button>
                        <button className="w-full px-4 py-2 border border-rose-600 text-rose-600 rounded-full hover:bg-rose-50 dark:hover:bg-gray-800 transition-colors">
                          Commander
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

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

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-4 border-t dark:border-gray-800">
          <div className="container mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Rechercher..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:border-rose-600"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X size={20} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
              </button>
            </div>
          </div>
        </div>
      )}

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
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative"
                aria-label="Panier"
              >
                <ShoppingCart size={24} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              <button
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                aria-label="Rechercher"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={24} />
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
