'use client'

import { motion } from "motion/react"

const educationData = [
  {
    title: "First Year Statistics Student",
    institution: "Institut de Statistique de Sorbonne Université",
    period: "2024 - 2025",
    description: "Essential courses: Computer Science (C), R Statistical Software, Python, Multidimensional Data Analysis, Introduction to Statistics, Discrete Optimization, Random Variable Simulation, and Monte Carlo Integration Approximation.",
    delay: 0.2
  },
  {
    title: "Mathematics Bachelor",
    institution: "Sorbonne Université",
    period: "2023 - 2025",
    description: "Average in second year: 16.017/20. Ranking in S4: 5/90. Essential courses: Numerical Analysis, Topology and Differential Calculus, Probability, Measure Theory, Linear Algebra, Functional Analysis, Differential Calculus, and Optimization.",
    delay: 0.3
  },
  {
    title: "Preparatory Classes (MPSI)",
    institution: "Louis-le-Grand",
    period: "2022 - 2023",
    description: "Ranked 1 high school in France. Intensive preparatory courses in Mathematics, Physics, Computer Science, Chemistry, Philosophy, and Literature for entrance exams to French engineering schools. Computer Science option.",
    delay: 0.4
  }
];

const achievementsData = [
  {
    title: "Mathematics Olympiad",
    organization: "Academy of Montpellier, France",
    year: "2021",
    description: "Awarded at the academic level.",
    delay: 0.2
  }];

export function Resume() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-light text-black mb-16 tracking-tight"
        >
          Curriculum Vitae
        </motion.h2>
        
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-black mb-8 tracking-tight"
          >
            Education
          </motion.h3>
          
          <div className="space-y-10">
            {educationData.map((education, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: education.delay }}
                className="group"
              >
                <h4 className="text-xl font-medium text-black group-hover:text-gray-900 transition-colors duration-300 mb-1">
                  {education.title}
                </h4>
                <p className="text-md font-light text-gray-700 mb-1">
                  {education.institution} | {education.period}
                </p>
                <p className="text-md font-light text-gray-600">
                  {education.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-black mb-8 tracking-tight"
          >
            Awards
          </motion.h3>
          
          <div className="space-y-10">
            {achievementsData.map((achievement, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: achievement.delay }}
                className="group"
              >
                <h4 className="text-xl font-medium text-black group-hover:text-gray-900 transition-colors duration-300 mb-1">
                  {achievement.title}
                </h4>
                <p className="text-md font-light text-gray-700 mb-1">
                  {achievement.organization} | {achievement.year}
                </p>
                <p className="text-md font-light text-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 