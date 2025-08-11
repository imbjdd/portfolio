'use client'

export function Hackathons() {
  const hackathons = [
    { id: 1, name: "ETH Shangai", date: "2023-01-07", description: "Description of the hackathon", image: "/shangai.png" },
    { id: 2, name: "ETHGlobal Bruxelles", date: "2024-02-01", description: "Description of another hackathon", image: "/bruxelles.svg" },
    { id: 3, name: "ETHGlobal Cannes", date: "2025-07-04", description: "Description of the third hackathon", image: "/cannes.svg" },
    { id: 4, name: "Agentic Ethereum", date: "2023-04-01", description: "Description of the fourth hackathon", image: "/agentic.png" },
    { id: 5, name: "ETHGlobal Trifecta", date: "2023-05-01", description: "Description of the fifth hackathon", image: "/trifecta.svg" },
    { id: 6, name: "Chiliz Hack Paris", date: "2025-07-01", description: "Chiliz Hack Paris", image: "/chiliz.svg" },
    { id: 7, name: "World Wild Web Hack Night Paris", date: "2025-04-02", description: " Cloudflare and Fiberplane / HONC", image: "/f8967aa6-37ec-4044-bc3c-97cee161a1c7-_1_.png" },
  ];

  return (
    <section className="flex w-full flex-col justify-center">
      <div className="px-4 xl:px-96 w-full pt-4 pb-12 md:pb-12 mb-8 bg-blue-200 md:pt-16 flex flex-col gap-4">
        <h2 className="text-2xl md:text-2xl font-semibold mb-12 text-black tracking-tight">
          Hackathons
        </h2>
        <p>I did participate in <i>some</i> hackathons for fun because I didn't have anything better to do. (Section not finished :D, I will try to finish it before thursday)</p>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-fit">
                {hackathons.map((hackathon) => (
                <div key={hackathon.id} className="flex gap-4 hover:bg-blue-50 rounded-lg p-4">
                    <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-md flex items-center justify-center">
                        <img
                            src={hackathon.image}
                            alt={hackathon.name}
                            className="rounded-md w-fit h-fit"
                            style={{ objectFit: "contain", background: "" }}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-bold">{hackathon.name}</h3>
                        <p className="text-sm text-gray-600">{new Date(hackathon.date).toLocaleDateString()}</p>
                        <p className="text-md">{hackathon.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
