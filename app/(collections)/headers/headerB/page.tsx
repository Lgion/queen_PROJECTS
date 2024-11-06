"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors,
  Clock,
  Calendar,
  ChevronRight,
  Timer,
  Sparkles,
  Palette,
  Heart,
  User,
  X,
  Menu,
  Plus,
  Minus,
  ShoppingCart
} from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  duration: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Shampoing Premium",
      price: 25,
      quantity: 1,
      duration: "30min",
      image: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=100"
    },
    {
      id: 2,
      name: "Soin Hydratant",
      price: 35,
      quantity: 1,
      duration: "45min",
      image: "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=100"
    }
  ]);

  const timeSlots = [
    { time: "10:00", available: true, price: "45€", duration: "45min" },
    { time: "11:00", available: false, price: "35€", duration: "30min" },
    { time: "14:30", available: true, price: "65€", duration: "60min" },
    { time: "16:00", available: true, price: "45€", duration: "45min" },
  ];

  const stylists = [
    { name: "Emma", specialty: "Coloriste", rating: 4.9 },
    { name: "Lucas", specialty: "Coupe Homme", rating: 4.8 },
    { name: "Sophie", specialty: "Extensions", rating: 4.7 },
  ];

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
  const totalDuration = cartItems.reduce((total, item) => {
    const minutes = parseInt(item.duration) * item.quantity;
    return total + minutes;
  }, 0);

  return (
    <>
      <header className="fixed w-full z-50">
        {/* Barre principale minimaliste */}
        <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-50 rounded-full"
          >
            <Menu className="w-6 h-6" />
          </motion.button>

          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-500"
            />
            <span className="font-medium">TimeLine</span>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-50 rounded-full"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full" />
            )}
          </motion.button>
        </div>

        {/* Menu Timeline */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed inset-0 bg-white z-50"
            >
              {/* ... reste du code du menu timeline ... */}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cart Panel */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              {/* Overlay avec effet de flou */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              />

              {/* Cart Panel */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", bounce: 0 }}
                className="fixed inset-x-0 bottom-0 max-h-[90vh] lg:h-auto lg:absolute lg:top-full lg:right-4 lg:left-auto lg:w-96 bg-white/90 backdrop-blur-md rounded-t-[2rem] lg:rounded-2xl shadow-xl z-50 flex flex-col"
              >
                {/* En-tête du panier */}
                <div className="relative h-16 flex items-center justify-between px-6 border-b">
                  <h2 className="text-lg font-medium">Mon Panier</h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{totalDuration}min</span>
                    </div>
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
                <div className="overflow-y-auto p-6 space-y-4">
                  {cartItems.length > 0 ? (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          className="flex gap-4 p-4 bg-gray-50 rounded-2xl"
                        >
                          <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            )}
                            <div className="absolute bottom-0 inset-x-0 bg-black/50 py-1 px-2">
                              <span className="text-xs text-white">{item.duration}</span>
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.price}€</p>
                            <div className="flex items-center gap-2 mt-2">
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white border"
                              >
                                <Minus className="w-3 h-3" />
                              </motion.button>
                              <span className="w-6 text-center text-sm">{item.quantity}</span>
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white border"
                              >
                                <Plus className="w-3 h-3" />
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        <ShoppingCart className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500">Votre panier est vide</p>
                    </div>
                  )}
                </div>

                {/* Footer avec résumé et bouton */}
                {cartItems.length > 0 && (
                  <div className="p-6 bg-gray-50 rounded-b-[2rem] lg:rounded-b-2xl space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Durée totale</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{totalDuration}min</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Total</span>
                      <span className="text-xl font-medium">{cartTotal}€</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-12 bg-black text-gray-900 rounded-xl font-medium"
                    >
                      Réserver
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
