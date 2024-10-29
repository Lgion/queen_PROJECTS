import React from 'react';
import Modal from '../Modal';

interface GiftCardButtonProps {
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

const GiftCardModal = () => (
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
        <button type="submit" className="submit-button">
          Commander la carte cadeau
        </button>
      </form>
    </div>
  </div>
);

export const GiftCardButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: GiftCardButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('giftCard')}
      className="gift-card-button"
      title="Cartes cadeaux"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <GiftCardModal />
    </Modal>
  </>
); 