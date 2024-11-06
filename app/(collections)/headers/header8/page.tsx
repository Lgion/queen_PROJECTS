"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Palette, 
  Clock, 
  Gift, 
  Camera,
  Music2,
  Wand2,
  Menu,
  X,
  ShoppingCart,
  Plus,
  Minus,
  ArrowRight
} from 'lucide-react';

// Modification du type pulseVariants pour corriger l'erreur TypeScript
const pulseVariants = {
  pulse: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse" as const // Correction du type
    }
  }
};

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { icon: Compass, label: 'Explorer', color: 'bg-emerald-500' },
    { icon: Palette, label: 'Styles', color: 'bg-blue-500' },
    { icon: Clock, label: 'Horaires', color: 'bg-purple-500' },
    { icon: Gift, label: 'Offres', color: 'bg-pink-500' },
    { icon: Camera, label: 'Galerie', color: 'bg-yellow-500' },
    { icon: ShoppingCart, label: 'Panier', color: 'bg-violet-500', onClick: () => setIsCartOpen(true) },
    { icon: Wand2, label: 'Services', color: 'bg-indigo-500' },
  ];

  const circleVariants = {
    closed: {
      scale: 0,
      opacity: 0,
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { scale: 0, opacity: 0 },
    open: { scale: 1, opacity: 1 },
  };

  // Ajout de la gestion du menu panier
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-lg bg-white/70' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Barre principale */}
        <div className="flex items-center justify-between h-16">
          {/* Logo animé */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-8 h-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
              />
              <div className="absolute inset-0.5 bg-white rounded-full" />
              <Wand2 className="absolute inset-1.5 text-gray-800" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              StyleVerse
            </span>
          </motion.div>

          {/* Bouton menu */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Menu circulaire */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={circleVariants}
              className="fixed inset-0 flex items-center justify-center bg-black/50"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className="relative w-[300px] h-[300px]"
                onClick={(e) => e.stopPropagation()}
              >
                {menuItems.map((item, index) => {
                  const angle = ((index * (360 / menuItems.length)) - 90) * (Math.PI / 180);
                  const radius = 130;
                  // Calcul des positions absolues
                  const x = 150 + Math.cos(angle) * radius; // 150 est la moitié de la largeur du conteneur (300/2)
                  const y = 150 + Math.sin(angle) * radius; // 150 est la moitié de la hauteur du conteneur (300/2)

                  return (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      className="absolute"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setActiveIndex(index)}
                      onHoverEnd={() => setActiveIndex(null)}
                    >
                      <motion.div
                        className={`relative flex items-center justify-center w-16 h-16 rounded-full ${item.color} text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow`}
                        onClick={item.onClick}
                      >
                        <item.icon className="w-6 h-6" />
                        {item.label === 'Panier' && cartItems.length > 0 && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                          >
                            {cartItems.length}
                          </motion.span>
                        )}
                        
                        {/* Label flottant */}
                        <AnimatePresence>
                          {activeIndex === index && (
                            <motion.span
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-sm font-medium bg-black/80 px-3 py-1 rounded-full"
                            >
                              {item.label}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Cercle central */}
                <motion.div
                  className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                  style={{
                    left: '140px', // (300px - 20px) / 2
                    top: '140px',  // (300px - 20px) / 2
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">Menu</span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu du panier - Version mobile first */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setIsCartOpen(false)}
              />

              {/* Menu panier */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed bottom-0 inset-x-0 z-50 sm:absolute sm:top-16 sm:right-4 sm:left-auto sm:bottom-auto sm:w-96"
              >
                <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-xl max-h-[85vh] sm:max-h-[600px] flex flex-col">
                  {/* En-tête du panier */}
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Mon Panier</h3>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Liste des articles */}
                  <div className="flex-1 overflow-y-auto p-4">
                    {cartItems.length > 0 ? (
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            className="flex items-center space-x-4"
                          >
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                              {item.image && (
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-gray-500">{item.price}€</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
                              >
                                -
                              </motion.button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100"
                              >
                                +
                              </motion.button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-40 text-gray-500">
                        <ShoppingCart className="w-12 h-12 mb-2 opacity-50" />
                        <p>Votre panier est vide</p>
                      </div>
                    )}
                  </div>

                  {/* Pied du panier */}
                  {cartItems.length > 0 && (
                    <div className="p-4 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-medium">Total</span>
                        <span className="font-semibold">{cartTotal}€</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-purple-600 text-gray-900 rounded-xl font-medium"
                      >
                        Commander
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
