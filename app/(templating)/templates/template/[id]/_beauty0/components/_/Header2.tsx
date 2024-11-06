"use client"

import React, { useState, useEffect } from 'react';
import {
  Logo,
  ActionButtons,
  NotificationBar,
  NavMenus,
  HamburgerButton,
  MobileMenu
} from './header2Components';
import data from "./header2.js"
import "../../styles/modal.scss"
import './header2.scss';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);

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

  


  return (
    <header className={`header2 ${isDarkMode ? 'dark' : 'light'}`}>
      <NotificationBar {...{hasNotification, setHasNotification}} />
      
      <section className="container">
          <Logo />
          <NavMenus data={data.mainMenu} />
          <ActionButtons data={data.actionButtons} onModalOpen={setActiveModal} />
          <HamburgerButton {...{toggleMenu, isMenuOpen}} />
      </section>

      <MobileMenu {...{
        isMenuOpen, 
        toggleMenu, 
        data: data.mainMenu,
        contactButtons: data.actionButtons.contactButtons
      }} />

      {/* {Object.entries(modalContents).map(([key, content]) => (
        <Modal
          key={key}
          isOpen={activeModal === key}
          onClose={() => setActiveModal(null)}
          title={data.actionButtons[key as keyof typeof modalContents].modalContent.title}
        >
          {content}
        </Modal>
      ))} */}
    </header>
  );
};

export default Header2;