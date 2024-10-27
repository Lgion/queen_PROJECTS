import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function MobileMenu({ isOpen, setIsOpen }) {
    const menuItems = ["Accueil", "Services", "Produits", "Réservations", "Équipe", "Galerie", "Contact"];

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 md:hidden">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-y-0 right-0 flex">
                <Dialog.Panel className="w-64 bg-white h-full">
                    <div className="p-4">
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="mt-8">
                            <ul className="space-y-4">
                                {menuItems.map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
