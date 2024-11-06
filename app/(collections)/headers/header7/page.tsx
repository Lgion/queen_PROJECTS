"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ShoppingBag, User, Heart,
  Bell, ChevronDown, ArrowRight, Sparkles, ShoppingCart, Plus, Minus
} from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [notifications, setNotifications] = useState(3);
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

  // Gestion du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    "Coupe Femme", "Coupe Homme", "Coloration",
    "Soins", "Extensions", "Mariage"
  ];

  return (
    <>
      {/* Barre de promotion flottante */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-2 px-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">-30% sur votre 1ère visite</span>
          </div>
          <button className="text-xs font-medium hover:text-white/80 transition-colors underline underline-offset-2">
            Voir l'offre
          </button>
        </div>
      </motion.div>

      {/* Header principal */}
      <header className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Barre supérieure mobile */}
          <div className="flex items-center justify-between px-4 py-3">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>

            <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              BeautyLab
            </h1>

            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsSearchVisible(!isSearchVisible)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <Bell className="w-6 h-6" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Panier"
              >
                <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Barre de recherche expandable */}
          <AnimatePresence>
            {isSearchVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 py-2 border-t border-gray-100"
              >
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Rechercher un service..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-600/50 transition-all"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Menu mobile */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween" }}
                className="fixed inset-0 bg-white z-[60]"
              >
                <div className="flex flex-col h-full pt-10">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <div className="p-4 space-y-6">
                      {/* Section utilisateur */}
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <User className="w-8 h-8" />
                        <div>
                          <p className="font-medium">Connectez-vous</p>
                          <p className="text-sm text-gray-500">Accédez à vos réservations</p>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-auto" />
                      </div>

                      {/* Catégories */}
                      <nav className="space-y-2">
                        {categories.map((category) => (
                          <a
                            key={category}
                            href={`#${category.toLowerCase()}`}
                            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {category}
                            <ChevronDown className="w-4 h-4" />
                          </a>
                        ))}
                      </nav>

                      {/* Actions rapides */}
                      <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 p-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
                          <ShoppingBag className="w-5 h-5" />
                          Boutique
                        </button>
                        <button className="flex items-center justify-center gap-2 p-3 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700">
                          <Heart className="w-5 h-5" />
                          Favoris
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Pied de menu */}
                  <div className="p-4 border-t">
                    <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800">
                      Prendre rendez-vous
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Espaceur pour le contenu */}
      <div className="h-32" />

      {/* Overlay avec effet de flou */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Cart Panel avec design unique */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="fixed inset-x-4 top-20 max-h-[85vh] lg:absolute lg:top-full lg:right-0 lg:left-auto lg:w-96 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl z-50 overflow-hidden border border-white/20"
            >
              {/* Cart Header avec gradient animé */}
              <div className="relative h-20 bg-gradient-to-r from-violet-600 to-fuchsia-600 p-6">
                <motion.div
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    opacity: [0.5, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-50"
                />
                <div className="relative flex items-center justify-between">
                  <h2 className="text-xl font-medium text-white">Mon Panier</h2>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full"
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Cart Items avec design moderne */}
              <div className="overflow-y-auto max-h-[calc(85vh-13rem)] p-6 space-y-6">
                {cartItems.length > 0 ? (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="group relative flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-lg transition-shadow"
                      >
                        <div className="w-20 h-20 rounded-xl overflow-hidden">
                          {item.image && (
                            <motion.img
                              whileHover={{ scale: 1.05 }}
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium truncate">{item.name}</h3>
                          <p className="text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent font-semibold">
                            {item.price}€
                          </p>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-full p-1">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <ShoppingCart className="w-16 h-16 text-gray-300" />
                    </motion.div>
                    <p className="mt-4 text-gray-500">Votre panier est vide</p>
                  </div>
                )}
              </div>

              {/* Cart Footer avec design unique */}
              {cartItems.length > 0 && (
                <div className="p-6 bg-white/50">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                      {cartTotal}€
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative overflow-hidden py-4 rounded-2xl text-white font-medium"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600" />
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative">Commander</span>
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
