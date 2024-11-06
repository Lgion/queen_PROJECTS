import React from 'react';
import {WrapperRaw} from '../../wrappers'; // Assurez-vous que le chemin est correct

const _data = {
  items: [
    {
      imageUrl: 'https://via.placeholder.com/800x400',
      caption: 'Premier élément',
      description: 'Description du premier élément',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x400',
      caption: 'Deuxième élément',
      description: 'Description du deuxième élément',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x400',
      caption: 'Troisième élément',
      description: 'Description du troisième élément',
    },
  ],
};

export default ({ _, children, $ = _data }) => {
  const { items } = $ || _ || children;

  return (
    <WrapperRaw>
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={item.imageUrl} className="d-block w-100" alt={item.caption} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.caption}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Précédent</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Suivant</span>
        </a>
      </div>
    </WrapperRaw>
  );
};
