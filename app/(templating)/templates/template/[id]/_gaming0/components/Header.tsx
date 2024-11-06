import React, { useState } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-backgroundd-light sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Gamepad2 className="text-primary mr-2" size={32} />
          <span className="text-2xl font-orbitron font-bold">Cybergamer</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-primary transition-colors">Accueil</a>
          <a href="#games" className="hover:text-primary transition-colors">Jeux</a>
          <a href="#events" className="hover:text-primary transition-colors">Événements</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Tarifs</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-100">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background-light">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="hover:text-primary transition-colors" onClick={toggleMenu}>Accueil</a>
            <a href="#games" className="hover:text-primary transition-colors" onClick={toggleMenu}>Jeux</a>
            <a href="#events" className="hover:text-primary transition-colors" onClick={toggleMenu}>Événements</a>
            <a href="#pricing" className="hover:text-primary transition-colors" onClick={toggleMenu}>Tarifs</a>
            <a href="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;