"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'LogiBot Warehouse',
      category: 'Logistics & Supply Chain',
      description: 'Autonomous mobile robots for warehouse operations, inventory management, and last-mile delivery.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600',
      metrics: ['75% faster sorting', '90% accuracy rate', '50% cost reduction'],
      technologies: ['Navigation AI', 'RFID Tracking', 'Cloud Integration', 'Fleet Management']
    },
    {
      title: 'MediCare Assistant',
      category: 'Healthcare Robotics',
      description: 'Service robots for hospitals providing patient care assistance, medication delivery, and sanitization.',
      image: 'https://t4.ftcdn.net/jpg/06/41/34/69/360_F_641346910_GDVNrmydFLDQaHnrQGbPcrHdTy7efErR.jpg',
      metrics: ['30% staff efficiency', '99.9% sanitization', '24/7 availability'],
      technologies: ['Voice Recognition', 'Biometric Sensors', 'UV Sanitization', 'Patient Monitoring']
    },
    {
      title: 'CleanTech Solutions',
      category: 'Environmental Services',
      description: 'Robotic systems for environmental cleanup, waste management, and sustainable operations.',
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600',
      metrics: ['95% waste sorting', '70% energy savings', '100% eco-friendly'],
      technologies: ['Material Recognition', 'Sorting Algorithms', 'Renewable Energy', 'Data Analytics']
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-blue-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-700 dark:from-white dark:via-blue-200 dark:to-blue-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've transformed industries with innovative robotics solutions that deliver measurable results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 mb-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-blue-700 dark:text-blue-300 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More Button */}
              {/*  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>*/}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;