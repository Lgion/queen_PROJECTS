import React, { useState } from 'react';
import {WrapperRaw} from '../../wrappers'; // Assurez-vous que le chemin est correct

const _data = {
  id: 'collapseExample',
  buttonText: 'Afficher le contenu',
  content: 'Ceci est le contenu qui sera affiché ou masqué.',
};

export default ({ _, children, $ = _data }) => {
  const { id, buttonText, content } = $ || _ || children;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <WrapperRaw>
      <button 
        className="btn btn-primary" 
        type="button" 
        onClick={toggleCollapse}
        aria-expanded={isOpen} 
        aria-controls={id}
      >
        {buttonText}
      </button>
      <div className={`collapse ${isOpen ? 'show' : ''}`} id={id}>
        <div className="card card-body">
          {content}
        </div>
      </div>
    </WrapperRaw>
  );
};
