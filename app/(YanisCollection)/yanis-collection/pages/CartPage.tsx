import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage: React.FC = () => {
  // Placeholder cart data
  const cartItems = [
    { id: 1, name: "Produit 1", price: 29.99, quantity: 2, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Produit 2", price: 39.99, quantity: 1, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price} €</p>
              </div>
              <div className="flex items-center">
                <button className="p-1"><Minus size={16} /></button>
                <span className="mx-2">{item.quantity}</span>
                <button className="p-1"><Plus size={16} /></button>
              </div>
              <p className="font-semibold mx-4">{(item.price * item.quantity).toFixed(2)} €</p>
              <button className="text-red-500"><Trash2 /></button>
            </div>
          ))}
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
            <div className="flex justify-between mb-2">
              <span>Sous-total</span>
              <span>{subtotal.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Frais de livraison</span>
              <span>{shipping.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
            <Link
              to="/checkout"
              className="block w-full text-center bg-orange-600 text-white py-2 rounded mt-6 hover:bg-orange-700 transition duration-300"
            >
              Procéder au paiement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;