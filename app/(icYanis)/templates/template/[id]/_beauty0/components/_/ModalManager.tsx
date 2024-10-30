import React from 'react';
import Modal from './Modal';

interface ModalManagerProps {
  isOpen: boolean;
  modalId: string;
  onClose: () => void;
  actionButtons: any; // Typez ceci selon votre structure
}

const ModalManager = ({ isOpen, modalId, onClose, actionButtons }: ModalManagerProps) => {
  const modalData = actionButtons[modalId];

  if (!modalData) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={modalData.modalContent.title}
      style={modalData.modalStyle}
    >
      {modalData.modalContent.content}
    </Modal>
  );
};

export default ModalManager; 