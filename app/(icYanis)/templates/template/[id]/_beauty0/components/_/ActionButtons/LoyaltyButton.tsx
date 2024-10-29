import React from 'react';
import Modal from '../Modal';

interface LoyaltyButtonProps {
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

const LoyaltyModal = () => (
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
);

export const LoyaltyButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: LoyaltyButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('loyalty')}
      className="loyalty-button"
      title="Programme de fidélité"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <LoyaltyModal />
    </Modal>
  </>
); 