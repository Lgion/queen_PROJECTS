import React from 'react';
import Link from 'next/link'
import { Scissors, Clock, DollarSign } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { id: 1, name: "Tresses", duration: "2-3h", price: "15000-25000 FCFA", image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Tissage", duration: "1-2h", price: "10000-20000 FCFA", image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Coupe", duration: "30min-1h", price: "5000-10000 FCFA", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Coloration", duration: "1-2h", price: "15000-30000 FCFA", image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Mes Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <div className="flex items-center mb-2">
                <Clock className="text-orange-600 mr-2" size={16} />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center mb-4">
                <DollarSign className="text-orange-600 mr-2" size={16} />
                <span>{service.price}</span>
              </div>
              <Link
                href="/reservation"
                className="bg-orange-600 text-white py-2 px-4 rounded-full flex items-center justify-center hover:bg-orange-700 transition duration-300"
              >
                <Scissors className="mr-2" size={16} />
                Réserver
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;