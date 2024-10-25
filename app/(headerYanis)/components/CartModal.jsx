import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { FiX, FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartModal({ isOpen, setIsOpen, cartItems, setCartItems }) {
  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full"
        >
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="px-4 py-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-lg font-medium">
                    Votre panier ({cartItems.length})
                  </Dialog.Title>
                  <button
                    className="p-2 rounded-full hover:bg-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {/* <FiX className="w-6 h-6" /> */}
                  </button>
                </div>
              </div>

              {/* Cart Items */}
              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <AnimatePresence>
                  {cartItems.length === 0 ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-gray-500"
                    >
                      Votre panier est vide
                    </motion.p>
                  ) : (
                    cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center py-4 border-b"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="ml-4 flex-1">
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.price}€</p>
                          <div className="mt-2 flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 rounded-full hover:bg-gray-100"
                            >
                              {/* <FiMinus className="w-4 h-4" /> */}
                            </button>
                            <span className="text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 rounded-full hover:bg-gray-100"
                            >
                              {/* <FiPlus className="w-4 h-4" /> */}
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, -item.quantity)}
                          className="p-2 text-gray-400 hover:text-red-500"
                        >
                          {/* <FiTrash2 className="w-5 h-5" /> */}
                        </button>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-4 py-6 border-t border-gray-200">
                <div className="flex justify-between text-base font-medium">
                  <p>Total</p>
                  <p>{total.toFixed(2)}€</p>
                </div>
                <div className="mt-6">
                  <button
                    className="w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50"
                    disabled={cartItems.length === 0}
                    onClick={() => {/* Handle checkout */}}
                  >
                    Passer la commande
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}