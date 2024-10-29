import React from 'react';

interface CartButtonProps {
  onModalOpen: (modalId: string) => void;
  data: {
    icon: any;
    label: string;
    href: string;
    itemCount: number;
  };
}

export const CartButton = ({ onModalOpen, data }: CartButtonProps) => (
  <button 
    onClick={() => onModalOpen('cart')} 
    className="cart-button relative"
  >
    <data.icon size={18} />
    {data.itemCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        {data.itemCount}
      </span>
    )}
  </button>
); 