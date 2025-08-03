import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { getProjectBySlug } from '@/lib/projects';
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { Link as Link2, Github } from 'lucide-react';

import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-8">
      <div style={{ backgroundColor: project.color || '#f8f9fa' }}>
        <Header />
        <div className="px-4 xl:px-96 w-full pt-4 md:pt-8">
          <div className="py-8 md:py-16">          
            <h1 className="text-2xl max-w-5xl font-bold tracking-tighter leading-tight md:pr-8">
              {project.title}
            </h1>
            <p>
              {project.description}
            </p>
            <div className="flex items-center gap-4 mt-4">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-8 h-8 text-gray-800" />
                </a>
              )}
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <Link2 className="w-8 h-8 text-gray-800" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 xl:px-96 w-full pt-4 md:pt-8 flex flex-col gap-2">
        <p className='text-xl font-bold'>Initial Idea</p>
        <p className="max-w-5xl text-lg leading-relaxed text-gray-800">{project.longDescription}</p>
        <div>
          <img src={project.image} alt="image" width={900} height={506} className='rounded-lg mx-auto my-12' /> 
        </div>
        <p className='text-xl font-bold'>Technologies Used</p>
        <ul className="list-disc pl-6">
          {project.technologies && project.technologies.map((tech, index) => (
            <li key={index} className="text-lg text-gray-800">{tech}</li>
          ))}
        </ul>
        <p className='text-xl font-bold mt-2'>Challenges Faced</p>
        <div className="flex flex-col gap-4">
          {project.challenges && project.challenges.map((challenge, index) => (
            <div
              key={index}
              className="relative rounded-lg p-6 flex items-start gap-3"
              style={{ backgroundColor: project.color || '#f0f0f0' }}
            >
              <p className="max-w-5xl text-lg leading-relaxed text-gray-800">
                {challenge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 