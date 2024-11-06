import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Placeholder product data
  const product = {
    id,
    name: `Produit ${id}`,
    description: "Description détaillée du produit. Ce produit est parfait pour prendre soin de votre peau et vous faire sentir belle et confiante.",
    price: 39.99,
    rating: 4.5,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img src={product.images[0]} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {product.images.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`${product.name} ${index + 2}`} className="w-full h-auto rounded-lg shadow-md" />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-gray-600">{product.rating} ({product.reviews} avis)</span>
          </div>
          <p className="text-2xl font-bold text-orange-600 mb-4">{product.price} €</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="flex items-center justify-center w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300">
            <ShoppingCart className="mr-2" />
            Ajouter au panier
          </button>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Avis des clients</h2>
        {/* Placeholder for customer reviews */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < 5 ? "currentColor" : "none"} size={16} />
              ))}
            </div>
            <span className="font-semibold">Excellent produit !</span>
          </div>
          <p className="text-gray-700 mb-2">Ce produit est incroyable ! Il a vraiment amélioré l'apparence de ma peau. Je le recommande vivement.</p>
          <p className="text-sm text-gray-500">Par Marie L. le 15 mars 2024</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Produits similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Placeholder for similar products */}
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={`https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`} alt={`Produit similaire ${product}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Produit similaire {product}</h3>
                <p className="text-orange-600 font-bold">39.99 €</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;