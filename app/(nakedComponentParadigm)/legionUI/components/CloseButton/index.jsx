import React from 'react';
import {WrapperRaw} from '../../wrappers'; // Assurez-vous que le chemin est correct

const _data = {
  white: false,
  onClick: () => console.log('Close button clicked'),
};

export default ({ _, children, $ = _data }) => {
  const { white, onClick } = $ || _ || children;

  return (
    <WrapperRaw>
      <button 
        type="button" 
        className={`btn-close ${white ? 'btn-close-white' : ''}`} 
        aria-label="Close"
        onClick={onClick}
      ></button>
    </WrapperRaw>
  );
};
