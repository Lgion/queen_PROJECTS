"use client"

import React, { useState, useEffect } from 'react';
import { Menu, MapPin, MessageCircle, Phone, Scissors, Moon, Sun, MicOff, Mic } from 'lucide-react';
import Navigation from '../components/Navigation';
import NotificationBar6 from '../components/NotificationBar6';
import ThemeToggle from '../components/ThemeToggle';
import VoiceSearch from '../components/VoiceSearch';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const openMaps = () => {
    window.open('https://maps.google.com/?q=Hair+Salon+Address', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Notification Bar */}
      <NotificationBar6 />

      {/* Main Header */}
      <div className={`bg-white/90 backdrop-blur-md dark:bg-gray-900/90 transition-colors duration-300 shadow-lg ${isDark ? 'dark' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Scissors className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-[spin_3s_ease-in-out_infinite]" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StyleHub
              </span>
            </div>

            {/* Actions Group */}
            <div className="flex items-center space-x-4">
              <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
              <VoiceSearch isListening={isListening} setIsListening={setIsListening} />
              <button
                onClick={openMaps}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={handleCall}
                className="hidden sm:flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 md:hidden">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={handleCall}
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-105"
            aria-label="Book Now"
          >
            <Phone className="w-6 h-6" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Chat"
          >
            <MessageCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}