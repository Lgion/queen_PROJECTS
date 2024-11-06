"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  ChevronRight, 
  Sparkles, 
  Calendar, 
  Scissors, 
  Image as ImageIcon,
  MessageSquare,
  Phone,
  Menu,
  X,
  ArrowRight,
  Search,
  Bell,
  User,
  ShoppingCart,
  Plus,
  Minus
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dragX = useMotionValue(0);
  const opacity = useTransform(dragX, [-100, 0, 100], [0.5, 1, 0.5]);

  // Déplacer la déclaration de cartItems avant menuItems
  const [cartItems, setCartItems] = useState([
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

  // Maintenant menuItems peut accéder à cartItems
  const menuItems = [
    { icon: Scissors, label: 'Services', color: 'bg-rose-500' },
    { icon: Calendar, label: 'Réserver', color: 'bg-violet-500' },
    { icon: ImageIcon, label: 'Galerie', color: 'bg-amber-500' },

    { icon: MessageSquare, label: 'Avis', color: 'bg-blue-500' },
  ];

  const quickActions = [
    { label: 'Coupe Femme', price: '45€' },
    { label: 'Coupe Homme', price: '25€' },
    { label: 'Coloration', price: '65€' },
    { label: 'Brushing', price: '35€' },
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

  return (
    <header className="fixed w-full z-50">
      {/* Barre de statut */}
      <div className="bg-black text-white py-1 px-4 text-xs flex items-center justify-between">
        <span>09:00 - 19:00</span>
        <Phone className="w-3 h-3" />
      </div>

      {/* Header principal */}
      <motion.div 
        className="bg-white shadow-lg"
        style={{ opacity }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-violet-500 flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <span className="font-semibold text-lg">Glam Studio</span>
          </div>

          {/* Menu Trigger */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Navigation par gestes */}
        <motion.div 
          className="relative overflow-hidden border-t border-gray-100"
          animate={{ height: isExpanded ? 'auto' : '70px' }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            className="flex px-4 py-3 space-x-4"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                className={`flex-shrink-0 ${item.color} rounded-full p-3 text-white cursor-pointer relative`}
                whileTap={{ scale: 0.95 }}
                onClick={() => item.onClick ? item.onClick() : setActiveTab(index)}
              >
                <item.icon className="w-5 h-5" />
                {item.badge > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center"
                  >
                    {item.badge}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contenu expandable */}
          <motion.div 
            className="px-4 pb-4"
            initial={false}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span>{action.label}</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{action.price}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bouton d'expansion repositionné */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-2 top-3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </motion.div>
          </motion.button>

          {/* Panier */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-50 rounded-full"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center"
              >
                {cartItems.length}
              </motion.span>
            )}
          </motion.button>
        </motion.div>

        {/* Menu latéral */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-0 bg-white z-50"
            >
              {/* Contenu du menu */}
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={`#${item.label.toLowerCase()}`}
                      className="flex items-center space-x-4 text-lg"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`${item.color} p-3 rounded-full`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-black text-white rounded-xl font-medium"
                  >
                    Prendre rendez-vous
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Panier */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0 }}
                className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] bg-white z-50 flex flex-col"
              >
                {/* En-tête */}
                <div className="flex items-center justify-between p-4 border-b">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-gray-50 rounded-full"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                  <span className="font-medium">Mon Panier</span>
                  <div className="w-10" /> {/* Spacer pour centrer le titre */}
                </div>

                {/* Liste des articles */}
                <div className="flex-1 overflow-y-auto">
                  {cartItems.length > 0 ? (
                    <div className="p-4 space-y-4">
                      {cartItems.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="group flex items-center gap-4"
                        >
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
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
                            <p className="text-rose-500 font-medium">{item.price}€</p>
                          </div>

                          <div className="flex items-center gap-3">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                            >
                              <Minus className="w-4 h-4" />
                            </motion.button>
                            <span className="w-4 text-center">{item.quantity}</span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                            >
                              <Plus className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full p-4">
                      <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                      <p className="text-gray-500">Votre panier est vide</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                  <div className="border-t p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Total</span>
                      <span className="text-xl font-medium">{cartTotal}€</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-black text-white h-12 rounded-xl font-medium"
                    >
                      Commander
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
