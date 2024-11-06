"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Calendar } from 'lucide-react';

const events = [
  { id: 1, title: "Conférence d'ouverture", date: "2024-09-15", time: "10:00", type: "conference", zone: "Auditorium A" },
  { id: 2, title: "Tournoi Fortnite", date: "2024-09-15", time: "14:00", type: "tournament", zone: "Zone E-sport" },
  { id: 3, title: "Démo VR", date: "2024-09-16", time: "11:00", type: "demo", zone: "Zone VR" },
  { id: 4, title: "Table ronde: L'avenir du gaming", date: "2024-09-16", time: "15:00", type: "conference", zone: "Salle de conférence B" },
  { id: 5, title: "Cosplay Contest", date: "2024-09-17", time: "13:00", type: "event", zone: "Scène principale" },
];

const Programme = () => {
  const [filter, setFilter] = useState({ type: 'all', date: 'all' });

  const filteredEvents = events.filter(event => 
    (filter.type === 'all' || event.type === filter.type) &&
    (filter.date === 'all' || event.date === filter.date)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Programme du Salon</h1>
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setFilter(prev => ({ ...prev, type: 'all' }))}>Tous</TabsTrigger>
          <TabsTrigger value="conference" onClick={() => setFilter(prev => ({ ...prev, type: 'conference' }))}>Conférences</TabsTrigger>
          <TabsTrigger value="tournament" onClick={() => setFilter(prev => ({ ...prev, type: 'tournament' }))}>Tournois</TabsTrigger>
          <TabsTrigger value="demo" onClick={() => setFilter(prev => ({ ...prev, type: 'demo' }))}>Démos</TabsTrigger>
          <TabsTrigger value="event" onClick={() => setFilter(prev => ({ ...prev, type: 'event' }))}>Événements</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mb-8">
        <select 
          className="border rounded p-2"
          onChange={(e) => setFilter(prev => ({ ...prev, date: e.target.value }))}
          value={filter.date}
        >
          <option value="all">Toutes les dates</option>
          <option value="2024-09-15">15 septembre 2024</option>
          <option value="2024-09-16">16 septembre 2024</option>
          <option value="2024-09-17">17 septembre 2024</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex items-center"><Calendar className="mr-2" /> {event.date} à {event.time}</p>
              <p>Zone: {event.zone}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programme;