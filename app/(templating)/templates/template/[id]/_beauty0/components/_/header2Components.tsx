import Link from 'next/link';
import { 
  Menu, X, MapPin, MessageCircle, Phone,
  Users, Calendar, Image, Star, Mail, Home
} from 'lucide-react';
import Logo from './Logo';
import {ActionButtons} from './ActionButtons';
import {MobileMenu} from './MobileMenu';

const NotificationBar = ({hasNotification, setHasNotification}: {
  hasNotification: boolean,
  setHasNotification: (value: boolean) => void
}) => hasNotification ? (
  <div>
    <p>Offre spéciale: -20% sur votre première visite!</p>
    <button onClick={() => setHasNotification(false)}>
      <X size={16} />
    </button>
  </div>
) : null;

const NavMenus = ({data}: {data: any}) => (
  <nav>
    {data.map((item: any) => (
      <a key={item.label} href={item.href}>
        {item.label}
      </a>
    ))}
  </nav>
);

const HamburgerButton = ({toggleMenu, isMenuOpen}: {
  toggleMenu: () => void,
  isMenuOpen: boolean
}) => (
  <button onClick={toggleMenu} aria-label="Menu">
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);


export {
  Logo,
  ActionButtons,
  MobileMenu,
  NotificationBar,
  NavMenus,
  HamburgerButton,
};
