"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  Scissors,
  Sparkles,
  Camera,
  Palette,
  Clock,
  Heart,
  Share2,
  MessageCircle,
  Plus,
  ChevronLeft,
  ChevronRight,
  X,
  ShoppingCart,
  Minus,
  ArrowLeft
} from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  duration?: string;
}

export default function Header() {
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const [storyProgress, setStoryProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const scale = useTransform(dragX, [-100, 0, 100], [0.95, 1, 0.95]);
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

  const stories = [
    { 
      id: 1, 
      stylist: "Marie", 
      specialty: "Coloriste",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500",
      duration: "30s",
      likes: 245,
      comments: 12
    },
    { 
      id: 2, 
      stylist: "Thomas", 
      specialty: "Coupe Homme",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500",
      duration: "45s",
      likes: 189,
      comments: 8
    },
    { 
      id: 3, 
      stylist: "Sophie", 
      specialty: "Extensions",
      image: "https://images.unsplash.com/photo-1560869713-da86bd4f31b7?w=500",
      duration: "60s",
      likes: 312,
      comments: 15
    },
  ];

  useEffect(() => {
    if (activeStory !== null) {
      const timer = setInterval(() => {
        setStoryProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [activeStory]);

  return (
    <header className="fixed w-full z-50">
      {/* Barre principale avec stories */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Logo et titre */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 p-0.5"
              >
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-gray-800" />
                </div>
              </motion.div>
              <span className="font-semibold text-lg">StoryStyle</span>
            </div>

            {/* Ajout du bouton panier ici */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-white/10 rounded-full"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItems.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-orange-400 to-rose-500 text-white text-xs rounded-full flex items-center justify-center"
                  >
                    {cartItems.length}
                  </motion.span>
                )}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 hover:bg-gray-50 rounded-full relative"
              >
                <Camera className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full" />
              </motion.button>
            </div>
          </div>

          {/* Stories horizontales */}
          <div 
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          >
            {/* Add Story Button */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 w-20 space-y-1"
            >
              <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center">
                <Plus className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xs text-center text-gray-500">Ajouter</p>
            </motion.div>

            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 w-20 space-y-1"
                onClick={() => setActiveStory(index)}
              >
                <motion.div
                  className="relative w-20 h-20 rounded-xl bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 p-0.5"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full rounded-[10px] overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.stylist}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <p className="text-xs text-center font-medium">{story.stylist}</p>
                <p className="text-[10px] text-center text-gray-500">{story.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Vue Story */}
      <AnimatePresence>
        {activeStory !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 100) {
                setActiveStory(null);
                setStoryProgress(0);
              }
            }}
            style={{ x: dragX, scale }}
          >
            {/* Barre de progression */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${storyProgress}%` }}
              />
            </div>

            {/* Contenu de la story */}
            <div className="relative h-full">
              <img
                src={stories[activeStory].image}
                alt={stories[activeStory].stylist}
                className="w-full h-full object-cover"
              />

              {/* Header Story */}
              <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                      <Scissors className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-medium">{stories[activeStory].stylist}</p>
                    <p className="text-white/70 text-sm">{stories[activeStory].specialty}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActiveStory(null);
                    setStoryProgress(0);
                  }}
                  className="p-2"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Actions Story */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-white">
                      <Heart className="w-6 h-6" />
                      <span className="text-sm">{stories[activeStory].likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-white">
                      <MessageCircle className="w-6 h-6" />
                      <span className="text-sm">{stories[activeStory].comments}</span>
                    </button>
                  </div>
                  <button className="text-white">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Navigation Story */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white"
                onClick={() => activeStory > 0 && setActiveStory(activeStory - 1)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white"
                onClick={() => activeStory < stories.length - 1 && setActiveStory(activeStory + 1)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu panier */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:absolute lg:top-full lg:right-0 lg:left-auto lg:bottom-auto"
          >
            {/* Overlay avec flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-black/95 backdrop-blur-md text-white overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 flex items-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full"
                >
                  <ArrowLeft className="w-6 h-6" />
                </motion.button>
                <h2 className="text-xl font-medium">Mon Panier</h2>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto">
                {cartItems.length > 0 ? (
                  <div className="p-6 space-y-6">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        className="group relative"
                      >
                        <div className="flex gap-4">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                            {item.image && (
                              <motion.img
                                whileHover={{ scale: 1.05 }}
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            )}
                            {item.duration && (
                              <div className="absolute bottom-0 inset-x-0 bg-black/50 py-1 px-2">
                                <span className="text-xs">{item.duration}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-medium mb-1">{item.name}</h3>
                            <p className="text-rose-400">{item.price}€</p>
                            
                            <div className="flex items-center gap-3 mt-2">
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                              >
                                <Minus className="w-4 h-4" />
                              </motion.button>
                              <span className="w-6 text-center">{item.quantity}</span>
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                              >
                                <Plus className="w-4 h-4" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-6">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <ShoppingCart className="w-10 h-10" />
                    </div>
                    <p className="text-gray-400">Votre panier est vide</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 bg-white/5 backdrop-blur-lg">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg">Total</span>
                    <span className="text-2xl font-bold text-rose-400">{cartTotal}€</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-14 bg-gradient-to-r from-orange-400 to-rose-500 rounded-xl font-medium relative overflow-hidden group"
                  >
                    <span className="relative z-10">Commander</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
