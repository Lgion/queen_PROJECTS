"use client"

import React, { useState } from 'react';
import { 
  Menu, Search, Facebook, Instagram, X, Scissors, 
  ShoppingCart, Plus, Minus // Ajout des icônes nécessaires
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from '../components/MobileMenu';
import LanguageSelector from '../components/LanguageSelector';
import SearchBar from '../components/SearchBar';
import PromoBar from '../components/PromoBar';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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

  return (
    <>
      <PromoBar />
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-serif font-bold">Coiffure Elite</span>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Accueil', 'Services', 'Équipe', 'Galerie', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-rose-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Social Icons - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-3">
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Rechercher"
              >
                <Search className="h-5 w-5 text-gray-600" />
              </button>

              {/* Cart Button avec Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Panier"
                >
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>

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
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                      />

                      {/* Cart Panel */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="fixed right-4 left-4 bottom-4 top-20 lg:absolute lg:top-full lg:right-0 lg:left-auto lg:bottom-auto lg:w-96 bg-white rounded-2xl shadow-xl z-50 flex flex-col overflow-hidden"
                      >
                        {/* Cart Header */}
                        <div className="p-4 border-b">
                          <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium">Mon Panier</h2>
                            <button
                              onClick={() => setIsCartOpen(false)}
                              className="p-2 hover:bg-gray-100 rounded-full"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-4">
                          {cartItems.length > 0 ? (
                            <div className="space-y-4">
                              {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center space-x-4">
                                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
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
                                    <p className="text-rose-600">{item.price}€</p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <button
                                      onClick={() => updateQuantity(item.id, -1)}
                                      className="p-1 hover:bg-gray-100 rounded-full"
                                    >
                                      <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <button
                                      onClick={() => updateQuantity(item.id, 1)}
                                      className="p-1 hover:bg-gray-100 rounded-full"
                                    >
                                      <Plus className="w-4 h-4" />
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
                          <div className="p-4 border-t">
                            <div className="flex items-center justify-between mb-4">
                              <span className="font-medium">Total</span>
                              <span className="font-semibold text-rose-600">{cartTotal}€</span>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-rose-600 text-white font-medium py-3 rounded-full hover:bg-rose-700 transition-colors"
                            >
                              Commander
                            </motion.button>
                          </div>
                        )}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Book Now Button */}
              <a
                href="#reservations"
                className="hidden md:block px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors text-sm font-medium"
              >
                Réserver
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar Overlay */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t">
              <div className="max-w-7xl mx-auto p-4">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Rechercher..."
                    className="w-full px-4 py-2 pl-10 pr-10 rounded-full border focus:outline-none focus:border-rose-600"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X size={20} className="text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          cartItemsCount={cartItems.length}
          onSearchClick={() => setIsSearchOpen(!isSearchOpen)}
        />
      </header>
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-28" />
    </>
  );
}
