"use client";

import { useState, useEffect } from "react";

export default function Index() {
  const [points, setPoints] = useState(0);
  const [evas, setEvas] = useState(0);
  const evaPrice = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => prev + evas);
    }, 1000);

    return () => clearInterval(interval);
  }, [evas]);

  const handleClick = () => {
    setPoints(prev => prev + 1);
  };

  const buyEva = () => {
    if (points >= evaPrice) {
      setPoints(prev => prev - evaPrice);
      setEvas(prev => prev + 1);
    }
  };

  return (
    <main className="min-h-screen bg-white p-4">
      <div>Points: {points}</div>
      <div>Eva: {evas} (generating {evas} points/s)</div>
      <button 
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        uwu
      </button>
      <button 
        onClick={buyEva}
        className="bg-pink-500 text-white px-4 py-2 rounded mt-4 ml-2"
        disabled={points < evaPrice}
      >
        Buy Eva ({evaPrice} points)
      </button>
    </main>
  );
}
