import React from 'react';
import Modal from '../Modal';

interface NotificationsButtonProps {
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

const NotificationsModal = () => (
  <div className="notifications-modal">
    <div className="notifications-settings">
      <h3>Préférences de notifications</h3>
      <div className="settings-list">
        {[
          { id: 'appointments', label: 'Rappels de rendez-vous', description: 'SMS et email 24h avant' },
          { id: 'promos', label: 'Promotions', description: 'Offres spéciales et réductions' },
          { id: 'news', label: 'Nouveaux services', description: 'Tenez-vous informé des nouveautés' },
          { id: 'points', label: 'Points fidélité', description: 'Suivi de vos points et récompenses' },
          { id: 'events', label: 'Événements', description: 'Soirées spéciales et animations' }
        ].map((setting) => (
          <div key={setting.id} className="setting-item">
            <div className="setting-header">
              <label className="setting-label">
                <input type="checkbox" id={setting.id} />
                <span>{setting.label}</span>
              </label>
            </div>
            <p className="setting-description">{setting.description}</p>
            <div className="channel-options">
              <label>
                <input type="checkbox" name={`${setting.id}-email`} />
                <span>Email</span>
              </label>
              <label>
                <input type="checkbox" name={`${setting.id}-sms`} />
                <span>SMS</span>
              </label>
              <label>
                <input type="checkbox" name={`${setting.id}-push`} />
                <span>Push</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="notification-history">
      <h3>Historique des notifications</h3>
      <div className="history-list">
        {[
          { 
            type: 'appointment',
            message: 'Rappel: Rendez-vous demain à 14h',
            date: '15/03/2024',
            status: 'unread'
          },
          { 
            type: 'promo',
            message: 'Nouvelle offre: -20% sur les colorations',
            date: '14/03/2024',
            status: 'read'
          },
          { 
            type: 'points',
            message: 'Félicitations! Vous avez gagné 50 points',
            date: '13/03/2024',
            status: 'read'
          }
        ].map((notification, index) => (
          <div 
            key={index} 
            className={`notification-item ${notification.status} ${notification.type}`}
          >
            <span className="message">{notification.message}</span>
            <span className="date">{notification.date}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="notification-actions">
      <button className="mark-all-read">
        Tout marquer comme lu
      </button>
      <button className="clear-all">
        Effacer l'historique
      </button>
    </div>
  </div>
);

export const NotificationsButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: NotificationsButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('notifications')}
      className="notifications-button"
      title="Gérer les notifications"
    >
      <data.icon size={18} />
      <span className="notification-badge">3</span>
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <NotificationsModal />
    </Modal>
  </>
); 