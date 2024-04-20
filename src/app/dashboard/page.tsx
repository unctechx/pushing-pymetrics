"use client"

import Link from 'next/link';
import { useState } from 'react';
import RandomDigitsSequence from '../digits/page';

export default function Dashboard() {
  const [selectedGame, setSelectedGame] = useState<React.ReactNode | null>(null);

  const games = [
    { title: "Balloon Game", component: <RandomDigitsSequence /> },
    { title: "Tower Game", component: <RandomDigitsSequence /> },
    { title: "Money Exchange Game #1", component: <RandomDigitsSequence /> },
    { title: "Money Exchange Game #1", component: <RandomDigitsSequence /> },
    { title: "Keypress Game", component: <RandomDigitsSequence /> },
    { title: "Hard or Easy Task Game", component: <RandomDigitsSequence /> },
    { title: "Digits Memory Game", component: <RandomDigitsSequence /> },
    { title: "Stop Game", component: <RandomDigitsSequence /> },
    { title: "Arrows Game", component: <RandomDigitsSequence /> },
    { title: "Lengths Game", component: <RandomDigitsSequence /> },
    { title: "Cards Game", component: <RandomDigitsSequence /> },
    { title: "Faces Game", component: <RandomDigitsSequence /> },
  ];

  const handleGameSelection = (gameComponent: React.ReactNode) => {
    if (selectedGame) {
      setSelectedGame(null); 
      setTimeout(() => {
        setSelectedGame(gameComponent); 
      }, 100); 
    } else {
      setSelectedGame(gameComponent);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      <div className="fixed inset-0 bg-gradient-to-b from-white to-transparent z-0">
        <div className="absolute top-10 left-20 bg-purple-500 rounded-full filter blur-3xl w-36 h-36"></div>
        <div className="absolute top-32 right-24 bg-purple-500 rounded-full filter blur-2xl w-24 h-24"></div>
        <div className="absolute bottom-20 right-10 bg-purple-500 rounded-full filter blur-3xl w-36 h-36"></div>
      </div>

      {/* Updated Header with Link */}
      <nav className="relative z-10 text-black p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <div className="text-3xl font-semibold">Consultra.</div>
          </Link>
        </div>
      </nav>

      <div className="flex flex-grow z-10 relative">
        {/* Dropdown for games on the left */}
        <div className="w-64 p-4 bg-gradient-to-b from-white to-transparent backdrop-blur-lg backdrop-filter">
          <ul className="space-y-0">
            {games.map((game, index) => (
              <li key={index} className="group border-b border-gray-300">
                <button 
                  className="text-gray-800 font-bold py-2 flex items-center justify-between w-full"
                  onClick={() => handleGameSelection(game.component)}
                  style={{ backdropFilter: 'blur(20px)' }}
                >
                  <span className="text-xl">{String(index + 1).padStart(2)}</span>
                  <span className="flex-grow text-left px-4">{game.title}</span>

                </button>
              </li>
            ))}
          </ul>
        </div>

      
        <div className="flex-grow p-4">
          {selectedGame ? (
            selectedGame
          ) : null}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-black py-6 px-8 text-center">
        <p className="mb-2">@ 2024 PyMetrics. All rights reserved.</p>
        <p className="text-sm">A PyMetrics practice software</p>
      </footer>
    </div>
  );
}
