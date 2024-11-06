import React from 'react';

const games = [
  {
    title: "Assassin's Creed Valhalla",
    description: "Aventure historique",
    image: "https://images.unsplash.com/photo-1616565441778-e8f8d8e7d1f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Rocket League",
    description: "Football avec des voitures",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Dota 2",
    description: "MOBA compétitif",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Gran Turismo 7",
    description: "Simulation de course",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Just Dance 2023",
    description: "Jeu de danse interactif",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const Games: React.FC = () => {
  return (
    <section id="games" className="py-16 bg-backgroundd-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Jeux Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-backgroundd rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <button className="btn btn-secondary w-full">Plus d'infos</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;