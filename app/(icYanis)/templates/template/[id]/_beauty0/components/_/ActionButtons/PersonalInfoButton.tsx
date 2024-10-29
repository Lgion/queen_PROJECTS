import React from 'react';
import Modal from '../Modal';

interface PersonalInfoButtonProps {
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

const PersonalInfoModal = () => (
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
        <div className="form-group">
          <label>Adresse</label>
          <input type="text" placeholder="Votre adresse" />
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
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>Rappels de rendez-vous</span>
        </label>
      </div>
    </div>

    <div className="history-section">
      <h3>Historique des rendez-vous</h3>
      <div className="appointment-list">
        {[
          { date: '12/03/2024', service: 'Coupe + Brushing', status: 'Terminé' },
          { date: '15/02/2024', service: 'Coloration', status: 'Terminé' },
          { date: '01/01/2024', service: 'Soin', status: 'Terminé' }
        ].map((appointment, index) => (
          <div key={index} className="appointment-item">
            <span className="date">{appointment.date}</span>
            <span className="service">{appointment.service}</span>
            <span className="status">{appointment.status}</span>
          </div>
        ))}
      </div>
    </div>

    <button type="submit" className="save-changes">
      Enregistrer les modifications
    </button>
  </div>
);

export const PersonalInfoButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: PersonalInfoButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('personalInfo')}
      className="personal-info-button"
      title="Mes informations personnelles"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <PersonalInfoModal />
    </Modal>
  </>
); 