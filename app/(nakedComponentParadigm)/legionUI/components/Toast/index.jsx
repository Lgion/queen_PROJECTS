import React, { useState, useEffect } from 'react';

export default ({ props }) => {
  const { title, content, autohide = true, delay = 5000 } = props;
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (autohide) {
      const timer = setTimeout(() => setShow(false), delay);
      return () => clearTimeout(timer);
    }
  }, [autohide, delay]);

  if (!show) return null;

  return (
    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="me-auto">{title}</strong>
        <button type="button" className="btn-close" onClick={() => setShow(false)} aria-label="Close"></button>
      </div>
      <div className="toast-body">
        {content}
      </div>
    </div>
  );
};
