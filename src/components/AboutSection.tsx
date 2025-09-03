"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative flex items-center justify-center py-20">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-pink-100/40 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/30 blur-3xl rounded-3xl"></div>

      {/* Content Card */}
      <motion.div
        className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-xl rounded-2xl p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h3
          className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h3>

        {/* Divider Accent */}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>

        {/* Description */}
        <motion.p
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I am a{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Backend Developer
          </span>{" "}
          focused on application development, database management, and system
          performance optimization for greater efficiency and scalability. With
          a basic understanding of frontend development, I can collaborate in
          building well-integrated applications.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
          , which enriches my knowledge in processing data to generate valuable
          insights.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          I am always enthusiastic about learning new technologies and seeking
          challenges that can enhance my skills. With an analytical approach and
          innovative solutions, I am ready to contribute to the development team
          to create reliable and high-performance systems.
        </motion.p>
      </motion.div>
    </section>
  );
}
