"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors,
  Plus,
  X,
  Search,
  Calendar,
  Clock,
  Phone,
  MapPin,
  MessageSquare,
  User,
  ChevronRight,
  ShoppingCart,
  Minus,
  ArrowRight
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
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
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

  const menuActions = [
    { id: 'rdv', icon: Calendar, label: 'Réserver', color: 'bg-rose-500' },
    { id: 'horaires', icon: Clock, label: 'Horaires', color: 'bg-blue-500' },
    { id: 'contact', icon: Phone, label: 'Appeler', color: 'bg-green-500' },
    { id: 'map', icon: MapPin, label: 'Itinéraire', color: 'bg-amber-500' },
    { id: 'chat', icon: MessageSquare, label: 'Message', color: 'bg-purple-500' },
    { 
      id: 'cart', 
      icon: ShoppingCart, 
      label: 'Panier', 
      color: 'bg-blue-500',
      onClick: () => setIsCartOpen(true),
      badge: cartItems.length 
    },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Mini header flottant */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-lg rounded-full shadow-lg px-4 py-2 flex items-center space-x-3">
        <Scissors className="w-5 h-5 text-gray-700" />
        <span className="text-sm font-medium">BeautyFloat</span>
      </div>

      {/* Bouton d'action flottant */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isMenuOpen ? 'bg-gray-900' : 'bg-black'
        }`}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Plus className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Menu d'actions radial */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay subtil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            />

            {/* Actions flottantes */}
            <div className="fixed bottom-24 right-6 space-y-3">
              {menuActions.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, x: 100, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 100, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-end space-x-3"
                >
                  {/* Label flottant */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-white rounded-full py-2 px-4 shadow-lg"
                  >
                    <span className="text-sm font-medium">{action.label}</span>
                  </motion.div>

                  {/* Bouton d'action */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedAction(action.id)}
                    className={`w-12 h-12 ${action.color} rounded-full shadow-lg flex items-center justify-center text-white`}
                  >
                    <action.icon className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Barre de recherche flottante */}
      <div className="fixed top-16 left-4 right-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg p-3 flex items-center space-x-3"
        >
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Rechercher une prestation..."
            className="bg-transparent flex-1 text-sm focus:outline-none"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
          >
            <User className="w-4 h-4 text-white" />
          </motion.button>
        </motion.div>
      </div>

      {/* Indicateur de sélection */}
      <AnimatePresence>
        {selectedAction && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-4 right-4 bg-white rounded-2xl shadow-lg p-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">Action sélectionnée : {selectedAction}</span>
              <button
                onClick={() => setSelectedAction(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Overlay avec flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Cart Panel - Style flottant */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="fixed inset-x-4 bottom-24 top-20 lg:absolute lg:top-full lg:right-4 lg:left-auto lg:bottom-auto lg:w-96 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Cart Header */}
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Mon Panier</h2>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCartOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto">
                {cartItems.length > 0 ? (
                  <div className="p-6 space-y-4">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        className="group relative flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
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
                          <p className="text-blue-500 font-medium">{item.price}€</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="w-6 text-center font-medium">{item.quantity}</span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-6">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <ShoppingCart className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500">Votre panier est vide</p>
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg">Total</span>
                    <span className="text-2xl font-bold">{cartTotal}€</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-14 bg-blue-500 text-white rounded-2xl font-medium relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-center space-x-2">
                      <span>Commander</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
