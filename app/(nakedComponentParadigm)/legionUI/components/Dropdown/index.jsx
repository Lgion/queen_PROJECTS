import React from 'react';

export default ({ props }) => {
  const { buttonText, items } = props;

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {buttonText}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {items.map((item, index) => (
          <li key={index}><a className="dropdown-item" href={item.href}>{item.text}</a></li>
        ))}
      </ul>
    </div>
  );
};
