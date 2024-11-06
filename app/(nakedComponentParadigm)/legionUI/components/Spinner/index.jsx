import React from 'react';

export default ({ props }) => {
  const { type = 'border', size, color } = props;

  const classes = `spinner-${type} ${size ? `spinner-${type}-${size}` : ''} ${color ? `text-${color}` : ''}`;

  return (
    <div className={classes} role="status">
      <span className="visually-hidden">Chargement...</span>
    </div>
  );
};
