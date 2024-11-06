import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { FiX, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function MobileMenu({ isOpen, setIsOpen }) {
  const menuItems = [
    'Accueil',
    'Services',
    'Produits',
    'Réservations',
    'Équipe',
    'Galerie',
    'Contact'
  ];

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 lg:hidden"
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
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-full"
        >
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="px-4 py-4 flex items-center justify-between">
                <Dialog.Title className="text-lg font-medium">Menu</Dialog.Title>
                <button
                  className="p-2 rounded-full hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {/* <FiX className="w-6 h-6" /> */}
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <div className="px-4 py-6 border-t border-gray-200">
                <a
                  href="#reservation"
                  className="block w-full text-center bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Prendre RDV
                </a>

                <div className="mt-6 flex justify-center space-x-6">
                  <a href="#instagram" className="text-gray-400 hover:text-gray-500">
                    {/* <FiInstagram className="w-6 h-6" /> */}
                  </a>
                  <a href="#facebook" className="text-gray-400 hover:text-gray-500">
                    {/* <FiFacebook className="w-6 h-6" /> */}
                  </a>
                  <a href="#twitter" className="text-gray-400 hover:text-gray-500">
                    {/* <FiTwitter className="w-6 h-6" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}