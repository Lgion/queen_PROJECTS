import React from 'react';
import Modal from '../Modal';

interface DealsButtonProps {
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

const DealsModal = () => (
  <div className="deals-modal">
    <div className="current-deals">
      {[
        { 
          title: "Offre du mois", 
          discount: "20%", 
          service: "Coloration",
          validUntil: "31/03/2024",
          conditions: "Valable du lundi au jeudi"
        },
        { 
          title: "Happy Hour", 
          discount: "15%", 
          service: "Entre 14h et 16h",
          validUntil: "Permanent",
          conditions: "Sur tous les services"
        },
        { 
          title: "Pack Duo", 
          description: "Venez à deux, -25% pour la deuxième personne",
          validUntil: "Permanent",
          conditions: "Même prestation uniquement"
        }
      ].map((deal, index) => (
        <div key={index} className="deal-card">
          <div className="deal-header">
            <h4>{deal.title}</h4>
            {deal.discount && (
              <span className="discount-badge">-{deal.discount}</span>
            )}
          </div>
          <div className="deal-content">
            <p className="service">{deal.service || deal.description}</p>
            <p className="validity">Valable jusqu'au : {deal.validUntil}</p>
            <p className="conditions">{deal.conditions}</p>
          </div>
          <div className="deal-actions">
            <button className="book-deal">Réserver</button>
            <button className="share-deal">Partager</button>
          </div>
        </div>
      ))}
    </div>

    <div className="upcoming-deals">
      <h3>Prochaines offres</h3>
      <div className="upcoming-list">
        {[
          { 
            title: "Soldes d'été", 
            startDate: "01/06/2024",
            preview: "Jusqu'à -30% sur une sélection de services"
          },
          { 
            title: "Black Friday", 
            startDate: "29/11/2024",
            preview: "Offres exceptionnelles pendant 24h"
          }
        ].map((upcoming, index) => (
          <div key={index} className="upcoming-deal">
            <span className="date">{upcoming.startDate}</span>
            <div className="preview">
              <h5>{upcoming.title}</h5>
              <p>{upcoming.preview}</p>
            </div>
            <button className="remind-me">Me le rappeler</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const DealsButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: DealsButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('deals')}
      className="deals-button"
      title="Voir les promotions"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <DealsModal />
    </Modal>
  </>
); 