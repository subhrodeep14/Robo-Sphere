"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
   
    {
      name: 'Marcus Rodriguez',
      position: 'Operations Director',
      company: 'LogiCore Solutions',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The autonomous warehouse robots have revolutionized our operations. We\'ve seen a 75% improvement in sorting speed and our accuracy rates have never been higher. Outstanding ROI.',
      rating: 5,
      metrics: '75% faster operations'
    },
    {
      name: 'Dr. Emily Watson',
      position: 'Chief Medical Officer',
      company: 'Metropolitan Health',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The healthcare assistance robots have been a game-changer for our hospital. Patient satisfaction is up, staff efficiency improved by 30%, and the 24/7 availability is invaluable.',
      rating: 5,
      metrics: '30% staff efficiency boost'
    },
   
    
    {
      name: 'David Kim',
      position: 'Environmental Engineer',
      company: 'EcoTech Solutions',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      content: 'The environmental cleanup robots exceed expectations. 95% waste sorting accuracy and 70% energy savings align perfectly with our sustainability goals. Truly innovative.',
      rating: 5,
      metrics: '70% energy savings'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
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
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from industry leaders who have transformed their operations with our robotics solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-500 transition-all duration-300 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6"
              >
                <Quote className="h-6 w-6 text-white" />
              </motion.div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + starIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Metrics Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-900/50 dark:to-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {testimonial.metrics}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-pink-200 dark:border-pink-600"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action 
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Join Our Success Stories
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;