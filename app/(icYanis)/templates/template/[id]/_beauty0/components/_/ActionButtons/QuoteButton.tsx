import React from 'react';
import Modal from '../Modal';

interface QuoteButtonProps {
  onModalOpen: (modalId: string) => void;
  data: {
    icon: any;
    label: string;
    href: string;
    modalContent: {
      title: string;
      content: string;
    };
  };
  isModalOpen: boolean;
  onModalClose: () => void;
}

const QuoteModal = () => (
  <div className="quote-modal">
    <form className="quote-form">
      <div className="service-selection">
        <h3>Services souhaités</h3>
        <div className="services-checklist">
          {[
            { id: 'service1', label: 'Coupe', price: '45€' },
            { id: 'service2', label: 'Coloration', price: '65€' },
            { id: 'service3', label: 'Brushing', price: '35€' },
            { id: 'service4', label: 'Soin', price: '40€' }
          ].map((service) => (
            <label key={service.id} className="service-item">
              <input type="checkbox" id={service.id} />
              <span>{service.label}</span>
              <span className="price">{service.price}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="contact-details">
        <h3>Vos coordonnées</h3>
        <div className="form-group">
          <input type="text" placeholder="Nom complet" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Téléphone" required />
        </div>
        <div className="form-group">
          <textarea 
            placeholder="Description de votre projet (optionnel)"
            rows={4}
          ></textarea>
        </div>
      </div>

      <button type="submit" className="submit-quote">
        Demander un devis
      </button>
    </form>
  </div>
);

export const QuoteButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: QuoteButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('quote')}
      className="quote-button"
      title="Demander un devis"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <QuoteModal />
    </Modal>
  </>
); 