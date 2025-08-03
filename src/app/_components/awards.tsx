'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Pointer } from "@/app/components/magicui/pointer";
import { projectsData } from "@/lib/projects";

// Using projectsData from lib/projects.ts instead of local awardsData

const bgColors = [
  '-rose-200',
  '-blue-200',
  '-green-200',
  '-yellow-200',
  '-purple-200',
]

export function Awards() {
  return (
    <section className="pb-24 md:pb-32" id="content">
      <div className="px-4 xl:px-96 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-2xl font-semibold text-black mb-16 tracking-tight"
        >
          Hackathon Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-16">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: project.delay }}
              className={`group ${project.fullWidth ? 'md:col-span-2 md:max-w-xl' : ''}`}
            >
              
                <div key={index} className="flex flex-col xl:flex-row  gap-8">
                  <div className="flex flex-col justify-between gap-2">
                    <div className="flex flex-col gap-2">
                    <Link href={`/projects/${project.slug}`} className="block">
                      <div>
                        <h3 className="text-lg font-bold min-w-96 max-w-96 py-2 rounded-md text-black transition-colors duration-300 mb-2 hover:text-orange-600">
                          {project.title}
                        </h3>
                        <p className="text-md font-light text-gray-700 group-hover:text-black transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                    <div className="flex gap-2 mt-2">
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                      </Link>
                      <p> / </p>
                      {project.link ? (
                        <a 
                          href={project.link as string}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 font-medium"
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
                    </div>
                    <div className="flex gap-2">
                      {project.tags.map((tag: string, index2: number) => (
                        <span key={index2} className={`p-2`} style={{ backgroundColor: project.color || '#f0f0f0' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`overflow-hidden grow aspect-[16/9] p-4 2xl:p-12 rounded-xl`} style={{ backgroundColor: project.color || '#f0f0f0' }}>
                    <Image 
                      className="w-full rounded-xl h-full grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-101 object-cover" 
                      src={project.image} 
                      width={900} 
                      height={506} 
                      alt={project.imageAlt}
                    />
                    <Pointer className={`fill${bgColors[index % bgColors.length]}`} />
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
