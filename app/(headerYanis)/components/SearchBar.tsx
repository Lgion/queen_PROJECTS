import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  isOpen: boolean;
}

export default function SearchBar({ isOpen }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'h-16 opacity-100' : 'h-0 opacity-0'
      }`}
    >
      <div className="py-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un service, un style..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}