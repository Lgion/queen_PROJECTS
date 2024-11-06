"use client"

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, MapPin } from 'lucide-react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Configuration du localisateur pour react-big-calendar
moment.locale('fr');
const localizer = momentLocalizer(moment);

// Fonction pour générer les événements de disponibilité
const generateAvailableSlots = () => {
  const events = [];
  const startDate = moment().startOf('week');
  const endDate = moment().add(4, 'weeks').endOf('week');

  for (let day = startDate; day.isBefore(endDate); day.add(1, 'day')) {
    if (day.day() !== 0 && day.day() !== 6) { // Exclure le samedi (6) et le dimanche (0)
      events.push({
        title: 'Disponible',
        start: day.clone().set({ hour: 8, minute: 0 }).toDate(),
        end: day.clone().set({ hour: 18, minute: 0 }).toDate(),
      });
    }
  }

  return events;
};

const events = generateAvailableSlots();

const Booking: React.FC = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Réservation soumise:', { service, date, time, location });
    alert('Réservation effectuée avec succès !');
  };

  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    const selectedMoment = moment(slotInfo.start);
    if (selectedMoment.day() === 0 || selectedMoment.day() === 6 || 
        selectedMoment.hour() < 8 || selectedMoment.hour() >= 18) {
      alert("Désolé, ce créneau n'est pas disponible. Veuillez choisir un jour de semaine entre 8h et 18h.");
      return;
    }
    setDate(selectedMoment.format('YYYY-MM-DD'));
    setTime(selectedMoment.format('HH:mm'));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Réserver un service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Calendrier des disponibilités</h2>
          <p className="mb-4 text-sm text-gray-600">Disponible du lundi au vendredi, de 8h à 18h</p>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 400 }}
            onSelectSlot={handleSelectSlot}
            selectable
            views={['month', 'week', 'day']}
            messages={{
              next: "Suivant",
              previous: "Précédent",
              today: "Aujourd'hui",
              month: "Mois",
              week: "Semaine",
              day: "Jour"
            }}
            min={new Date(0, 0, 0, 8, 0, 0)}
            max={new Date(0, 0, 0, 18, 0, 0)}
          />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Formulaire de réservation</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service</label>
              <div className="relative">
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="coiffure">Coiffure</option>
                  <option value="soin">Soin de beauté</option>
                  <option value="manucure">Manucure</option>
                  <option value="pedicure">Pédicure</option>
                  <option value="maquillage">Maquillage</option>
                </select>
                <User className="absolute right-2 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date</label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
                <CalendarIcon className="absolute right-2 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Heure</label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                />
                <Clock className="absolute right-2 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Lieu</label>
              <div className="relative">
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                >
                  <option value="">Sélectionnez un lieu</option>
                  <option value="salon">En salon</option>
                  <option value="domicile">À domicile</option>
                </select>
                <MapPin className="absolute right-2 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
            >
              Confirmer la réservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
