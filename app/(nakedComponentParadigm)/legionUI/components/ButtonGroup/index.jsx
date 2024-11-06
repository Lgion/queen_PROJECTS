import React from 'react';
import {WrapperRaw} from '../../wrappers'; // Assurez-vous que le chemin est correct

const _data = {
  buttons: [
    { text: 'Button 1', type: 'primary', onClick: () => console.log('Button 1 clicked') },
    { text: 'Button 2', type: 'secondary', onClick: () => console.log('Button 2 clicked') },
  ],
  vertical: false,
  size: 'md',
};

export default ({ _, children, $ = _data }) => {
  const { buttons, vertical, size } = $ || _ || children;

  const groupClasses = `btn-group${vertical ? '-vertical' : ''} ${size ? `btn-group-${size}` : ''}`;

  return (
    <WrapperRaw>
      <div className={groupClasses} role="group" aria-label="Button group">
        {buttons.map((button, index) => (
          <button 
            key={index} 
            type="button" 
            className={`btn btn-${button.type || 'primary'}`}
            onClick={button.onClick}
          >
            {button.text}
          </button>
        ))}
      </div>
    </WrapperRaw>
  );
};
