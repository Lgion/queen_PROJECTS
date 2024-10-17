"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          GameExpo
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/cyr0/" className="hover:text-secondary-foreground">Accueil</Link>
          <Link href="/cyr0/programme" className="hover:text-secondary-foreground">Programme</Link>
          <Link href="/cyr0/exposants" className="hover:text-secondary-foreground">Exposants</Link>
          <Link href="/cyr0/infos-pratiques" className="hover:text-secondary-foreground">Infos Pratiques</Link>
          <Link href="/cyr0/contact" className="hover:text-secondary-foreground">Contact</Link>
        </nav>
        <Button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-secondary">
          <nav className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link href="/" className="hover:text-primary-foreground">Accueil</Link>
            <Link href="/programme" className="hover:text-primary-foreground">Programme</Link>
            <Link href="/exposants" className="hover:text-primary-foreground">Exposants</Link>
            <Link href="/infos-pratiques" className="hover:text-primary-foreground">Infos Pratiques</Link>
            <Link href="/contact" className="hover:text-primary-foreground">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;