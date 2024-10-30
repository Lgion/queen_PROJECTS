"use client"

import React, { useState } from 'react';
import "./header0.scss"
import { Logo, HamburgerButton, HamburgerContent, NavMenus } from './header0Components';
const data = {
  iconMenu: [
    {"search": "/templates/template/4/search"},
    {"cart": "/templates/template/4/cart"},
    {"user": "/templates/template/4/user"}
  ]
  , hamburgerMenu:  [
    {href:"/templates/template/4/products",label:"Produits"},
    {href:"/templates/template/4/blog",label:"Blog"},
    {href:"/templates/template/4/services",label:"Services",className:"ok"},
    {href:"/templates/template/4/gallery",label:"Galerie",className:"ok"},
    {href:"/templates/template/4/reservation",label:"Réservation",className:"ok"},
    {href:"/templates/template/4/serviceproviders",label:"Service Providers",className:"ok"},
    {href:"/templates/template/4/checkout",label:"Checkout"},
    {href:"/templates/template/4/testimonials",label:"Testimonials"},
  ]
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className='header0'>



      <section>

        <Logo />
        
        <NavMenus {...{data,handleSearch,searchQuery,setSearchQuery}} />
        
        <HamburgerButton {...{toggleMenu,isMenuOpen}} />

      </section>
      


      {isMenuOpen && (
        <HamburgerContent {...{data}} />
      )}
      


    </header>
  );
};





export default Header;