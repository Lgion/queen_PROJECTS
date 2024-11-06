import React from 'react';

export default ({ props }) => {
  const { items, numbered } = props;

  return (
    <ul className={`list-group ${numbered ? 'list-group-numbered' : ''}`}>
      {items.map((item, index) => (
        <li key={index} className={`list-group-item ${item.active ? 'active' : ''}`}>
          {item.content}
        </li>
      ))}
    </ul>
  );
};
