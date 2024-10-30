import React from 'react';
import Modal from '../Modal';
import { MapPin, Clock } from 'lucide-react';

interface ClickAndCollectButtonProps {
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

const ClickAndCollectModal = () => (
  <div className="click-collect-modal">
    <div className="products-section">
      <h3>Produits disponibles</h3>
      <div className="products-grid">
        {[
          { 
            id: 1, 
            name: 'Shampoing Premium',
            price: '25€',
            image: '/product1.jpg',
            stock: 12,
            description: 'Shampoing professionnel pour cheveux colorés'
          },
          { 
            id: 2, 
            name: 'Masque Réparateur',
            price: '35€',
            image: '/product2.jpg',
            stock: 8,
            description: 'Soin intensif pour cheveux abîmés'
          },
          { 
            id: 3, 
            name: 'Huile Protectrice',
            price: '29€',
            image: '/product3.jpg',
            stock: 15,
            description: 'Protection thermique et brillance'
          }
        ].map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
              <p className="description">{product.description}</p>
              <p className="stock">En stock: {product.stock}</p>
            </div>
            <div className="product-actions">
              <input 
                type="number" 
                min="0" 
                max={product.stock} 
                placeholder="Qté" 
              />
              <button className="add-to-cart">
                Ajouter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="collection-info">
      <h3>Points de retraitttt</h3>
      <div className="pickup-points">
        {[
          {
            id: 1,
            name: 'Salon Principal',
            address: '123 rue du Commerce',
            hours: '9h-19h',
            availability: 'Sous 2h'
          },
          {
            id: 2,
            name: 'Point Relais Beauty',
            address: '45 avenue des Fleurs',
            hours: '10h-20h',
            availability: 'Sous 24h'
          }
        ].map((point) => (
          <div key={point.id} className="pickup-point">
            <div className="location-info">
              <MapPin size={18} />
              <div>
                <h4>{point.name}</h4>
                <p>{point.address}</p>
              </div>
            </div>
            <div className="time-info">
              <Clock size={18} />
              <div>
                <p>Horaires: {point.hours}</p>
                <p>Disponible: {point.availability}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="cart-summary">
      <h3>Votre commande</h3>
      <div className="selected-items">
        {/* Liste des produits sélectionnés */}
      </div>
      <button className="proceed-button">
        Valider la commande
      </button>
    </div>
  </div>
);

export const ClickAndCollectButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: ClickAndCollectButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('clickAndCollect')}
      className="click-collect-button"
      title="Click & Collect"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <ClickAndCollectModal />
    </Modal>
  </>
); 