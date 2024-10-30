export type ModalAnimation = 'fade' | 'slide-up' | 'slide-down' | 'scale' | 'rotate';
export type ModalShape = 'default' | 'rounded' | 'full-width' | 'side-panel';

export interface ModalStyle {
  animation: ModalAnimation;
  shape: ModalShape;
} 