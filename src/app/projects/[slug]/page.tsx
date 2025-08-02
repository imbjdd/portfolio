import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { getProjectBySlug } from '@/lib/projects';
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";

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
    <main className="min-h-screen">
      <div className='bg-blue-200'>
        <Header />
        <div className="px-4 xl:px-96 w-full pt-4 md:pt-8">
          <div className="py-8 md:py-16">          
            <h1 className="text-2xl font-bold tracking-tighter leading-tight md:pr-8">
              {project.title}
            </h1>
            <p>
              {project.description}
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 xl:px-96 w-full pt-4 md:pt-8 flex flex-col gap-2">
        <p className='text-xl font-bold'>Initial Idea</p>
        <p>{project.title}</p>
        <div>
          <img src={project.image} alt="image" width={900} height={506} className='mx-auto my-12' /> 
        </div>
      </div>
    </main>
  );
} 