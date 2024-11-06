"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, ShoppingCartIcon, XMarkIcon, MagnifyingGlassIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Logo from "../components/Logo";
import CartModal from "../components/CartModal";
import MobileMenu from "../components/MobileMenu";
import SearchBar5 from "../components/SearchBar5";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Shampoing Premium",
            price: 25,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=100",
        },
        {
            id: 2,
            name: "Soin Hydratant",
            price: 35,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?w=100",
        },
    ]);

    const updateQuantity = (id, change) => {
        setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item)).filter((item) => item.quantity > 0));
    };

    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation - Hidden on mobile */}
                    <nav className="hidden md:flex space-x-8">
                        {["Accueil", "Services", "Produits", "Réservations", "Équipe", "Galerie", "Contact"].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-purple-600 transition-colors duration-200">
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Search Button avec animation */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 hover:bg-purple-50 rounded-full transition-colors duration-200"
                            onClick={() => setIsSearchOpen(true)}
                            aria-label="Rechercher"
                        >
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600 hover:text-purple-600" />
                        </motion.button>

                        {/* Social Media Icons - Hidden on mobile */}
                        <div className="hidden md:flex space-x-2">
                            <motion.a whileHover={{ scale: 1.1 }} href="#instagram" className="p-2 hover:bg-purple-50 rounded-full transition-colors duration-200">
                                <svg className="w-5 h-5 text-gray-600 hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.1 }} href="#facebook" className="p-2 hover:bg-purple-50 rounded-full transition-colors duration-200">
                                <svg className="w-5 h-5 text-gray-600 hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.1 }} href="#twitter" className="p-2 hover:bg-purple-50 rounded-full transition-colors duration-200">
                                <svg className="w-5 h-5 text-gray-600 hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                    />
                                </svg>
                            </motion.a>
                        </div>

                        {/* Cart Button avec animation */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative p-2 hover:bg-purple-50 rounded-full transition-colors duration-200"
                            onClick={() => setIsCartOpen(true)}
                            aria-label="Panier"
                        >
                            <ShoppingCartIcon className="w-5 h-5 text-gray-600 hover:text-purple-600" />
                            {cartItems.length > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                >
                                    {cartItems.length}
                                </motion.span>
                            )}
                        </motion.button>

                        {/* CTA Button - Hidden on mobile */}
                        <a href="#reservation" className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200">
                            Prendre RDV
                        </a>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2 hover:bg-gray-100 rounded-full" onClick={() => setIsMenuOpen(true)} aria-label="Menu">
                            <Bars3Icon className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

            {/* Cart Modal */}
            <AnimatePresence>
                {isCartOpen && (
                    <Dialog
                        open={isCartOpen}
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 overflow-y-auto"
                        onClose={() => setIsCartOpen(false)}
                    >
                        <div className="min-h-screen px-4 text-center">
                            {/* Overlay */}
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                            {/* Cart Panel */}
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                className="fixed bottom-0 inset-x-0 sm:relative sm:inline-block w-full sm:max-w-md text-left align-middle transition-all transform bg-white shadow-xl sm:rounded-2xl"
                            >
                                {/* Cart Header */}
                                <div className="p-6 border-b">
                                    <div className="flex items-center justify-between">
                                        <Dialog.Title as="h3" className="text-lg font-medium text-gray-900">
                                            Mon Panier
                                        </Dialog.Title>
                                        <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-purple-50 rounded-full transition-colors">
                                            <XMarkIcon className="w-5 h-5 text-gray-500" />
                                        </button>
                                    </div>
                                </div>

                                {/* Cart Items */}
                                <div className="max-h-[60vh] overflow-y-auto p-6">
                                    {cartItems.length > 0 ? (
                                        <div className="space-y-6">
                                            {cartItems.map((item) => (
                                                <div key={item.id} className="flex items-center space-x-4">
                                                    <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                                        {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                                                        <p className="text-purple-600 font-medium">{item.price}€</p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <motion.button whileTap={{ scale: 0.95 }} onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-purple-50 rounded-full">
                                                            <MinusIcon className="w-4 h-4" />
                                                        </motion.button>
                                                        <span className="w-8 text-center">{item.quantity}</span>
                                                        <motion.button whileTap={{ scale: 0.95 }} onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-purple-50 rounded-full">
                                                            <PlusIcon className="w-4 h-4" />
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-12">
                                            <ShoppingCartIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-500">Votre panier est vide</p>
                                        </div>
                                    )}
                                </div>

                                {/* Cart Footer */}
                                {cartItems.length > 0 && (
                                    <div className="p-6 border-t bg-gray-50">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-medium text-gray-900">Total</span>
                                            <span className="font-semibold text-purple-600">{cartTotal}€</span>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-purple-600 text-white font-medium py-3 rounded-full hover:bg-purple-700 transition-colors"
                                        >
                                            Commander
                                        </motion.button>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
        </header>
    );
}
