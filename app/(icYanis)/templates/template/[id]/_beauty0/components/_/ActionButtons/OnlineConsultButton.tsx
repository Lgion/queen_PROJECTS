import React from 'react';
import Modal from '../Modal';
import { Video, MessageCircle } from 'lucide-react';

interface OnlineConsultButtonProps {
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

const OnlineConsultModal = () => (
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
);

export const OnlineConsultButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: OnlineConsultButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('onlineConsult')}
      className="online-consult-button"
      title="Consultation en ligne"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <OnlineConsultModal />
    </Modal>
  </>
); 