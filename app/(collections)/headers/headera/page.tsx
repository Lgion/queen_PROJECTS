"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles,
  Crown,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Star,
  ChevronDown,
  Search,
  X,
  ArrowUpRight,
  ShoppingCart,
  Plus,
  Minus
} from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function Header() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
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

  const services = [
    { name: "Premium", icon: Crown, color: "bg-amber-500", price: "120€", onClick: () => setSelectedService("Premium") },
    { name: "Express", icon: Clock, color: "bg-emerald-500", price: "45€", onClick: () => setSelectedService("Express") },
    { name: "Classic", icon: Star, color: "bg-blue-500", price: "75€", onClick: () => setSelectedService("Classic") },
    { 
      name: "Panier", 
      icon: ShoppingCart, 
      color: "bg-amber-500",
      onClick: () => setIsCartOpen(true), // Ouvre directement le panier
      badge: cartItems.length 
    }
  ];

  const nextAvailable = [
    "Aujourd'hui à 14:30",
    "Aujourd'hui à 16:45",
    "Demain à 10:15"
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Barre de recherche expandable */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="bg-white border-b border-gray-100"
          >
            <div className="p-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Rechercher un service..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header principal */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Barre supérieure */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <span className="font-semibold">HairStyle</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-50 rounded-full"
              >
                {isSearchOpen ? <X /> : <Search />}
              </button>
              <button
                onClick={() => setIsCardOpen(!isCardOpen)}
                className="flex items-center space-x-1 bg-black text-white px-3 py-1.5 rounded-full text-sm"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isCardOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Card expandable */}
          <AnimatePresence>
            {isCardOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-gray-100"
              >
                <div className="p-4 space-y-4">
                  {/* Services Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {services.map((service) => (
                      <motion.button
                        key={service.name}
                        whileTap={{ scale: 0.95 }}
                        onClick={service.onClick} // Utilise l'onClick spécifique à chaque service
                        className={`relative p-4 bg-white/40 hover:bg-white/60 rounded-xl transition-colors duration-300 ${
                          selectedService === service.name ? 'border-2 border-violet-500' : ''
                        }`}
                      >
                        <div className={`${service.color} w-8 h-8 rounded-full flex items-center justify-center mb-2`}>
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-medium">{service.name}</div>
                          <div className="text-xs text-gray-500">{service.price}</div>
                        </div>
                        {selectedService === service.name && (
                          <motion.div
                            layoutId="selected"
                            className="absolute inset-0 border-2 border-violet-500 rounded-xl"
                            initial={false}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Prochains créneaux */}
                  {selectedService && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="text-sm font-medium">Prochains créneaux disponibles</div>
                      <div className="flex space-x-2 overflow-x-auto pb-2">
                        {nextAvailable.map((time, index) => (
                          <motion.button
                            key={time}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-shrink-0 px-4 py-2 bg-gray-50 rounded-lg text-sm hover:bg-gray-100"
                          >
                            <Calendar className="w-4 h-4 mb-1" />
                            <div>{time}</div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Informations du salon */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>2.5 km</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>4.8</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-1 bg-violet-500 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      <span>Réserver</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Cart Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] bg-white/80 backdrop-blur-md z-50 flex flex-col"
            >
              {/* Cart Header */}
              <div className="relative h-24 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <div className="relative h-full p-6 flex items-center justify-between">
                  <motion.h2 
                    className="text-xl font-medium text-white"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    Mon Panier
                  </motion.h2>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full text-white"
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group relative p-4 bg-white rounded-xl hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-amber-500 to-rose-500 p-0.5">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-rose-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                            {item.image && (
                              <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-[0.3rem]"
                              />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">{item.name}</h3>
                            <p className="text-sm bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent font-semibold">
                              {item.price}€
                            </p>
                          </div>

                          <div className="flex items-center gap-2 bg-gray-50 rounded-full p-1">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white"
                            >
                              <Minus className="w-3 h-3" />
                            </motion.button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white"
                            >
                              <Plus className="w-3 h-3" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 flex items-center justify-center mb-4">
                      <ShoppingCart className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-500">Votre panier est vide</p>
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 bg-white/50 backdrop-blur-md border-t">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                      {cartTotal}€
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative overflow-hidden h-14 rounded-xl text-white font-medium"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500" />
                    <div className="relative flex items-center justify-center space-x-2">
                      <span>Commander</span>
                      <ArrowUpRight className="w-5 h-5" />
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
