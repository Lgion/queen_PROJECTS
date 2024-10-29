import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { generateScssSelector } from '@/lib/utils';

const HomePage: React.FC = () => {
  const featuredProducts = [
    { id: 1, name: "Crème hydratante", price: 29.99, rating: 4.5, image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Sérum anti-âge", price: 49.99, rating: 4.8, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Masque capillaire", price: 19.99, rating: 4.2, image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  ];

  useEffect(()=>{
    alert('ok')
    const elt = document.getElementById("#okkk")
    let tmp=""
    if(elt)tmp = generateScssSelector(elt)
    console.log(tmp);
      
  }, [])
  

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="relative h-[70vh] rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Beauté d'Abidjan" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Beauté d'Abidjan</h1>
              <p className="text-xl text-white mb-8">Découvrez notre collection de produits de beauté et bien-être</p>
              <Link to="/products" className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition duration-300 inline-flex items-center">
                Voir les produits
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Produits phares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-orange-600">{product.price} €</span>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" />
                    <span className="ml-1">{product.rating}</span>
                  </div>
                </div>
                <Link to={`/product/${product.id}`} className="block w-full text-center bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition duration-300">
                  Voir détails
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((testimonial) => (
            <div key={testimonial} className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
              <p className="text-gray-600 mb-4 italic">"Les produits de Beauté d'Abidjan ont complètement transformé ma routine de soins. Ma peau n'a jamais été aussi éclatante !"</p>
              <div className="flex items-center">
                <img src={`https://randomuser.me/api/portraits/women/${testimonial + 20}.jpg`} alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">Sarah K.</p>
                  <p className="text-sm text-gray-500">Cliente fidèle</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Derniers articles du blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <div key={post} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={`https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`} alt={`Article ${post}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Astuces beauté pour l'été</h3>
                <p className="text-gray-600 mb-4">Découvrez nos conseils pour garder une peau éclatante pendant la saison chaude...</p>
                <Link to={`/blog/${post}`} className="text-orange-600 hover:underline inline-flex items-center">
                  Lire la suite
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;