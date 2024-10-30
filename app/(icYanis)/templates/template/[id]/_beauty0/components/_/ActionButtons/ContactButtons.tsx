import React from 'react';
import type { ModalStyle } from '../../../types/modal';
import Modal from '../Modal';

interface ContactButtonProps {
  onModalOpen: (modalId: string) => void;
  data: [{
    icon: any;
    label: string;
    href: string;
    modalStyle?: ModalStyle;
    modalContent?: {
      title: string;
      content: string;
    };
  }];
}

const ContactModal = ({ isOpen, onClose, data }: {
  isOpen: boolean;
  onClose: () => void;
  data: ContactButtonProps['data'];
}) => {
    console.log(data);
    
  if (!data.modalContent) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={data.modalContent.title}
      style={data.modalStyle}
    >
      <div className="contact-modal-content">
        {data.modalContent.content}
      </div>
    </Modal>
  );
};

export const ContactButtons = ({ onModalOpen, data }: ContactButtonProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    onModalOpen('contact');
  };

  console.log(data);

  return data.map((item:any,i)=>{
    return <>
      <button
        onClick={handleModalOpen}
        title={`Contactez-nous via ${item.label}`}
        className="contact-button tooltip-bottom"
      >
        <item.icon size={18} />
      </button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={item}
      />
    </>
  })
}; 