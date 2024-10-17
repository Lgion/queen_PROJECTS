    'use client';

import { useState } from 'react'

const events = [
  { date: '2023-09-02', title: 'Tournoi Call of Duty', description: 'Affrontez les meilleurs joueurs d\'Abidjan !' },
  { date: '2023-09-09', title: 'Tournoi Call of Duty', description: 'Affrontez les meilleurs joueurs d\'Abidjan !' },
  { date: '2023-09-16', title: 'Tournoi Call of Duty', description: 'Affrontez les meilleurs joueurs d\'Abidjan !' },
  { date: '2023-09-23', title: 'Tournoi Call of Duty', description: 'Affrontez les meilleurs joueurs d\'Abidjan !' },
  { date: '2023-09-29', title: 'Soirée rétro arcade', description: 'Revivez les classiques des années 80 et 90 !' },
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <section id="événements" className="py-20 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-arcade mb-12 text-center neon-text text-neon-blue">Événements</h2>
        <div className="grid grid-cols-7 gap-2 mb-8">
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
            <div key={day} className="text-center font-arcade text-sm">{day}</div>
          ))}
          {Array.from({ length: 35 }, (_, i) => (
            <div
              key={i}
              className={`aspect-square border border-gray-700 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors ${
                events.some(e => new Date(e.date).getDate() === i + 1) ? 'bg-neon-purple bg-opacity-50' : ''
              }`}
              onClick={() => setSelectedEvent(events.find(e => new Date(e.date).getDate() === i + 1))}
            >
              {i + 1}
            </div>
          ))}
        </div>
        {selectedEvent && (
          <div className="bg-gray-900 p-6 rounded-lg neon-border">
            <h3 className="text-2xl font-arcade mb-2 text-neon-green">{selectedEvent.title}</h3>
            <p className="text-gray-400">{selectedEvent.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}