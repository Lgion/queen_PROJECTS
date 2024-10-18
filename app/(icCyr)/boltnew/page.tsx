"use client"

import React,{useState} from 'react';
import { Waves } from 'lucide-react';
import ListCards from '../components/ListCards';


const $datas = {
  mainHome: {
    title: "Tarifs Salle de Jeux",
    cards: [
      {
        title: "Enfant (3-12 ans)",
        price: "8€",
        description: "Accès illimité à la salle de jeux",
        features: [
            "Structures gonflables",
            "Toboggans",
            "Piscine à balles",
            "Jeux d'arcade"
        ]
      }
      , {
        title: "Adulte (13+ ans)",
        price: "5€",
        description: "Accès pour surveiller les enfants",
        features: [
            "Accès aux zones de repos",
            "Wifi gratuit",
            "Café offert"
        ]
      }
      , {
        title: "Groupe (10+ enfants)",
        price: "6€ / enfant",
        description: "Tarif spécial pour les groupes",
        features: [
            "Accès illimité à la salle de jeux",
            "Salle privée pour les effets personnels",
            "Animateur dédié",
            "Goûter inclus"
        ]
      }
    ]
  }
}

function App() {

  let [$data, set$data] = useState($datas)
  
  return (
    <>
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Waves size={40} className="mr-4" />
              <h1 className="text-3xl font-bold">Waves Aqua Parc</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:underline">Accueil</a></li>
                <li><a href="#" className="hover:underline">Attractions</a></li>
                <li><a href="#" className="hover:underline">Tarifs</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="home">
        <ListCards $={$data.mainHome} setter={set$data} dataId="mainHome" />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Waves Aqua Parc. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  )
}

export default App;