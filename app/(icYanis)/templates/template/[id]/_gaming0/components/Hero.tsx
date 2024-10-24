import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Gamers playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Vivez l'expérience ultime du gaming à Abidjan
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Plongez dans l'univers du jeu vidéo chez Cybergamer
        </p>
        <a href="#contact" className="btn btn-primary text-lg">
          Réservez votre session maintenant
        </a>
      </div>
    </section>
  );
};

export default Hero;