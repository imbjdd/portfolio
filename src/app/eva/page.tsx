"use client";


import { useState, useEffect } from "react";


export default function Index() {
  const [points, setPoints] = useState(0);
  const [evas, setEvas] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [multiplierPrice, setMultiplierPrice] = useState(20);
  const [evaPrice, setEvaPrice] = useState(4);


  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => prev + evas * multiplier);
    }, 1000);
    return () => clearInterval(interval);
  }, [evas, multiplier]);


  const handleClick = () => {
    setPoints(prev => prev + 1 * multiplier);
  };


  const buyEva = () => {
    if (points >= evaPrice) {
      setPoints(prev => prev - evaPrice);
      setEvas(prev => prev + 1);
      setEvaPrice(Math.floor(evaPrice * 1.5));
    }
  };

  const buyMultiplier = () => {
    if (points >= multiplierPrice) {
      setPoints(prev => prev - multiplierPrice);
      setMultiplier(prev => prev + 1);
      setMultiplierPrice(Math.floor(multiplierPrice * 2));
    }
  };

  const resetGame = () => {
    setPoints(0);
    setEvas(0);
    setMultiplier(1);
    setEvaPrice(4);
    setMultiplierPrice(20);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white">
      {/* Background image, no blur, no overlay */}
      <img src="/1750324230973.jpg" alt="eva background" className="pointer-events-none select-none object-cover w-full h-full absolute inset-0 z-0 opacity-50" style={{objectPosition: 'center'}} />

      {/* Game Card, sobre */}
      <div className="relative z-10 bg-white border border-blue-100 rounded-xl p-8 flex flex-col items-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Eva Clicker</h1>
        <div className="mb-2 text-lg">Points: <span className="font-mono font-bold">{points}</span></div>
        <div className="mb-2 text-lg">Eva: <span className="font-mono">{evas}</span> <span className="text-sm">({evas * multiplier} pts/s)</span></div>
        <div className="mb-2 text-lg">Multiplicateur: <span className="font-mono">x{multiplier}</span></div>
        {points >= 1000 && (
          <div className="text-xl text-pink-600 font-bold my-4">je t'aime</div>
        )}
        <button 
          onClick={handleClick}
          className="mt-6 mb-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold px-8 py-4 rounded"
        >
          uwu (x{multiplier})
        </button>
        <div className="flex flex-row gap-2 mb-2">
          <button 
            onClick={buyEva}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded font-semibold disabled:opacity-50"
            disabled={points < evaPrice}
          >
            Acheter Eva ({evaPrice} pts)
          </button>
          <button 
            onClick={buyMultiplier}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-semibold disabled:opacity-50"
            disabled={points < multiplierPrice}
          >
            x2 ({multiplierPrice} pts)
          </button>
        </div>
        <button
          onClick={resetGame}
          className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded border border-gray-300"
        >
          Reset
        </button>
      </div>
    </main>
  );
}
