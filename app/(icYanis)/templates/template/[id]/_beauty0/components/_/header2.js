import { 
    Home, Scissors, Users, Calendar, 
    Image, Star, Mail, Phone, MessageCircle, MapPin,
    ShoppingCart, CreditCard, Facebook, Instagram, Twitter,
    Calendar as CalendarIcon,
    Gift, Clock, FileText, Camera,
    Ticket, Heart, Share2, Bell,
    Clipboard, Coffee, Video,
    CreditCard as PaymentIcon
} from 'lucide-react';



export default {
    mainMenu: [
      { icon: Home, label: 'Accueil', href: '#' },
      { icon: Scissors, label: 'Services', href: '#services' },
      { icon: Calendar, label: 'Réservations', href: '#reservations' },
      { icon: Users, label: 'Équipe', href: '#team' },
      { icon: Image, label: 'Galerie', href: '#gallery' },
      { icon: Star, label: 'Avis', href: '#reviews' },
      { icon: Mail, label: 'Contact', href: '#contact' },
    ],
    actionButtons: {
      phoneNumber: "+33123456789",
      booking: {
        icon: CalendarIcon,
        label: "Réserver",
        href: "#booking",
        modalContent: {
          title: "Réservation",
          content: "Formulaire de réservation ici..."
        }
      },
      cart: {
        icon: ShoppingCart,
        label: "Panier",
        href: "/cart",
        itemCount: 0,
        modalContent: {
          title: "Votre Panier",
          content: "Contenu du panier ici..."
        }
      },
      personalInfo: {
        icon: CreditCard,
        label: "Mes Informations",
        href: "/personal-info",
        modalContent: {
          title: "Mes Informations",
          content: "Coordonnées personnelles, préférences, historique..."
        }
      },
      contactButtons: [
        { icon: MapPin, label: "Location", href: "#location" },
        { icon: MessageCircle, label: "Chat", href: "#chat" },
        { icon: Phone, label: "Phone", href: "tel:+33123456789" },
        { icon: Mail, label: "Email", href: "mailto:contact@example.com" }
      ],
      socialMedia: [
        { icon: Facebook, label: "Facebook", href: "https://facebook.com/example" },
        { icon: Instagram, label: "Instagram", href: "https://instagram.com/example" },
        { icon: Twitter, label: "Twitter", href: "https://twitter.com/example" }
      ],
      loyalty: {
        icon: Heart,
        label: "Fidélité",
        href: "/loyalty",
        modalContent: {
          title: "Programme de Fidélité",
          content: "Points et avantages fidélité..."
        }
      },
      portfolio: {
        icon: Camera,
        label: "Portfolio",
        href: "/portfolio",
        modalContent: {
          title: "Mon Portfolio",
          content: "Galerie avant/après..."
        }
      },
      onlineConsult: {
        icon: Video,
        label: "Consultation en ligne",
        href: "/online-consult",
        modalContent: {
          title: "Consultation Vidéo",
          content: "Planifier une consultation en ligne..."
        }
      },
      giftCard: {
        icon: Gift,
        label: "Carte Cadeau",
        href: "/gift-cards",
        modalContent: {
          title: "Cartes Cadeaux",
          content: "Offrir une prestation..."
        }
      },
      quote: {
        icon: FileText,
        label: "Devis",
        href: "/quote",
        modalContent: {
          title: "Devis Rapide",
          content: "Estimation personnalisée..."
        }
      },
      availability: {
        icon: Clock,
        label: "Disponibilités",
        href: "/availability",
        modalContent: {
          title: "Disponibilités",
          content: "Créneaux disponibles..."
        }
      },
      deals: {
        icon: Ticket,
        label: "Promotions",
        href: "/deals",
        modalContent: {
          title: "Offres Spéciales",
          content: "Promotions en cours..."
        }
      },
      referral: {
        icon: Share2,
        label: "Parrainage",
        href: "/referral",
        modalContent: {
          title: "Programme de Parrainage",
          content: "Parrainez vos amis..."
        }
      },
      notifications: {
        icon: Bell,
        label: "Notifications",
        href: "/notifications",
        modalContent: {
          title: "Mes Notifications",
          content: "Gérer mes alertes..."
        }
      },
      clickAndCollect: {
        icon: Coffee,
        label: "Click & Collect",
        href: "/click-collect",
        modalContent: {
          title: "Click & Collect",
          content: "Commander et retirer..."
        }
      },
      payment: {
        icon: PaymentIcon,
        label: "Paiement",
        href: "/payment",
        modalContent: {
          title: "Options de Paiement",
          content: "Paiement en plusieurs fois..."
        }
      },
      questionnaire: {
        icon: Clipboard,
        label: "Questionnaire",
        href: "/questionnaire",
        modalContent: {
          title: "Questionnaire Préalable",
          content: "Mieux vous connaître..."
        }
      }
    },
    logo: {
      text: "L'Atelier de Beauté",
      visual: {
        type: 'image',
        data: {
          src: '/img/images.jpg',
          alt: 'Logo Atelier de Beauté',
          width: 120,
          height: 48,
          className: 'logo-image',
          animation: {
            type: 'hover',
            params: {
              scale: 1.1,
              duration: 0.3
            }
          }
        }
      }
    }
  };