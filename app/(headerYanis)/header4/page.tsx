"use client"

import React, { useState } from 'react';
import { Menu, Search, Facebook, Instagram, X, Scissors } from 'lucide-react';
import MobileMenu from '../components/MobileMenu';
import LanguageSelector from '../components/LanguageSelector';
import SearchBar from '../components/SearchBar';
import PromoBar from '../components/PromoBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <PromoBar />
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-serif font-bold">Coiffure Elite</span>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Accueil', 'Services', 'Équipe', 'Galerie', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-rose-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Social Icons - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-3">
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>

              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5 text-gray-600" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar isOpen={isSearchOpen} />
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} />
      </header>
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-28" />
    </>
  );
}