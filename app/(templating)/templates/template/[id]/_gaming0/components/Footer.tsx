import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-backgroundd-light py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Cybergamer</h3>
            <p className="text-gray-400">Vivez l'expérience ultime du gaming à Abidjan</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primaryy transition-colors">Accueil</a></li>
              <li><a href="#games" className="text-gray-400 hover:text-primaryy transition-colors">Jeux</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-primaryy transition-colors">Événements</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primaryy transition-colors">Tarifs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primaryy transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primaryy transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primaryy transition-colors">Conditions d'utilisation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primaryy transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primaryy transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primaryy transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primaryy transition-colors"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2023 Cybergamer. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;