import React from 'react';
import { Calendar } from 'lucide-react';

const events = [
  {
    title: "Championnat eSport local",
    date: "15 juin 2023",
    description: "Participez à notre tournoi local et affrontez les meilleurs joueurs d'Abidjan!"
  },
  {
    title: "Soirée cosplay",
    date: "30 juin 2023",
    description: "Venez déguisé en votre personnage de jeu préféré et gagnez des prix!"
  },
  {
    title: "Atelier de développement de jeux",
    date: "10 juillet 2023",
    description: "Apprenez les bases du développement de jeux vidéo avec nos experts."
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-16 bg-backgroundd">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Événements à Venir</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-backgroundd-light rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Calendar className="text-primary mr-2" />
                <span className="text-lg font-semibold">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-4">{event.description}</p>
              <button className="btn btn-primary">En savoir plus</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;