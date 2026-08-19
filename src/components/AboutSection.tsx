"use client";

import { motion } from "framer-motion";
import { User, Code, Brain, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative flex items-center justify-center py-20 px-4 sm:px-6 min-h-screen">
      {/* Background Accent - Enhanced */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[80%] sm:w-[60%] md:w-[50%] h-[60%] sm:h-[70%] 
                        bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-pink-100/40 
                        dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/30 
                        blur-3xl rounded-full"
        />
        {/* Additional glow effect */}
        <div
          className="absolute w-[40%] h-[40%] bg-gradient-to-r from-cyan-100/20 to-blue-100/20 
                        dark:from-cyan-900/10 dark:to-blue-900/10 blur-3xl rounded-full 
                        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Content Card */}
      <motion.div
        className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md 
                   shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 
                   max-w-4xl w-full text-center sm:text-left
                   border border-white/20 dark:border-gray-700/30
                   hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header with Icon */}
        <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h3>
        </div>

        {/* Divider Accent - Enhanced */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Paragraphs with Icons */}
        <div className="space-y-6">
          <motion.div
            className="flex gap-3 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-1 p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I am a{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Backend Developer
              </span>{" "}
              focused on application development, database management, and
              system performance optimization for greater efficiency and
              scalability. With a basic understanding of frontend development, I
              can collaborate in building well-integrated applications.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-3 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-1 p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              In addition, I also have an interest in{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Machine Learning
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Data Mining
              </span>
              , which enriches my knowledge in processing data to generate
              valuable insights.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-3 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-1 p-1.5 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
              <Rocket className="w-4 h-4 text-pink-600 dark:text-pink-400" />
            </div>
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I am always enthusiastic about learning new technologies and
              seeking challenges that can enhance my skills. With an analytical
              approach and innovative solutions, I am ready to contribute to the
              development team to create reliable and high-performance systems.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
