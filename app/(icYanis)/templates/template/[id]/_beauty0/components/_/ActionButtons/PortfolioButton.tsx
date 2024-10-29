import React from 'react';
import Modal from '../Modal';

interface PortfolioButtonProps {
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

const PortfolioModal = () => (
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
);

export const PortfolioButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: PortfolioButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('portfolio')}
      className="portfolio-button"
      title="Voir notre portfolio"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <PortfolioModal />
    </Modal>
  </>
); 