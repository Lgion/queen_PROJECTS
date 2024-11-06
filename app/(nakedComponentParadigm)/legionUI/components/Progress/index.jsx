import React from 'react';

export default ({ props }) => {
  const { value, max = 100, label, striped, animated } = props;

  const percentage = (value / max) * 100;
  const classes = `progress-bar ${striped ? 'progress-bar-striped' : ''} ${animated ? 'progress-bar-animated' : ''}`;

  return (
    <div className="progress">
      <div 
        className={classes}
        role="progressbar" 
        style={{width: `${percentage}%`}} 
        aria-valuenow={value} 
        aria-valuemin="0" 
        aria-valuemax={max}
      >
        {label && `${percentage}%`}
      </div>
    </div>
  );
};
