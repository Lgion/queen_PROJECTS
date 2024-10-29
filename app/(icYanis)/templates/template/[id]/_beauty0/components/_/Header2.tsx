"use client"

import React, { useState, useEffect } from 'react';
import { 
  Home, Scissors, Users, Calendar, 
  Image, Star, Mail, Phone, MessageCircle, MapPin
} from 'lucide-react';
import './header2.scss';
import {
  Logo,
  NotificationBar,
  NavMenus,
  ActionButtons,
  HamburgerButton,
  MobileMenu
} from './header2Components';
import { Rotate3DAnimation } from './Logo/animations';
import { ScissorsRotation, GravityParticles, Spirograph, ConcentricWaves, Kaleidoscope, MatrixRain } from './Logo/canvas';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModePreference.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModePreference.addEventListener('change', handler);
    return () => darkModePreference.removeEventListener('change', handler);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const data = {
    mainMenu: [
      { icon: Home, label: 'Accueil', href: '#' },
      { icon: Scissors, label: 'Services', href: '#services' },
      { icon: Calendar, label: 'Réservations', href: '#reservations' },
      { icon: Users, label: 'Équipe', href: '#team' },
      { icon: Image, label: 'Galerie', href: '#gallery' },
      { icon: Star, label: 'Avis', href: '#reviews' },
      { icon: Mail, label: 'Contact', href: '#contact' },
    ],
    actionButtons: {
      phoneNumber: "+33123456789",
      contactButtons: [
        { icon: MapPin, label: "Location", href: "#location" },
        { icon: MessageCircle, label: "Chat", href: "#chat" },
        { icon: Phone, label: "Phone", href: "tel:+33123456789" }
      ]
    },
    logo: {
      text: "L'Atelier de Beauté",
      visual: {
        type: 'image',
        data: {
          src: '/img/images.jpg',
          alt: 'Logo Atelier de Beauté',
          width: 120,
          height: 48,
          className: 'logo-image',
          animation: {
            type: 'hover',
            params: {
              scale: 1.1,
              duration: 0.3
            }
          }
        }
      }
    }
  };

  return (
    <header className={`header2 ${isDarkMode ? 'dark' : 'light'}`}>
      <NotificationBar {...{hasNotification, setHasNotification}} />
      
      <div className="container">
        <div>
          <Logo />
          <NavMenus data={data.mainMenu} />
          <div>
            <ActionButtons data={data.actionButtons} />
            <HamburgerButton {...{toggleMenu, isMenuOpen}} />
          </div>
        </div>
      </div>

      <MobileMenu {...{
        isMenuOpen, 
        toggleMenu, 
        data: data.mainMenu,
        contactButtons: data.actionButtons.contactButtons
      }} />
    </header>
  );
};

export default Header2;