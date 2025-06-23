"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Shield, Cpu } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50/10 via-blue-50 to-blue-50/90 dark:from-gray-900 dark:via-blue-900/20 dark:to-blue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-blue-500/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/50 dark:to-blue-900/50 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700"
            >
              <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Next-Gen Robotics Solutions</span>
            </motion.div>

            {/* Headline*/}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-blue-700 dark:from-white dark:via-blue-200 dark:to-blue-200 bg-clip-text text-transparent">
                Revolutionize
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                with Robotics
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Transform your operations with cutting-edge robotics technology. From autonomous systems to AI-powered automation, we deliver solutions that drive efficiency and innovation.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, text: 'Enterprise Security' },
                { icon: Cpu, text: 'AI-Powered' },
                { icon: Zap, text: '24/7 Support' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <feature.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {!session.data?.user &&
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => signIn()}
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>}
              {session.data?.user &&
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => router.push('/projects')}
                >
                  <span>Explore More</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>}


              {/*<motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </motion.button>*/}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/30 rounded-3xl overflow-hidden">
              {/* Animated Robot Illustration */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Cpu className="h-32 w-32 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className={`absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-400 rounded-full`}
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${10 + i * 15}%`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;