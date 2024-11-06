import React, { useState } from 'react';

export default ({ props }) => {
  const { children, content, placement = 'top' } = props;
  const [show, setShow] = useState(false);

  return (
    <span className="d-inline-block" tabIndex="0" 
          onMouseEnter={() => setShow(true)} 
          onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className={`tooltip bs-tooltip-${placement} show`} role="tooltip">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">{content}</div>
        </div>
      )}
    </span>
  );
};
