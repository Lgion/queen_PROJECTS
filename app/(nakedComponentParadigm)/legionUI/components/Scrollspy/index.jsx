import React, { useEffect, useState } from 'react';

export default ({ props }) => {
  const { items, offset = 10 } = props;
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (let item of items) {
        const element = document.getElementById(item.target.slice(1));
        if (element && element.offsetTop - offset <= scrollPosition) {
          setActiveId(item.target);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, offset]);

  return (
    <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
      <ul className="nav nav-pills">
        {items.map((item, index) => (
          <li className="nav-item" key={index}>
            <a className={`nav-link ${item.target === activeId ? 'active' : ''}`} href={item.target}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
