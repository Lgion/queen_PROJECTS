import React from 'react';
import Modal from '../Modal';

interface AvailabilityButtonProps {
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

const AvailabilityModal = () => (
  <div className="availability-modal">
    <div className="calendar-view">
      <h3>Calendrier des disponibilités</h3>
      <div className="calendar-grid">
        {/* Ici, vous pourriez intégrer un composant calendrier */}
        <div className="calendar-placeholder">
          Calendrier à intégrer
        </div>
      </div>
    </div>
    
    <div className="time-slots">
      <h3>Créneaux disponibles</h3>
      <div className="slots-grid">
        {[
          { time: '9:00', duration: '45min', status: 'available' },
          { time: '10:30', duration: '30min', status: 'available' },
          { time: '14:00', duration: '60min', status: 'available' },
          { time: '16:30', duration: '45min', status: 'available' }
        ].map((slot, index) => (
          <button 
            key={index} 
            className={`time-slot ${slot.status}`}
          >
            <span className="time">{slot.time}</span>
            <span className="duration">{slot.duration}</span>
          </button>
        ))}
      </div>
    </div>

    <div className="availability-filters">
      <h3>Filtres</h3>
      <div className="filter-options">
        <select className="service-select">
          <option value="">Tous les services</option>
          <option value="coupe">Coupe</option>
          <option value="coloration">Coloration</option>
          <option value="coiffage">Coiffage</option>
        </select>
        <select className="staff-select">
          <option value="">Tous les coiffeurs</option>
          <option value="sarah">Sarah</option>
          <option value="jean">Jean</option>
          <option value="marie">Marie</option>
        </select>
      </div>
    </div>
  </div>
);

export const AvailabilityButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: AvailabilityButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('availability')}
      className="availability-button"
      title="Voir les disponibilités"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <AvailabilityModal />
    </Modal>
  </>
); 