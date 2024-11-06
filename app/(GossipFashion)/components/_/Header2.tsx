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
import "../../utils/styles/modal.scss"
import './header2.scss';



const scrollThreshold = 150
, subScrollThreshold = 130;



const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<[number, boolean]>([0, false]);

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModePreference.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModePreference.addEventListener('change', handler);
    return () => darkModePreference.removeEventListener('change', handler);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled([scrollY, scrollY > scrollThreshold]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  


  return <>
    <header className={`
      top-0 w-full z-50 header2 
      ${isDarkMode ? 'dark' : 'light'}
      ${isScrolled[0] > subScrollThreshold && isScrolled[0] < scrollThreshold ? 'ease-scrolling' : ''}
      ${isScrolled[1] ? 'scrolled' : ''}
    `}>
      <NotificationBar {...{hasNotification, setHasNotification}} />
      <section className="container">
          {/* <Logo /> */}
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
    {/* <div style={{position: 'fixed', top: 0, right: 0, background: 'white', padding: '5px'}}>
      Scroll: {isScrolled[0]}px
    </div> */}
  </>
};

export default Header2;