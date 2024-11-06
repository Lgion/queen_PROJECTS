import React, { useState } from 'react';
import { CreditCard, Truck } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finaliser votre commande</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Informations de livraison</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1">Prénom</label>
                  <input type="text" id="firstName" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1">Nom</label>
                  <input type="text" id="lastName" className="w-full p-2 border rounded" required />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block mb-1">Adresse</label>
                  <input type="text" id="address" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="city" className="block mb-1">Ville</label>
                  <input type="text" id="city" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block mb-1">Code postal</label>
                  <input type="text" id="postalCode" className="w-full p-2 border rounded" required />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block mb-1">Téléphone</label>
                  <input type="tel" id="phone" className="w-full p-2 border rounded" required />
                </div>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Mode de paiement</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mr-2"
                />
                <CreditCard className="mr-2" />
                Carte bancaire
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mobileMoney"
                  checked={paymentMethod === 'mobileMoney'}
                  onChange={() => setPaymentMethod('mobileMoney')}
                  className="mr-2"
                />
                <Truck className="mr-2" />
                Mobile Money
              </label>
            </div>
            {paymentMethod === 'card' && (
              <div className="mt-4">
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block mb-1">Numéro de carte</label>
                  <input type="text" id="cardNumber" className="w-full p-2 border rounded" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block mb-1">Date d'expiration</label>
                    <input type="text" id="expiryDate" className="w-full p-2 border rounded" placeholder="MM/AA" required />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block mb-1">CVV</label>
                    <input type="text" id="cvv" className="w-full p-2 border rounded" required />
                  </div>
                </div>
              </div>
            )}
            {paymentMethod === 'mobileMoney' && (
              <div className="mt-4">
                <div className="mb-4">
                  <label htmlFor="mobileNumber" className="block mb-1">Numéro de téléphone</label>
                  <input type="tel" id="mobileNumber" className="w-full p-2 border rounded" required />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Produit 1 x2</span>
                <span>59.98 €</span>
              </div>
              <div className="flex justify-between">
                <span>Produit 2 x1</span>
                <span>39.99 €</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Sous-total</span>
                <span>99.97 €</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Frais de livraison</span>
                <span>5.99 €</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total</span>
                <span>105.96 €</span>
              </div>
            </div>
            <button className="w-full bg-orange-600 text-white py-2 rounded mt-6 hover:bg-orange-700 transition duration-300">
              Confirmer la commande
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;