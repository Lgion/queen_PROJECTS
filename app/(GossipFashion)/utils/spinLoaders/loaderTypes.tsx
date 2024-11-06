import React from 'react';
import './styles/base.scss';
import './styles/spinner1.scss';
import './styles/spinner2.scss';
import './styles/spinner3.scss';
import './styles/spinner4.scss';

export const Spinner1 = () => (
  <div className="spinner-type1">
    <div className="spinner">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </div>
  </div>
);

export const Spinner2 = () => (
  <div className="spinner-type2">
    <div className="spinner">
      <div className="spinner-inner"></div>
      <div className="spinner-outer"></div>
    </div>
  </div>
);

export const Spinner3 = () => (
  <div className="spinner-type3">
    <div className="spinner">
      <div className="spinner-circle" />
    </div>
  </div>
);

export const Spinner4 = () => (
  <div className="spinner-type4">
    <div className="spinner">
      <div className="dots">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
      <div className="ring"></div>
    </div>
  </div>
);

// Ajoutez autant de spinners que vous voulez 