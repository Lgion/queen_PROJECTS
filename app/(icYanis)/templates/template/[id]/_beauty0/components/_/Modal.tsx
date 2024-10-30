import React from 'react';
import { X } from 'lucide-react';
import type { ModalStyle, ModalAnimation, ModalShape } from '../../types/modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  style?: ModalStyle;
}

export const Modal = ({ isOpen, onClose, title, children, style = { animation: 'fade', shape: 'default' } }: ModalProps) => {
  if (!isOpen) return null;

  const getAnimationClass = (animation: ModalAnimation) => {
    const animations = {
      'fade': 'animate-fade',
      'slide-up': 'animate-slide-up',
      'slide-down': 'animate-slide-down',
      'scale': 'animate-scale',
      'rotate': 'animate-rotate'
    } as const;
    return animations[animation];
  };

  const getShapeClass = (shape: ModalShape) => {
    const shapes = {
      'default': 'modal-default',
      'rounded': 'modal-rounded',
      'full-width': 'modal-full-width',
      'side-panel': 'modal-side-panel'
    } as const;
    return shapes[shape];
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-content ${getAnimationClass(style.animation)} ${getShapeClass(style.shape)}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 