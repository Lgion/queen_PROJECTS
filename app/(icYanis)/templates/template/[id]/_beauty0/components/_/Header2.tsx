"use client"

import React, { useState, useEffect } from 'react';
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
import './header2.scss';
import data from "./header2.js"
import {
  Logo,
  NotificationBar,
  NavMenus,
  ActionButtons,
  HamburgerButton,
  MobileMenu
} from './header2Components';
import { Rotate3DAnimation } from './Logo/animations';
import { ScissorsRotation, GravityParticles, Spirograph, ConcentricWaves, Kaleidoscope, MatrixRain } from './Logo/canvas';
import Modal from './Modal';
import "../../styles/modal.scss"

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModePreference.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModePreference.addEventListener('change', handler);
    return () => darkModePreference.removeEventListener('change', handler);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  

  const modalContents = {
    personalInfo: (
      <div className="personal-info-modal">
        <div className="profile-section">
          <h3>Informations personnelles</h3>
          <form>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" placeholder="Votre nom" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="votre@email.com" />
            </div>
            <div className="form-group">
              <label>Téléphone</label>
              <input type="tel" placeholder="+33 6 XX XX XX XX" />
            </div>
          </form>
        </div>

        <div className="preferences-section">
          <h3>Préférences</h3>
          <div className="preferences-list">
            <label className="checkbox-item">
              <input type="checkbox" />
              <span>Recevoir les newsletters</span>
            </label>
            <label className="checkbox-item">
              <input type="checkbox" />
              <span>Notifications SMS</span>
            </label>
          </div>
        </div>

        <div className="history-section">
          <h3>Historique des rendez-vous</h3>
          <div className="appointment-list">
            <div className="appointment-item">
              <span className="date">12/03/2024</span>
              <span className="service">Coupe + Brushing</span>
              <span className="status">Terminé</span>
            </div>
            {/* Plus d'items... */}
          </div>
        </div>
      </div>
    ),

    booking: (
      <div className="booking-modal">
        <div className="service-selection">
          <h3>Choisissez vos services</h3>
          <div className="service-list">
            <label className="service-item">
              <input type="checkbox" />
              <span>Coupe (45min)</span>
              <span className="price">45€</span>
            </label>
            {/* Plus de services... */}
          </div>
        </div>

        <div className="datetime-selection">
          <h3>Date et heure</h3>
          {/* Composant calendrier ici */}
        </div>

        <button className="confirm-booking">
          Confirmer la réservation
        </button>
      </div>
    ),

    cart: (
      <div className="cart-modal">
        <div className="cart-items">
          <div className="cart-item">
            <img src="/product1.jpg" alt="Produit 1" />
            <div className="item-details">
              <h4>Shampoing Premium</h4>
              <p>Quantité: 1</p>
              <p className="price">29€</p>
            </div>
            <button className="remove-item">×</button>
          </div>
        </div>

        <div className="cart-summary">
          <div className="subtotal">
            <span>Sous-total</span>
            <span>29€</span>
          </div>
          <button className="checkout-button">
            Procéder au paiement
          </button>
        </div>
      </div>
    ),

    loyalty: (
      <div className="loyalty-modal">
        <div className="points-section">
          <h3>Vos Points Fidélité</h3>
          <div className="points-display">
            <span className="points">520</span>
            <span className="label">points disponibles</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }}></div>
            <span>Encore 180 points pour le prochain palier</span>
          </div>
        </div>

        <div className="rewards-section">
          <h3>Récompenses Disponibles</h3>
          <div className="rewards-list">
            {[
              { points: 500, reward: "Réduction de 15€" },
              { points: 1000, reward: "Soin offert" },
              { points: 2000, reward: "Remise de 50€" }
            ].map((item, index) => (
              <div key={index} className="reward-item">
                <span>{item.points} points</span>
                <span>{item.reward}</span>
                <button className="claim-button">Utiliser</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    portfolio: (
      <div className="portfolio-modal">
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="gallery-item">
              <div className="before-after">
                <img src={`/before${item}.jpg`} alt="Avant" />
                <img src={`/after${item}.jpg`} alt="Après" />
              </div>
              <div className="item-details">
                <h4>Transformation {item}</h4>
                <p>Description de la prestation...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    onlineConsult: (
      <div className="online-consult-modal">
        <div className="consultation-options">
          <h3>Choisissez votre type de consultation</h3>
          <div className="options-grid">
            <button className="option-card">
              <Video size={24} />
              <h4>Vidéo</h4>
              <p>30 minutes - 35€</p>
            </button>
            <button className="option-card">
              <MessageCircle size={24} />
              <h4>Chat</h4>
              <p>20 minutes - 25€</p>
            </button>
          </div>
        </div>
        <div className="calendar-section">
          <h3>Sélectionnez une date</h3>
          {/* Intégrer un composant calendrier ici */}
        </div>
      </div>
    ),

    giftCard: (
      <div className="gift-card-modal">
        <div className="gift-card-options">
          <h3>Choisissez votre carte cadeau</h3>
          <div className="cards-grid">
            {[50, 75, 100, 150].map((amount) => (
              <div key={amount} className="gift-card">
                <h4>{amount}€</h4>
                <p>Valable 1 an</p>
                <button>Sélectionner</button>
              </div>
            ))}
          </div>
        </div>
        <div className="personalization">
          <h3>Personnalisation</h3>
          <form>
            <input type="text" placeholder="Nom du destinataire" />
            <textarea placeholder="Message personnel"></textarea>
          </form>
        </div>
      </div>
    ),

    quote: (
      <div className="quote-modal">
        <form className="quote-form">
          <div className="service-selection">
            <h3>Services souhaités</h3>
            <div className="services-checklist">
              {/* Liste des services avec checkboxes */}
            </div>
          </div>
          <div className="contact-details">
            <h3>Vos coordonnées</h3>
            <input type="text" placeholder="Nom complet" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Téléphone" />
            <textarea placeholder="Description de votre projet"></textarea>
          </div>
          <button type="submit">Demander un devis</button>
        </form>
      </div>
    ),

    availability: (
      <div className="availability-modal">
        <div className="calendar-view">
          {/* Intégrer un calendrier avec les disponibilités */}
        </div>
        <div className="time-slots">
          <h3>Créneaux disponibles</h3>
          <div className="slots-grid">
            {['9:00', '10:30', '14:00', '16:30'].map((time) => (
              <button key={time} className="time-slot">
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    ),

    deals: (
      <div className="deals-modal">
        <div className="current-deals">
          {[
            { title: "Offre du mois", discount: "20%", service: "Coloration" },
            { title: "Happy Hour", discount: "15%", service: "Entre 14h et 16h" },
            { title: "Pack Duo", description: "Venez à deux, -25% pour la deuxième personne" }
          ].map((deal, index) => (
            <div key={index} className="deal-card">
              <h4>{deal.title}</h4>
              <p>{deal.discount} sur {deal.service}</p>
              <button>Réserver</button>
            </div>
          ))}
        </div>
      </div>
    ),

    referral: (
      <div className="referral-modal">
        <div className="referral-info">
          <h3>Programme de Parrainage</h3>
          <p>Parrainez vos amis et gagnez des récompenses</p>
          <div className="rewards-info">
            <div>Pour vous : 15€ de réduction</div>
            <div>Pour votre filleul : -20% sur la première visite</div>
          </div>
        </div>
        <form className="referral-form">
          <input type="text" placeholder="Nom de votre ami(e)" />
          <input type="email" placeholder="Email de votre ami(e)" />
          <button type="submit">Envoyer l'invitation</button>
        </form>
      </div>
    ),

    notifications: (
      <div className="notifications-modal">
        <div className="notifications-settings">
          <h3>Préférences de notifications</h3>
          <div className="settings-list">
            {[
              "Rappels de rendez-vous",
              "Promotions",
              "Nouveaux services",
              "Points fidélité"
            ].map((setting) => (
              <label key={setting} className="setting-item">
                <input type="checkbox" />
                <span>{setting}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    ),

    clickAndCollect: (
      <div className="click-collect-modal">
        <div className="products-grid">
          {/* Liste des produits disponibles */}
        </div>
        <div className="collection-info">
          <h3>Points de retrait</h3>
          <div className="pickup-points">
            {/* Liste des points de retrait */}
          </div>
        </div>
      </div>
    ),

    payment: (
      <div className="payment-modal">
        <div className="payment-options">
          <h3>Options de paiement</h3>
          <div className="options-list">
            <button className="payment-option">
              <span>Paiement en 3x</span>
              <small>Sans frais à partir de 150€</small>
            </button>
            <button className="payment-option">
              <span>Paiement en 4x</span>
              <small>Sans frais à partir de 200€</small>
            </button>
          </div>
        </div>
      </div>
    ),

    questionnaire: (
      <div className="questionnaire-modal">
        <form className="questionnaire-form">
          <h3>Questionnaire préalable</h3>
          <div className="questions">
            {/* Liste des questions */}
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    )
  };

  return (
    <header className={`header2 ${isDarkMode ? 'dark' : 'light'}`}>
      <NotificationBar {...{hasNotification, setHasNotification}} />
      
      <section className="container">
          <Logo />
          <NavMenus data={data.mainMenu} />
          <ActionButtons data={data.actionButtons} onModalOpen={setActiveModal} />
          <HamburgerButton {...{toggleMenu, isMenuOpen}} />
      </section>

      <MobileMenu {...{
        isMenuOpen, 
        toggleMenu, 
        data: data.mainMenu,
        contactButtons: data.actionButtons.contactButtons
      }} />

      {Object.entries(modalContents).map(([key, content]) => (
        <Modal
          key={key}
          isOpen={activeModal === key}
          onClose={() => setActiveModal(null)}
          title={data.actionButtons[key as keyof typeof modalContents].modalContent.title}
        >
          {content}
        </Modal>
      ))}
    </header>
  );
};

export default Header2;