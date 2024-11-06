import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Salle de jeu Cybergamer"
  },
  {
    src: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Équipement gaming"
  },
  {
    src: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Événement eSport"
  },
  {
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Joueurs en action"
  }
];

const Gallery: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section className="py-16 bg-backgroundd">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Galerie Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="cursor-pointer" onClick={() => openLightbox(image.src)}>
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white">
            <X size={32} />
          </button>
          <img src={lightboxImage} alt="Lightbox" className="max-w-full max-h-full" />
        </div>
      )}
    </section>
  );
};

export default Gallery;