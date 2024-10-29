import React from 'react';
import { CalendarIcon } from 'lucide-react';

interface BookingButtonProps {
  onModalOpen: (modalId: string) => void;
  data: {
    icon: any;
    label: string;
    href: string;
  };
}

export const BookingButton = ({ onModalOpen, data }: BookingButtonProps) => (
  <button 
    onClick={() => onModalOpen('booking')}
    title="Cliquez pour prendre rendez-vous"
    className="booking-button tooltip-bottom"
  >
    <data.icon size={18} />
  </button>
); 