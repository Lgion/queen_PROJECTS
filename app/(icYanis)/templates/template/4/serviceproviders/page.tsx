import React from 'react';
import { Star, Calendar, MapPin, Phone } from 'lucide-react';
import Link from 'next/link'

const ServiceProviders: React.FC = () => {
  const providers = [
    {
      id: 1,
      name: 'Aminata Koné',
      specialty: 'Coiffeuse',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      description: 'Spécialiste des tresses et des coiffures protectrices',
      location: 'Cocody, Abidjan',
      phone: '+225 0123456789',
    },
    {
      id: 2,
      name: 'Kouadio Yao',
      specialty: 'Esthéticien',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      description: 'Expert en soins du visage et massages relaxants',
      location: 'Plateau, Abidjan',
      phone: '+225 0987654321',
    },
    {
      id: 3,
      name: 'Aya Touré',
      specialty: 'Manucure',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      description: 'Créatrice de nail art et spécialiste des ongles en gel',
      location: 'Marcory, Abidjan',
      phone: '+225 0567891234',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nos prestataires de services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map((provider) => (
          <div key={provider.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
            <img src={provider.image} alt={provider.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{provider.name}</h2>
              <p className="text-orange-600 font-medium mb-2">{provider.specialty}</p>
              <div className="flex items-center mb-2">
                <Star className="text-yellow-400 mr-1" size={16} />
                <span>{provider.rating}/5</span>
              </div>
              <p className="text-gray-600 mb-4">{provider.description}</p>
              <div className="flex items-center mb-2">
                <MapPin className="text-gray-400 mr-2" size={16} />
                <span className="text-sm">{provider.location}</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="text-gray-400 mr-2" size={16} />
                <span className="text-sm">{provider.phone}</span>
              </div>
              <Link
                href="/reservation"
                className="bg-orange-600 text-white py-2 px-4 rounded-full flex items-center justify-center w-full hover:bg-orange-700 transition duration-300"
              >
                <Calendar className="mr-2" size={16} />
                Réserver
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProviders;