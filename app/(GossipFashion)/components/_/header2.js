import { 
    Home, Scissors, Users, Calendar, 
    Image, Star, Mail, Phone, MessageCircle, MapPin,
    ShoppingCart, CreditCard, Facebook, Instagram, Twitter,
    Calendar as CalendarIcon,
    Gift, Clock, FileText, Camera,
    Ticket, Heart, Share2, Bell,
    Clipboard, Coffee, Video,
    CreditCard as PaymentIcon,
    Compass
} from 'lucide-react';



export default {
    mainMenu: [
      { icon: Home, label: 'Home', href: '' },
      { icon: Scissors, label: 'Blog', href: 'blog' },
      { icon: Scissors, label: 'Panier', href: 'cart' },
      { icon: Calendar, label: 'Checkout', href: 'checkout' },
      { icon: Users, label: 'Contact', href: 'contact' },
      { icon: Image, label: 'Galerie', href: 'gallery' },
      { icon: Star, label: 'Produits', href: 'products' },
      { icon: Mail, label: 'Réservation', href: 'reservation' },
      { icon: Mail, label: 'Providers', href: 'serviceproviders' },
      { icon: Mail, label: 'Services', href: 'services' },
      { icon: Mail, label: 'Testimonials', href: 'testimonials' },
    ],
    actionButtons: {
    //   phoneNumber: "+33123456789",
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
        { 
          icon: Facebook, 
          label: "Facebook", 
          href: "https://facebook.com/example",
          modalContent: {
            title: "Facebook",
            content: "Suivez notre actualité sur Facebook..."
          },
          modalStyle: {
            animation: 'fade',
            shape: 'rounded'
          }
        },
        { 
          icon: Instagram, 
          label: "Instagram", 
          href: "https://instagram.com/example",
          modalContent: {
            title: "Instagram",
            content: "Découvrez nos stories Instagram..."
          },
          modalStyle: {
            animation: 'scale',
            shape: 'rounded'
          }
        },
        { 
          icon: Twitter, 
          label: "Twitter", 
          href: "https://twitter.com/example",
          modalContent: {
            title: "Twitter",
            content: "Suivez nos tweets..."
          },
          modalStyle: {
            animation: 'slide-up',
            shape: 'rounded'
          }
        }
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
    },
    circularMenu: {
      items: [
        { icon: Compass, label: 'Explorer', color: 'bg-emerald-500' },
        { icon: Scissors, label: 'Styles', color: 'bg-blue-500' },
        { icon: Clock, label: 'Horaires', color: 'bg-purple-500' },
        { icon: Gift, label: 'Offres', color: 'bg-pink-500' },
        { icon: Camera, label: 'Galerie', color: 'bg-yellow-500' },
        { icon: ShoppingCart, label: 'Panier', color: 'bg-violet-500' },
        { icon: Star, label: 'Services', color: 'bg-indigo-500' },
      ],
      animations: {
        container: {
          closed: {
            scale: 0,
            opacity: 0,
          },
          open: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              staggerChildren: 0.1,
            },
          },
        },
        item: {
          closed: { scale: 0, opacity: 0 },
          open: { scale: 1, opacity: 1 },
        }
      }
    },
    slideMenu: {
      items: [
        { 
          icon: Scissors, 
          label: 'Services', 
          color: 'bg-rose-500',
          href: '#services' 
        },
        { 
          icon: Calendar, 
          label: 'Réserver', 
          color: 'bg-violet-500',
          href: '#reserver' 
        },
        { 
          icon: Image, 
          label: 'Galerie', 
          color: 'bg-amber-500',
          href: '#galerie' 
        },
        { 
          icon: MessageCircle, 
          label: 'Avis', 
          color: 'bg-blue-500',
          href: '#avis' 
        }
      ],
      animations: {
        overlay: {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        },
        menu: {
          initial: { opacity: 0, x: "100%" },
          animate: { 
            opacity: 1, 
            x: 0,
            transition: {
              type: "spring",
              damping: 25
            }
          },
          exit: { opacity: 0, x: "100%" }
        },
        item: {
          initial: { opacity: 0, x: 50 },
          animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
              delay: index * 0.1
            }
          })
        }
      }
    },
    floatingMenu: {
      items: [
        { 
          icon: Scissors, 
          label: 'Services', 
          color: 'from-violet-600 to-indigo-600',
          href: '#services',
          delay: 0.1
        },
        { 
          icon: Calendar, 
          label: 'Réserver', 
          color: 'from-rose-600 to-pink-600',
          href: '#reserver',
          delay: 0.2
        },
        { 
          icon: Image, 
          label: 'Galerie', 
          color: 'from-amber-500 to-orange-600',
          href: '#galerie',
          delay: 0.3
        },
        { 
          icon: MessageCircle, 
          label: 'Avis', 
          color: 'from-emerald-500 to-teal-600',
          href: '#avis',
          delay: 0.4
        }
      ],
      animations: {
        container: {
          initial: { 
            opacity: 0,
            scale: 0.8,
            y: 20
          },
          animate: { 
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          },
          exit: { 
            opacity: 0,
            scale: 0.8,
            y: 20,
            transition: {
              duration: 0.2
            }
          }
        },
        stagger: {
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }
      }
    },
    perspective3DMenu: {
      items: [
        { 
          icon: Scissors, 
          label: 'Services', 
          color: 'from-purple-600 to-indigo-600',
          href: '#services',
          z: -20
        },
        { 
          icon: Calendar, 
          label: 'Réserver', 
          color: 'from-rose-600 to-fuchsia-600',
          href: '#reserver',
          z: -40
        },
        { 
          icon: Image, 
          label: 'Galerie', 
          color: 'from-amber-500 to-orange-600',
          href: '#galerie',
          z: -60
        },
        { 
          icon: MessageCircle, 
          label: 'Avis', 
          color: 'from-emerald-500 to-teal-600',
          href: '#avis',
          z: -80
        }
      ],
      animations: {
        container: {
          initial: { 
            opacity: 0,
            rotateX: 45,
            perspective: 1000
          },
          animate: { 
            opacity: 1,
            rotateX: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          },
          exit: { 
            opacity: 0,
            rotateX: 45,
            transition: {
              duration: 0.3
            }
          }
        }
      }
    }
  };