import React from 'react';

interface SocialMediaButtonsProps {
  data: Array<{
    icon: any;
    label: string;
    href: string;
  }>;
}

export const SocialMediaButtons = ({ data }: SocialMediaButtonsProps) => (
  <div className="social-media-buttons flex space-x-2">
    {data.map((social, index) => (
      <a 
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button hover:text-rose-600 transition-colors"
        title={social.label}
      >
        <social.icon size={18} />
      </a>
    ))}
  </div>
); 