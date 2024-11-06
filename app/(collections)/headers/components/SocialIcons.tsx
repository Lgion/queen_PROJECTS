import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function SocialIcons() {
  const socialLinks = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-500 hover:text-rose-500 transition-colors"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
