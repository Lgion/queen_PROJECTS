import React from 'react';

interface ContactButtonsProps {
  data: Array<{
    icon: any;
    label: string;
    href: string;
  }>;
}

export const ContactButtons = ({ data }: ContactButtonsProps) => (
  <div className="contact-buttons flex space-x-2">
    {data.map((button, index) => {
      const Icon = button.icon;
      return (
        <a
          key={index}
          href={button.href}
          className="contact-button"
          title={button.label}
        >
          <Icon size={18} />
        </a>
      );
    })}
  </div>
); 