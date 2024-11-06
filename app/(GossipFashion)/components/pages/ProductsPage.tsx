import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  // Placeholder data for categories and products
  const categories = ['Coiffure', 'Soins de beauté', 'Manucure', 'Maquillage'];
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Produit ${i + 1}`,
    category: categories[i % categories.length],
    price: Math.floor(Math.random() * 100) + 10,
    image: `https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`
  }));

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // Default to no sorting (popularity)
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nos Produits</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Filter className="mr-2" />
              Filtres
            </h2>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Catégories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    className={`w-full text-left ${selectedCategory === 'all' ? 'text-orange-600 font-semibold' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    Toutes les catégories
                  </button>
                </li>
                {categories.map(category => (
                  <li key={category}>
                    <button
                      className={`w-full text-left ${selectedCategory === category ? 'text-orange-600 font-semibold' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Trier par</h3>
              <select
                className="w-full p-2 border rounded"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">Popularité</option>
                <option value="price-low">Prix croissant</option>
                <option value="price-high">Prix décroissant</option>
              </select>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <p className="text-orange-600 font-bold mb-4">{product.price} €</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="block w-full text-center bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition duration-300"
                  >
                    Voir détails
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;