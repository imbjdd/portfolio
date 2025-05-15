'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { Pointer } from "@/app/components/magicui/pointer";

const awardsData = [
  {
    image: '/coc.jpg',
    imageAlt: 'ETHGlobal Agents award',
    title: 'Gaia and Collab.Land - Most Viral Agent & Flow Best AI Agents for Consumers 3rd place',
    description: 'ETHGlobal Agents — $3,500',
    delay: 0.2,
    fullWidth: false
  },
  {
    image: '/ddd.jpg',
    imageAlt: 'ETHGlobal Brussels award',
    title: 'The Graph - Best Use of Subgraph 2nd place',
    description: 'ETHGlobal Brussels — $1,500',
    delay: 0.4,
    fullWidth: false
  },
  {
    image: '/coc.jpg',
    imageAlt: 'ETHShangai award',
    title: 'DB3 - Building a decentralized application with DB3',
    description: 'ETHShangai — $300',
    delay: 0.2,
    fullWidth: false
  },
  {
    image: '/privlend.jpg',
    imageAlt: 'ETHGlobal Trifecta award',
    title: 'Privlend',
    description: 'ETHGlobal Trifecta',
    delay: 0.4,
    fullWidth: false
  },
  {
    image: '/climate.png',
    imageAlt: 'ETHPrague 2024',
    title: 'Climate Compass',
    description: 'ETHPrague 2024',
    delay: 0.2,
    fullWidth: false
  },
  {
    image: '/clickandcollect.png',
    imageAlt: 'Hackathon Campus Fund x Albert School x 42',
    title: 'Click and Collect',
    description: 'Hackathon Campus Fund x Albert School x 42',
    delay: 0.4,
    fullWidth: false
  }
];

export function Awards() {
  return (
    <section className="bg-white pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-light text-black mb-16 tracking-tight"
        >
          Hackathon Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {awardsData.map((award, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: award.delay }}
              className={`group ${award.fullWidth ? 'md:col-span-2 md:max-w-xl' : ''}`}
            >
              <div className="overflow-hidden mb-6 aspect-[16/9]">
                <Image 
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105 object-cover" 
                  src={award.image} 
                  width={900} 
                  height={506} 
                  alt={award.imageAlt}
                />
                <Pointer className="fill-pink-500" />
              </div>
              <h3 className="text-xl font-light p-2 rounded-md text-black transition-colors duration-300 mb-2">
                {award.title}
              </h3>
              <p className="text-md font-light text-gray-700 group-hover:text-black transition-colors duration-300">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
