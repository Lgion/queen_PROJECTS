import React from 'react';

export default ({ props }) => {
  const { id, title, content, placement = 'start' } = props;

  return (
    <div className={`offcanvas offcanvas-${placement}`} tabIndex="-1" id={id} aria-labelledby={`${id}Label`}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id={`${id}Label`}>{title}</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {content}
      </div>
    </div>
  );
};
