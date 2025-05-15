"use client";

import { useState, useEffect } from "react";

export default function Index() {
  const [list, setList] = useState(["Je t'aime Eva"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setList((prevList) => [...prevList, "Je t'aime Eva"]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white">
        {list.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
    </main>
  );
}
