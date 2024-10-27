"use client"

import React, { useState } from 'react';
import { 
  Menu, X, Phone, MapPin, Sun, Moon,
  ShoppingCart, Search, Plus, Minus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Correction de l'import
import SocialIcons from '../components/SocialIcons';
import NotificationBar from '../components/NotificationBar';

// Modification du Logo pour accepter la prop isDark
interface LogoProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark }) => (
  <div className="flex items-center space-x-2">
    <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
      L'Atelier
    </span>
  </div>
);

// Ajout du type CartItem
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(2); // Simulation d'items dans le panier
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Shampoing Premium",
      price: 25,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=100"
    },
    {
      id: 2,
      name: "Soin Hydratant",
      price: 35,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=100"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Rechercher"
              >
                <Search size={20} />
              </button>

              {/* Cart Button */}
              <div className="relative">
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Panier"
                >
                  <ShoppingCart size={20} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>

                {/* Menu Panier */}
                <AnimatePresence>
                  {isCartOpen && (
                    <>
                      {/* Overlay (mobile uniquement) */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                      />

                      {/* Cart Panel */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed right-4 left-4 bottom-4 top-20 lg:absolute lg:top-full lg:right-0 lg:left-auto lg:bottom-auto lg:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-xl z-50 flex flex-col text-gray-900 dark:text-white" // Ajout de text-gray-900
                      >
                        {/* Cart Header */}
                        <div className="p-4 border-b dark:border-gray-800">
                          <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Mon Panier</h2>
                            <button
                              onClick={() => setIsCartOpen(false)}
                              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-4">
                          {cartItems.length > 0 ? (
                            <div className="space-y-4">
                              {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center space-x-4">
                                  <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                                    {item.image && (
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                      />
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                                    <p className="text-rose-500">{item.price}€</p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <button
                                      onClick={() => updateQuantity(item.id, -1)}
                                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-900 dark:text-white"
                                    >
                                      <Minus size={16} />
                                    </button>
                                    <span className="w-8 text-center text-gray-900 dark:text-white">{item.quantity}</span>
                                    <button
                                      onClick={() => updateQuantity(item.id, 1)}
                                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-900 dark:text-white"
                                    >
                                      <Plus size={16} />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full">
                              <ShoppingCart className="w-12 h-12 text-gray-400 mb-2" />
                              <p className="text-gray-500">Votre panier est vide</p>
                            </div>
                          )}
                        </div>

                        {/* Cart Footer */}
                        {cartItems.length > 0 && (
                          <div className="p-4 border-t dark:border-gray-800">
                            <div className="flex items-center justify-between mb-4">
                              <span className="font-medium text-gray-900 dark:text-white">Total</span>
                              <span className="font-semibold text-rose-500">{cartTotal}€</span>
                            </div>
                            <motion.button 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-rose-500 hover:bg-rose-600 text-gray-900 font-medium py-3 rounded-full transition-colors relative overflow-hidden"
                            >
                              <span className="relative z-10 text-gray-900">Commander</span>
                              <motion.div 
                                className="absolute inset-0 bg-black/10"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                              />
                            </motion.button>
                          </div>
                        )}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

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

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-4 border-t dark:border-gray-700">
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:border-rose-500"
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

              {/* Actions et réseaux sociaux regroupés */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://goo.gl/maps"
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
                      <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                    aria-label="Rechercher"
                  >
                    <Search size={24} />
                  </button>
                </div>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
