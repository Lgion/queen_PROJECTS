"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { MapPin } from 'lucide-react';

const exhibitors = [
  { id: 1, name: "GameSoft", description: "Éditeur de jeux AAA", category: "editeur", stand: "A1" },
  { id: 2, name: "VR World", description: "Spécialiste de la réalité virtuelle", category: "hardware", stand: "B3" },
  { id: 3, name: "Indie Games Co", description: "Collectif de développeurs indépendants", category: "developpeur", stand: "C2" },
  { id: 4, name: "Console Master", description: "Constructeur de consoles", category: "constructeur", stand: "D1" },
  { id: 5, name: "eSport Team", description: "Équipe professionnelle d'e-sport", category: "esport", stand: "E4" },
];

const Exposants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredExhibitors = exhibitors.filter(exhibitor => 
    (filter === 'all' || exhibitor.category === filter) &&
    exhibitor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Nos Exposants</h1>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          placeholder="Rechercher un exposant..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/2"
        />
        <select 
          className="border rounded p-2"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="all">Toutes les catégories</option>
          <option value="editeur">Éditeurs</option>
          <option value="hardware">Hardware</option>
          <option value="developpeur">Développeurs</option>
          <option value="constructeur">Constructeurs</option>
          <option value="esport">E-sport</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExhibitors.map(exhibitor => (
          <Card key={exhibitor.id}>
            <CardHeader>
              <CardTitle>{exhibitor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{exhibitor.description}</p>
              <p className="flex items-center mt-2"><MapPin className="mr-2" /> Stand {exhibitor.stand}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Exposants;