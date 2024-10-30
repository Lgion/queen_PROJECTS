import React from 'react';
import { CalendarIcon } from 'lucide-react';
import type { ModalStyle } from '../../../types/modal';
import Modal from '../Modal';

interface BookingButtonProps {
  onModalOpen: (modalId: string) => void;
  data: {
    icon: any;
    label: string;
    href: string;
    modalStyle?: ModalStyle;
    modalContent: {
      title: string;
      content: string;
    };
  };
}

const BookingModal = ({ isOpen, onClose, data }: { 
  isOpen: boolean; 
  onClose: () => void;
  data: BookingButtonProps['data'];
}) => {
    console.log(data);
    return <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={data.modalContent.title}
        style={data.modalStyle}
    >
        <div className="booking-modal-content">
            {data.modalContent.content}
        </div>
    </Modal>
};

export const BookingButton = ({ onModalOpen, data }: BookingButtonProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    onModalOpen('booking');
  };

  return (
    <>
      <button 
        onClick={handleModalOpen}
        title="Cliquez pour prendre rendez-vous"
        className="booking-button tooltip-bottom"
      >
        <data.icon size={18} />
      </button>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={data}
      />
    </>
  );
};