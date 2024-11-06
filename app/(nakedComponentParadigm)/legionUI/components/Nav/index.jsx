import React from 'react';

export default ({ props }) => {
  const { items, pills } = props;

  return (
    <ul className={`nav ${pills ? 'nav-pills' : 'nav-tabs'}`}>
      {items.map((item, index) => (
        <li key={index} className="nav-item">
          <a className={`nav-link ${item.active ? 'active' : ''}`} href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};
