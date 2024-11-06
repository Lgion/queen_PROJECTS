import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Jean K.",
    comment: "Une ambiance géniale et des équipements au top !",
    rating: 5
  },
  {
    name: "Amina S.",
    comment: "Le meilleur endroit pour se retrouver entre amis et jouer.",
    rating: 5
  },
  {
    name: "Marc L.",
    comment: "Les événements eSport sont vraiment bien organisés. J'adore !",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-backgroundd-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-backgroundd rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;