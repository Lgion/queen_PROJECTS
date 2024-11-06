import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-backgroundd">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nous Contacter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Nom</label>
                <input type="text" id="name" className="w-full p-2 rounded bg-backgroundd-light text-white" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 rounded bg-backgroundd-light text-white" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">Sujet</label>
                <input type="text" id="subject" className="w-full p-2 rounded bg-backgroundd-light text-white" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full p-2 rounded bg-backgroundd-light text-white" required></textarea>
              </div>
              <button type="submit" className="btn btn-primaryy w-full">Envoyer</button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Informations de contact</h3>
              <div className="flex items-center mb-2">
                <MapPin className="text-primaryy mr-2" size={20} />
                <span>456 Rue du Virtuel, Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="text-primaryy mr-2" size={20} />
                <span>+225 09 87 65 43 21</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-primaryy mr-2" size={20} />
                <span>support@cybergamer.ci</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Carte</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4379460554984!2d-4.0083928!3d5.3444085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb8dd8b96585%3A0x6de23b04a0962b2f!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sen!2sus!4v1647887031520!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;