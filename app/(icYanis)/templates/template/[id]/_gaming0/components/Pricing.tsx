import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    title: "Jeu sur PC",
    price: "1200 FCFA",
    duration: "/ heure",
    features: [
      "Accès à tous les jeux PC",
      "Équipement gaming haut de gamme",
      "Casque audio professionnel"
    ]
  },
  {
    title: "Jeu sur console",
    price: "1800 FCFA",
    duration: "/ heure",
    features: [
      "Accès à toutes les consoles",
      "Manettes de dernière génération",
      "Écran 4K"
    ]
  },
  {
    title: "Pass week-end",
    price: "10 000 FCFA",
    duration: "accès illimité",
    features: [
      "Jeu illimité pendant le week-end",
      "Accès PC et consoles",
      "Boissons gratuites"
    ]
  },
  {
    title: "Abonnement mensuel",
    price: "30 000 FCFA",
    duration: "/ mois",
    features: [
      "Accès illimité pendant un mois",
      "Priorité de réservation",
      "Invitations aux événements exclusifs"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-backgroundd-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos Tarifs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-backgroundd rounded-lg p-6 shadow-lg flex flex-col">
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <div className="text-3xl font-bold mb-2 text-primary">{plan.price}</div>
              <p className="text-gray-400 mb-6">{plan.duration}</p>
              <ul className="mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="text-primary mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn btn-secondary w-full mt-auto">Choisir</button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Promotions spéciales</h3>
          <p className="text-lg mb-4">Réduction de 10% pour les groupes de 5 personnes ou plus!</p>
          <button className="btn btn-primary">Voir toutes les offres</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;