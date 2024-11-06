import React, { useState, useRef } from 'react';

export default ({ props }) => {
  const { children, title, content, placement = 'top' } = props;
  const [show, setShow] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => setShow(!show);

  return (
    <>
      <span ref={targetRef} onClick={togglePopover}>
        {children}
      </span>
      {show && (
        <div className={`popover bs-popover-${placement} show`} role="tooltip" style={{
          position: 'absolute',
          top: targetRef.current ? targetRef.current.offsetTop + (placement === 'bottom' ? targetRef.current.offsetHeight : 0) : 0,
          left: targetRef.current ? targetRef.current.offsetLeft : 0,
        }}>
          <div className="popover-arrow"></div>
          <h3 className="popover-header">{title}</h3>
          <div className="popover-body">{content}</div>
        </div>
      )}
    </>
  );
};
