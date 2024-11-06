import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", alt: "Coiffure tresses" },
    { id: 2, src: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", alt: "Coiffure tissage" },
    { id: 3, src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", alt: "Coupe courte" },
    { id: 4, src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", alt: "Coloration" },
    { id: 5, src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", alt: "Coiffure mariage" },
    { id: 6, src: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", alt: "Coiffure enfant" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Galerie de mes réalisations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative overflow-hidden rounded-lg shadow-md">
            <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition duration-300 transform hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-center">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;