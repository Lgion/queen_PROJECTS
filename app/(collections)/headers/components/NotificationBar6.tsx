import React, { useState, useEffect } from 'react';

const notifications = [
  "🎉 -30% sur toutes les colorations cette semaine!",
  "✨ Nouveau: Diagnostic capillaire personnalisé",
  "🎁 Offre duo: -20% sur le 2ème rendez-vous"
];

export default function NotificationBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4">
      <div className="container mx-auto">
        <p className="text-center text-sm font-medium animate-fade-in">
          {notifications[currentIndex]}
        </p>
      </div>
    </div>
  );
}