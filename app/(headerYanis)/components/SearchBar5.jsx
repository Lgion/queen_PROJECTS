import React, { useState } from 'react';
// import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className={`flex items-center transition-all duration-300 ${isExpanded ? 'w-64' : 'w-10'}`}>
        <input
          type="text"
          placeholder="Rechercher..."
          className={`w-full py-2 pl-10 pr-4 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
          onBlur={() => setIsExpanded(false)}
        />
        <button
          className="absolute left-0 p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* <FiSearch className="w-5 h-5" /> */}
        </button>
      </div>
    </div>
  );
}