import React from 'react';
import { Mic, MicOff } from 'lucide-react';

export default function VoiceSearch({ 
  isListening, 
  setIsListening 
}: { 
  isListening: boolean; 
  setIsListening: (listening: boolean) => void 
}) {
  const toggleVoice = () => {
    if (!isListening) {
      // Here you would typically implement actual voice recognition
      // For demo purposes, we'll just toggle the state
      setIsListening(true);
      setTimeout(() => setIsListening(false), 3000);
    } else {
      setIsListening(false);
    }
  };

  return (
    <button
      onClick={toggleVoice}
      className={`p-2 rounded-full transition-colors ${
        isListening 
          ? 'bg-red-100 dark:bg-red-900/50' 
          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
      aria-label="Voice search"
    >
      {isListening ? (
        <Mic className="w-6 h-6 text-red-500 animate-pulse" />
      ) : (
        <MicOff className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
}