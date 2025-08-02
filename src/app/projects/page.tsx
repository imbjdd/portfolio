import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/_components/container';
import { getAllProjects } from '@/lib/projects';
import Header from "@/app/_components/header";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen">
      <Header />
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              A collection of my hackathon projects and achievements in the Web3 and AI space. 
              Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-rose-100 px-2 py-1 rounded-full text-xs font-medium text-rose-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="space-y-2 mb-4">
                    {project.duration && (
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="mr-2">⏱️</span>
                        {project.duration}
                      </div>
                    )}
                    {project.role && (
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="mr-2">👤</span>
                        {project.role}
                      </div>
                    )}
                  </div>

                  {/* Technologies Preview */}
                  {project.technologies && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-green-100 px-2 py-1 rounded text-xs text-green-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </Container>
    </main>
  );
} 