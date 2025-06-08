"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cog, Zap, Shield, Brain, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'Autonomous Robotics',
      description: 'Advanced autonomous robots for manufacturing, logistics, and service industries with AI-powered decision making.',
      features: ['Self-navigation', 'Task optimization', 'Safety compliance']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamlessly integrate artificial intelligence into your existing systems for smarter automation.',
      features: ['Machine learning', 'Predictive analytics', 'Real-time adaptation']
    },
    {
      icon: Cog,
      title: 'Custom Automation',
      description: 'Tailored automation solutions designed specifically for your unique business requirements.',
      features: ['Custom hardware', 'Specialized software', 'End-to-end support']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security protocols ensuring your robotic systems meet industry standards.',
      features: ['Data encryption', 'Access control', 'Audit trails']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization to maximize efficiency and reduce operational costs.',
      features: ['Real-time monitoring', 'Performance analytics', 'Predictive maintenance']
    },
    {
      icon: Rocket,
      title: 'Innovation Consulting',
      description: 'Strategic guidance to help you leverage cutting-edge robotics technology for competitive advantage.',
      features: ['Technology roadmaps', 'ROI analysis', 'Implementation planning']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-100 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive robotics solutions tailored to transform your business operations and drive innovation forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-blue-500 rounded-2xl mb-6 group-hover:shadow-lg transition-shadow"
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Learn More Button */}
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                Learn More
              </motion.button> 
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;