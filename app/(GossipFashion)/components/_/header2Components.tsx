import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
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

const NavMenus = ({data}: {data: any}) => {
  const segments = useSelectedLayoutSegments();
  // const currentPath = `/${segments.join('/')}`;
  const baseSegment = segments[0] || ''; // Prend le premier segment (gossip)

  return (
    <nav>
      {data.map((item: any) => (
        <Link 
          key={item.label} 
          // href={`${currentPath}/${item.href}`}
          href={`/${baseSegment}/${item.href}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

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
