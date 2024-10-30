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
        },
        modalStyle: {
          animation: 'rotate',
          shape: 'side-panel'
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
        },
        modalStyle: {
          animation: 'slide-down',
          shape: 'side-panel'
        }
      },
      personalInfo: {
        icon: CreditCard,
        label: "Mes Informations",
        href: "/personal-info",
        modalContent: {
          title: "Mes Informations",
          content: "Coordonnées personnelles, préférences, historique..."
        },
        modalStyle: {
          animation: 'fade',
          shape: 'rounded'
        }
      },
      contactButtons: [
        { 
          icon: MapPin, 
          label: "Location", 
          href: "#location",
          modalContent: {
            title: "Notre Localisation",
            content: "Retrouvez-nous à cette adresse..."
          },
          modalStyle: {
            animation: 'fade',
            shape: 'default'
          }
        },
        { 
          icon: MessageCircle, 
          label: "Chat", 
          href: "#chat",
          modalContent: {
            title: "Chat en direct",
            content: "Discutez avec nos conseillers..."
          },
          modalStyle: {
            animation: 'slide-up',
            shape: 'rounded'
          }
        },
        { 
          icon: Phone, 
          label: "Phone", 
          href: "tel:+33123456789",
          modalContent: {
            title: "Nous appeler",
            content: "Contactez-nous par téléphone..."
          },
          modalStyle: {
            animation: 'scale',
            shape: 'default'
          }
        },
        { 
          icon: Mail, 
          label: "Email", 
          href: "mailto:contact@example.com",
          modalContent: {
            title: "Nous écrire",
            content: "Envoyez-nous un email..."
          },
          modalStyle: {
            animation: 'slide-down',
            shape: 'rounded'
          }
        }
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
        },
        modalStyle: {
          animation: 'slide-up',
          shape: 'rounded'
        }
      },
      portfolio: {
        icon: Camera,
        label: "Portfolio",
        href: "/portfolio",
        modalContent: {
          title: "Mon Portfolio",
          content: "Galerie avant/après..."
        },
        modalStyle: {
          animation: 'rotate',
          shape: 'default'
        }
      },
      onlineConsult: {
        icon: Video,
        label: "Consultation en ligne",
        href: "/online-consult",
        modalContent: {
          title: "Consultation Vidéo",
          content: "Planifier une consultation en ligne..."
        },
        modalStyle: {
          animation: 'rotate',
          shape: 'side-panel'
        }
      },
      giftCard: {
        icon: Gift,
        label: "Carte Cadeau",
        href: "/gift-cards",
        modalContent: {
          title: "Cartes Cadeaux",
          content: "Offrir une prestation..."
        },
        modalStyle: {
          animation: 'slide-up',
          shape: 'side-panel'
        }
      },
      quote: {
        icon: FileText,
        label: "Devis",
        href: "/quote",
        modalContent: {
          title: "Devis Rapide",
          content: "Estimation personnalisée..."
        },
        modalStyle: {
          animation: 'slide-up',
          shape: 'side-panel'
        }
      },
      availability: {
        icon: Clock,
        label: "Disponibilités",
        href: "/availability",
        modalContent: {
          title: "Disponibilités",
          content: "Créneaux disponibles..."
        },
        modalStyle: {
          animation: 'slide-up',
          shape: 'full-width'
        }
      },
      deals: {
        icon: Ticket,
        label: "Promotions",
        href: "/deals",
        modalContent: {
          title: "Offres Spéciales",
          content: "Promotions en cours..."
        },
        modalStyle: {
          animation: 'slide-up',
          shape: 'full-width'
        }
      },
      referral: {
        icon: Share2,
        label: "Parrainage",
        href: "/referral",
        modalContent: {
          title: "Programme de Parrainage",
          content: "Parrainez vos amis..."
        },
        modalStyle: {
          animation: 'slide-up',
          shape: 'full-width'
        }
      },
      notifications: {
        icon: Bell,
        label: "Notifications",
        href: "/notifications",
        modalContent: {
          title: "Mes Notifications",
          content: "Gérer mes alertes..."
        },
        modalStyle: {
          animation: 'fade',
          shape: 'default'
        }
      },
      clickAndCollect: {
        icon: Coffee,
        label: "Click & Collect",
        href: "/click-collect",
        modalContent: {
          title: "Click & Collect",
          content: "Commander et retirer..."
        },
        modalStyle: {
          animation: 'slide-up',
          shape: 'rounded'
        }
      },
      payment: {
        icon: PaymentIcon,
        label: "Paiement",
        href: "/payment",
        modalContent: {
          title: "Options de Paiement",
          content: "Paiement en plusieurs fois..."
        },
        modalStyle: {
          animation: 'slide-up',
          shape: 'rounded'
        }
      },
      questionnaire: {
        icon: Clipboard,
        label: "Questionnaire",
        href: "/questionnaire",
        modalContent: {
          title: "Questionnaire Préalable",
          content: "Mieux vous connaître..."
        },
        modalStyle: {
          animation: 'slide-up',
          shape: 'rounded'
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