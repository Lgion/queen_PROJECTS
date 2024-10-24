import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

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
    <header className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Beauté d'Abidjan</Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-1 px-3 pr-10 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
              <Search size={18} />
            </button>
          </form>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/products" className="hover:text-orange-200 transition duration-300">Produits</Link></li>
              <li><Link to="/blog" className="hover:text-orange-200 transition duration-300">Blog</Link></li>
              <li><Link to="/cart" className="hover:text-orange-200 transition duration-300"><ShoppingCart /></Link></li>
              <li><User className="hover:text-orange-200 transition duration-300 cursor-pointer" /></li>
            </ul>
          </nav>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </form>
          <nav>
            <ul className="flex flex-col space-y-2">
              <li><Link to="/products" className="block py-2 hover:bg-orange-700 transition duration-300">Produits</Link></li>
              <li><Link to="/blog" className="block py-2 hover:bg-orange-700 transition duration-300">Blog</Link></li>
              <li><Link to="/cart" className="block py-2 hover:bg-orange-700 transition duration-300">Panier</Link></li>
              <li><Link to="/account" className="block py-2 hover:bg-orange-700 transition duration-300">Mon compte</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;