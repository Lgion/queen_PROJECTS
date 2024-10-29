import Link from 'next/link';
import { 
  Menu, X, MapPin, MessageCircle, Phone,
  Users, Calendar, Image, Star, Mail, Home
} from 'lucide-react';
import Logo from './Logo';

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

const ActionButtons = ({data}: {
  data: {
    phoneNumber: string,
    contactButtons: Array<{
      icon: any,
      label: string,
      href: string
    }>
  }
}) => (
  <div>
    <a href={`tel:${data.phoneNumber}`}>
      <Phone size={18} />
      <span>{data.phoneNumber}</span>
    </a>
    <button>Réserver</button>
  </div>
);

const HamburgerButton = ({toggleMenu, isMenuOpen}: {
  toggleMenu: () => void,
  isMenuOpen: boolean
}) => (
  <button onClick={toggleMenu} aria-label="Menu">
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);

const MobileMenu = ({
  isMenuOpen,
  toggleMenu,
  data,
  contactButtons
}: {
  isMenuOpen: boolean,
  toggleMenu: () => void,
  data: any,
  contactButtons: Array<{
    icon: any,
    label: string,
    href: string
  }>
}) => (
  <>
    <div 
      className={`overlay ${isMenuOpen ? 'is-visible' : 'is-hidden'}`} 
      onClick={toggleMenu} 
    />
    
    <div className={`mobile-menu ${isMenuOpen ? 'is-visible' : 'is-hidden'}`}>
      <div>
        <div>
          <div>
            <span>Menu</span>
            <button onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>

          <nav>
            {data.map((item: any) => (
              <a key={item.label} href={item.href} onClick={toggleMenu}>
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div>
          <button>Réserver maintenant</button>
          <div>
            {contactButtons.map((button, index) => {
              const Icon = button.icon;
              return (
                <a 
                  key={index}
                  href={button.href}
                  aria-label={button.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </>
);

export {
  Logo,
  NotificationBar,
  NavMenus,
  ActionButtons,
  HamburgerButton,
  MobileMenu
};
