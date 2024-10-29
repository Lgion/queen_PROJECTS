"use client"

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, MapPin, MessageCircle, Phone as PhoneIcon,
  Scissors, Users, Calendar, Image, Star, Mail, Home,
  ShoppingCart, Search as SearchIcon // Ajout des nouveaux icônes
  , NotebookPen
} from 'lucide-react';
import { Logo, HamburgerContent, HamburgerFooter } from './header1Components';
import { MenuItems,HamburgerButton } from './header0Components';
import "./header1.scss"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasSpecialOffer, setHasSpecialOffer] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(2); // Simulation d'items dans le panier
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModePreference.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModePreference.addEventListener('change', handler);
    return () => darkModePreference.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const data = {
    menuIcons: [
    { icon: Home, label: 'Accueil', href: '#' },
    { icon: Scissors, label: 'Services', href: '#services' },
    { icon: Calendar, label: 'Réservations', href: '#reservations' },
    { icon: Users, label: 'Équipe', href: '#team' },
    { icon: Image, label: 'Galerie', href: '#gallery' },
    { icon: Star, label: 'Avis', href: '#reviews' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ]
}

  return (
    <header className={`header1 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Notification Bar */}
      {hasSpecialOffer && (
        <SpecialOffer {...{setHasSpecialOffer}} />
      )}

      {/* Main Header */}
      <section>
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation - hidden on mobile */}
          {/* <NavMenus {...{data}} /> */}
          <ul>
            {MenuItems(data.menuIcons.map((item,i)=>({...item,className:"text-sm font-medium hover:text-rose-600 transition-colors"})))}
          </ul>

          {/* Action Buttons */}
          {/* Search Button */}
          <SearchOpenButton {...{isSearchOpen,setIsSearchOpen}} />

          {/* Cart Button */}
          <Cart {...{isCartOpen,setIsCartOpen,cartItemsCount,cartRef}} />

          {/* Mobile Menu Button */}
          <HamburgerButton {...{toggleMenu,isMenuOpen}} />

      </section>






      {/* Search Overlay */}
      {isSearchOpen && (
        <SearchOpenContent {...{isSearchOpen,setIsSearchOpen}} />
      )}

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />






      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-serif font-bold">Menu</span>
              <HamburgerButton {...{toggleMenu}} />
            </div>

            <HamburgerContent {...{data,k:"menuIcons"}} />
            
          </div>

          <HamburgerFooter {...{cartItemsCount,setIsSearchOpen,isSearchOpen}} />

        </div>
      </div>
    </header>
  );
};



const SpecialOffer = ({setHasSpecialOffer}:{setHasSpecialOffer:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return <div className="specialOffer">
    <p>
      Offre spéciale: -20% sur votre première visite!
    </p>
    <button 
      onClick={() => setHasSpecialOffer(false)}
    >
      <X size={16} />
    </button>
  </div>
}



const Phone = ({number}:{number:string}) => <a
  href={"tel:"+number}
  className="hidden md:flex items-center space-x-1 text-sm font-medium hover:text-rose-600"
  >
    {/* <PhoneIcon size={18} /> */}
  <span>{number}</span>
</a>
const BookButton = () => <button title="Réserver">
  <NotebookPen size={18} />
</button>
const SearchOpenButton = ({isSearchOpen,setIsSearchOpen}:{isSearchOpen:boolean,setIsSearchOpen:React.Dispatch<React.SetStateAction<boolean>>}) => <button 
onClick={() => setIsSearchOpen(!isSearchOpen)}
className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
aria-label="Rechercher"
>
  <SearchIcon size={20} />
</button> 
const SearchOpenContent = ({isSearchOpen,setIsSearchOpen}:{isSearchOpen:boolean,setIsSearchOpen:React.Dispatch<React.SetStateAction<boolean>>}) => <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-4 border-t dark:border-gray-800">
    <div className="container mx-auto">
      <div className="relative">
        <input
          type="search"
          placeholder="Rechercher..."
          className="w-full px-4 py-2 pl-10 pr-4 rounded-full border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:border-rose-600"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <X size={20} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
        </button>
      </div>
    </div>
  </div>

const Cart = ({isCartOpen,setIsCartOpen,cartItemsCount,cartRef}:{isCartOpen:boolean,setIsCartOpen:React.Dispatch<React.SetStateAction<boolean>>,cartItemsCount:number,cartRef:React.RefObject<HTMLDivElement>}) => <div className="relative" ref={cartRef}>
  <button 
    onClick={() => setIsCartOpen(!isCartOpen)}
    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
    aria-label="Panier"
  >
    <ShoppingCart size={20} />
    {cartItemsCount > 0 && (
      <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {cartItemsCount}
      </span>
    )}
  </button>

  {/* Menu déroulant du panier - Modification du positionnement */}
  {isCartOpen && (
    <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg border dark:border-gray-800 z-50 transform -translate-x-1/2 sm:translate-x-0 sm:right-0 left-1/2 sm:left-auto">
      <div className="p-4">
        <h3 className="text-lg font-medium mb-4">Mon Panier</h3>
        
        {/* Articles du panier */}
        <div className="space-y-4 max-h-96 overflow-auto">
          {/* Example cart item */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">Shampoing Premium</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Quantité: 1</p>
              <p className="text-sm font-medium text-rose-600">25,00 €</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
              <X size={16} />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">Soin Hydratant</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Quantité: 1</p>
              <p className="text-sm font-medium text-rose-600">35,00 €</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Total et boutons */}
        <div className="mt-4 pt-4 border-t dark:border-gray-800">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-medium">60,00 €</span>
          </div>
          
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors">
              Voir le panier
            </button>
            <button className="w-full px-4 py-2 border border-rose-600 text-rose-600 rounded-full hover:bg-rose-50 dark:hover:bg-gray-800 transition-colors">
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</div>




export default Header;
