"use client"

import React, { useState, useEffect } from 'react';
import { Menu, MapPin, MessageCircle, Phone, Scissors, Moon, Sun, MicOff, Mic, ShoppingCart, Search, Plus, Minus, X } from 'lucide-react';
import Navigation from '../components/Navigation';
import NotificationBar6 from '../components/NotificationBar6';
import ThemeToggle from '../components/ThemeToggle';
import VoiceSearch from '../components/VoiceSearch';
import { motion, AnimatePresence } from 'framer-motion';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0); // Pour simuler les articles du panier
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

  const openMaps = () => {
    window.open('https://maps.google.com/?q=Hair+Salon+Address', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Notification Bar */}
      <NotificationBar6 />

      {/* Main Header */}
      <div className={`bg-white/90 backdrop-blur-md dark:bg-gray-900/90 transition-colors duration-300 shadow-lg ${isDark ? 'dark' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Scissors className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-[spin_3s_ease-in-out_infinite]" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StyleHub
              </span>
            </div>

            {/* Barre de recherche */}
            <div className={`hidden md:flex items-center flex-1 max-w-md mx-8 ${isSearchOpen ? 'block' : ''}`}>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            {/* Actions Group */}
            <div className="flex items-center space-x-4">
              <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
              <VoiceSearch isListening={isListening} setIsListening={setIsListening} />
              
              {/* Bouton recherche mobile */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Search"
              >
                <Search className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>

              {/* Bouton panier */}
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>

              <button
                onClick={openMaps}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
              
              <button
                onClick={handleCall}
                className="hidden sm:flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche mobile */}
      <div className={`md:hidden bg-white dark:bg-gray-900 p-4 transition-all duration-300 ${isSearchOpen ? 'block' : 'hidden'}`}>
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Bottom Navigation Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 md:hidden">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Search"
          >
            <Search className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={handleCall}
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-105"
            aria-label="Book Now"
          >
            <Phone className="w-6 h-6" />
          </button>

          <button
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>

          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Chat"
          >
            <MessageCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Cart Menu */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Overlay mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed right-4 left-4 bottom-20 top-20 lg:absolute lg:top-full lg:right-0 lg:left-auto lg:bottom-auto lg:w-96 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl z-50 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800"
            >
              {/* Cart Header */}
              <div className="p-4 border-b dark:border-gray-800 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Mon Panier
                  </h2>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length > 0 ? (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        className="flex items-center space-x-4 p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
                      >
                        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                            {item.price}€
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700"
                          >
                            <Minus className="w-3 h-3" />
                          </motion.button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700"
                          >
                            <Plus className="w-3 h-3" />
                          </motion.button>
                        </div>
                      </motion.div>
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
                <div className="p-4 border-t dark:border-gray-800 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Total</span>
                    <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {cartTotal}€
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 rounded-full"
                  >
                    Commander
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Navigation Menu */}
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
