import React from 'react';
import { ModalButton } from './ModalButton';

interface ActionButtonsProps {
  data: {
    booking: any;
    cart: any;
    personalInfo: any;
    contactButtons: any[];
    socialMedia: any[];
    loyalty: any;
    portfolio: any;
    onlineConsult: any;
    giftCard: any;
    quote: any;
    availability: any;
    deals: any;
    referral: any;
    notifications: any;
    clickAndCollect: any;
    payment: any;
    questionnaire: any;
  };
}

export const ActionButtons = ({ data }: ActionButtonsProps) => {
    console.log(data);
    
  return (
    <div className="action-buttons">
        
        {Object.entries(data).map(([key, value]) => (
            <ModalButton key={key} data={value} />
        ))}
        
    </div>
  );
}; 