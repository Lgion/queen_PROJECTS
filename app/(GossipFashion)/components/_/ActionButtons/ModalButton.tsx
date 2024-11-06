import React from 'react';
import type { ModalStyle } from '../../../utils/types/modal';
import Modal from '../../Modal';

// Interface de base pour les données d'un bouton
interface BaseButtonData {
  icon: any;
  label: string;
  href: string;
  modalStyle?: ModalStyle;
  modalContent?: {
    title: string;
    content: string;
  };
  itemCount?: number;
  [key: string]: any; // Pour d'autres propriétés spécifiques
}

interface ModalButtonProps {
  data: BaseButtonData | BaseButtonData[];
}

const GenericModal = ({ 
  isOpen, 
  onClose, 
  data 
}: {
  isOpen: boolean;
  onClose: () => void;
  data: BaseButtonData;
}) => {
  if (!data.modalContent) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={data.modalContent.title}
      style={data.modalStyle}
    >
      <div className={`${data.label.toLowerCase()}-modal-content`}>
        {data.modalContent.content}
      </div>
    </Modal>
  );
};

const SingleButton = ({ 
  data, 
  onClick 
}: {
  data: BaseButtonData;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    title={data.label}
    className={`${data.label.toLowerCase()}-button tooltip-bottom`}
  >
    <data.icon size={18} />


    {/* ON PEUT RAJOUTER ICI  */}
    {/* TOUS LES COMPORTEMENTS SPÉCIFIQUE */}
    {/* COMME EN L'OCCURENCE ICI AVEC LE PANIER */}
    {data.itemCount !== undefined && data.itemCount > 0 && (
      <span className="item-count">{data.itemCount}</span>
    )}


    
  </button>
);

export const ModalButton = ({ data }: ModalButtonProps) => {
    console.log(data);
  const [activeModal, setActiveModal] = React.useState<string | null>(null);

  // Gestion d'un seul bouton
  if (!Array.isArray(data)) {
    return (
      <>
        <SingleButton
          data={data}
          onClick={() => setActiveModal(data.label.toLowerCase())}
        />
        <GenericModal
          isOpen={activeModal === data.label.toLowerCase()}
          onClose={() => setActiveModal(null)}
          data={data}
        />
      </>
    );
  }

  // Gestion d'un groupe de boutons
  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.label}>
          <SingleButton
            data={item}
            onClick={() => setActiveModal(item.label.toLowerCase())}
          />
          <GenericModal
            isOpen={activeModal === item.label.toLowerCase()}
            onClose={() => setActiveModal(null)}
            data={item}
          />
        </React.Fragment>
      ))}
    </>
  );
}; 