"use client";

import Image from "next/image";

const SNAPSHOTS = [
  { id: 1, src: "/1750324230973.jpg", alt: "Snapshot 1" },
  { id: 2, src: "/cannes.jpeg", alt: "Snapshot 2" },
  { id: 3, src: "/56689216.jpg", alt: "Snapshot 3" },
  { id: 4, src: "/1751823189453.jpg", alt: "Snapshot 4" },
  { id: 5, src: "/1750021073495.jpg", alt: "Snapshot 5" },
  { id: 6, src: "/1748276652225.jpg", alt: "Snapshot 6" },
];

export function Snapshots() {
  return (
    <section className="max-w-5xl mx-auto w-full pt-4 pb-12 md:pb-20 md:pt-8 overflow-hidden">
      <h2 className="text-2xl md:text-2xl font-semibold text-black mb-16 tracking-tight"
        >
          Snapshots
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex gap-2 scroll-animation">
          {[...SNAPSHOTS, ...SNAPSHOTS].map((snapshot, index) => (
            <div
              key={`${snapshot.id}-${index}`}
              className="flex-shrink-0 overflow-hidden"
            >
              <Image
                src={snapshot.src}
                alt={snapshot.alt}
                width={500}
                height={500}
                className="object-cover h-72 w-72"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}