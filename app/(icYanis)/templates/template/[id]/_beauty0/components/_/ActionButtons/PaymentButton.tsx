import React from 'react';
import Modal from '../Modal';
import { CreditCard, Calendar, AlertCircle } from 'lucide-react';

interface PaymentButtonProps {
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

const PaymentModal = () => (
  <div className="payment-modal">
    <div className="payment-options">
      <h3>Options de paiement</h3>
      
      <div className="payment-methods">
        <div className="method-card">
          <div className="method-header">
            <CreditCard size={24} />
            <h4>Paiement en 3x</h4>
          </div>
          <div className="method-details">
            <p>Sans frais à partir de 150€</p>
            <div className="installments">
              {[1, 2, 3].map((month) => (
                <div key={month} className="installment">
                  <Calendar size={16} />
                  <span>Mois {month}: 50€</span>
                </div>
              ))}
            </div>
            <button className="select-method">Choisir</button>
          </div>
        </div>

        <div className="method-card">
          <div className="method-header">
            <CreditCard size={24} />
            <h4>Paiement en 4x</h4>
          </div>
          <div className="method-details">
            <p>Sans frais à partir de 200€</p>
            <div className="installments">
              {[1, 2, 3, 4].map((month) => (
                <div key={month} className="installment">
                  <Calendar size={16} />
                  <span>Mois {month}: 50€</span>
                </div>
              ))}
            </div>
            <button className="select-method">Choisir</button>
          </div>
        </div>
      </div>

      <div className="payment-info">
        <div className="info-box">
          <AlertCircle size={18} />
          <p>
            Le paiement en plusieurs fois est disponible uniquement pour les prestations
            et non pour les produits. Un justificatif pourra vous être demandé.
          </p>
        </div>
      </div>

      <div className="payment-form">
        <h3>Informations de paiement</h3>
        <form>
          <div className="form-group">
            <label>Nom sur la carte</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Numéro de carte</label>
            <input type="text" placeholder="**** **** **** ****" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Date d'expiration</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" placeholder="***" />
            </div>
          </div>
          <button type="submit" className="submit-payment">
            Valider le paiement
          </button>
        </form>
      </div>
    </div>
  </div>
);

export const PaymentButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: PaymentButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('payment')}
      className="payment-button"
      title="Options de paiement"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <PaymentModal />
    </Modal>
  </>
); 