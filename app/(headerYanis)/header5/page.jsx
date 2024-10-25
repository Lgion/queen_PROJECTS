"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
// import { FiMenu, FiShoppingCart, FiX, FiSearch, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import Logo from '../components/Logo';
import CartModal from '../components/CartModal';
import MobileMenu from '../components/MobileMenu';
import SearchBar5 from '../components/SearchBar5';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            {['Accueil', 'Services', 'Produits', 'Réservations', 'Équipe', 'Galerie', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Rechercher"
            >
              {/* <FiSearch className="w-5 h-5 text-gray-600" /> */}
            </button>

            {/* Social Media Icons - Hidden on mobile */}
            <div className="hidden md:flex space-x-2">
              <a href="#instagram" className="p-2 hover:bg-gray-100 rounded-full">
                {/* <FiInstagram className="w-5 h-5 text-gray-600" /> */}
              </a>
              <a href="#facebook" className="p-2 hover:bg-gray-100 rounded-full">
                {/* <FiFacebook className="w-5 h-5 text-gray-600" /> */}
              </a>
              <a href="#twitter" className="p-2 hover:bg-gray-100 rounded-full">
                {/* <FiTwitter className="w-5 h-5 text-gray-600" /> */}
              </a>
            </div>

            {/* Cart Button */}
            <button
              className="relative p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsCartOpen(true)}
              aria-label="Panier"
            >
              {/* <FiShoppingCart className="w-5 h-5 text-gray-600" /> */}
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* CTA Button - Hidden on mobile */}
            <a
              href="#reservation"
              className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200"
            >
              Prendre RDV
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Menu"
            >
              {/* <FiMenu className="w-6 h-6 text-gray-600" /> */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} setIsOpen={setIsCartOpen} cartItems={cartItems} setCartItems={setCartItems} />
    </header>
  );
}