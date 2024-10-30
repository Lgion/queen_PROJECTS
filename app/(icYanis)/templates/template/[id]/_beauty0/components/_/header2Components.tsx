import Link from 'next/link';
import { 
  Menu, X, MapPin, MessageCircle, Phone,
  Users, Calendar, Image, Star, Mail, Home
} from 'lucide-react';
import Logo from './Logo';
import {
  BookingButton,
  CartButton,
  LoyaltyButton,
  SocialMediaButtons,
  PortfolioButton,
  OnlineConsultButton,
  GiftCardButton,
  QuoteButton,
  AvailabilityButton,
  DealsButton,
  ReferralButton,
  NotificationsButton,
  ClickAndCollectButton,
  PaymentButton,
  QuestionnaireButton,
  PersonalInfoButton,
  ContactButtons
} from './ActionButtons';

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

interface ActionButtonsProps {
  data: {
    phoneNumber: string;
    booking: {
      icon: any;
      label: string;
      href: string;
      modalContent: {
        title: string;
        content: string;
      };
    };
    cart: {
      icon: any;
      label: string;
      href: string;
      itemCount: number;
      modalContent: {
        title: string;
        content: string;
      };
    };
    personalInfo: {
      icon: any;
      label: string;
      href: string;
      modalContent: {
        title: string;
        content: React.ReactNode;
      };
    };
    contactButtons: Array<{
      icon: any;
      label: string;
      href: string;
    }>;
    socialMedia: Array<{
      icon: any;
      label: string;
      href: string;
    }>;
  };
  onModalOpen: (modalId: string) => void;
}

const ActionButtons = ({ data, onModalOpen }: ActionButtonsProps) => (
  <div className="action-buttons flex items-center space-x-4">
    <a 
      href={`tel:${data.phoneNumber}`}
      title="Appelez-nous maintenant"
      className="phone-button tooltip-bottom"
    >
      <Phone size={18} />
    </a>
    
    <BookingButton data={data.booking} onModalOpen={onModalOpen} />
    <CartButton data={data.cart} onModalOpen={onModalOpen} />
    <ContactButtons data={data.contactButtons} onModalOpen={onModalOpen} />
    <LoyaltyButton data={data.loyalty} onModalOpen={onModalOpen} />
    <PortfolioButton data={data.portfolio} onModalOpen={onModalOpen} />
    <OnlineConsultButton data={data.onlineConsult} onModalOpen={onModalOpen} />
    <GiftCardButton data={data.giftCard} onModalOpen={onModalOpen} />
    <QuoteButton data={data.quote} onModalOpen={onModalOpen} />
    <AvailabilityButton data={data.availability} onModalOpen={onModalOpen} />
    <DealsButton data={data.deals} onModalOpen={onModalOpen} />
    <ReferralButton data={data.referral} onModalOpen={onModalOpen} />
    <NotificationsButton data={data.notifications} onModalOpen={onModalOpen} />
    <ClickAndCollectButton data={data.clickAndCollect} onModalOpen={onModalOpen} />
    <PaymentButton data={data.payment} onModalOpen={onModalOpen} />
    <QuestionnaireButton data={data.questionnaire} onModalOpen={onModalOpen} />
    <PersonalInfoButton data={data.personalInfo} onModalOpen={onModalOpen} />
    
    <SocialMediaButtons data={data.socialMedia} />
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
