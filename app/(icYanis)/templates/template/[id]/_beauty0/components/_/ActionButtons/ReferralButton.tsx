import React from 'react';
import Modal from '../Modal';

interface ReferralButtonProps {
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

const ReferralModal = () => (
  <div className="referral-modal">
    <div className="referral-info">
      <h3>Programme de Parrainage</h3>
      <div className="rewards-overview">
        <div className="reward-card sponsor">
          <h4>Pour vous (le parrain)</h4>
          <div className="reward-amount">15€</div>
          <p>de réduction sur votre prochaine visite</p>
          <small>Applicable dès la première visite de votre filleul</small>
        </div>
        <div className="reward-card referred">
          <h4>Pour votre filleul</h4>
          <div className="reward-amount">-20%</div>
          <p>sur la première visite</p>
          <small>Valable sur tous les services</small>
        </div>
      </div>

      <div className="referral-stats">
        <div className="stat-item">
          <span className="stat-label">Parrainages actifs</span>
          <span className="stat-value">3</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Réductions gagnées</span>
          <span className="stat-value">45€</span>
        </div>
      </div>
    </div>

    <form className="referral-form">
      <h3>Inviter un ami</h3>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Nom de votre ami(e)" 
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="email" 
          placeholder="Email de votre ami(e)" 
          required 
        />
      </div>
      <div className="form-group">
        <textarea 
          placeholder="Message personnel (optionnel)"
          rows={3}
        ></textarea>
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-referral">
          Envoyer l'invitation
        </button>
      </div>
    </form>

    <div className="referral-history">
      <h3>Historique des parrainages</h3>
      <div className="history-list">
        {[
          { name: 'Marie L.', status: 'En attente', date: '15/03/2024' },
          { name: 'Pierre D.', status: 'Complété', date: '10/03/2024' },
          { name: 'Sophie M.', status: 'Complété', date: '05/03/2024' }
        ].map((referral, index) => (
          <div key={index} className="history-item">
            <span className="name">{referral.name}</span>
            <span className={`status ${referral.status.toLowerCase()}`}>
              {referral.status}
            </span>
            <span className="date">{referral.date}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ReferralButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: ReferralButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('referral')}
      className="referral-button"
      title="Programme de parrainage"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <ReferralModal />
    </Modal>
  </>
); 