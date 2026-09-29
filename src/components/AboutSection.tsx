"use client";

import { motion } from "framer-motion";
import { Code, Brain, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 min-h-screen">
      {/* Background Accent - Enhanced & Responsive */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-[50%] sm:h-[60%] md:h-[70%] 
                        bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-pink-100/40 
                        dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/30 
                        blur-3xl rounded-full"
        />
        {/* Additional glow effect - lebih responsif */}
        <div
          className="absolute w-[50%] sm:w-[40%] h-[40%] bg-gradient-to-r from-cyan-100/20 to-blue-100/20 
                        dark:from-cyan-900/10 dark:to-blue-900/10 blur-3xl rounded-full 
                        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Content Card */}
      <motion.div
        className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md 
                   shadow-xl rounded-2xl p-5 sm:p-7 md:p-10 
                   max-w-4xl w-full text-center sm:text-left
                   border border-white/20 dark:border-gray-700/30
                   hover:shadow-2xl transition-shadow duration-300
                   mx-2 sm:mx-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header with Icon */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h3>
        </div>

        {/* Divider Accent - Enhanced & Responsive */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Paragraphs with Icons */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <motion.div
            className="flex gap-2 sm:gap-3 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-0.5 sm:mt-1 p-1 sm:p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I am a{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Backend-Focused Full-Stack Developer
              </span>{" "}
              with a primary focus on backend application development, database
              management, API development, and system performance optimization
              to build efficient, reliable, and scalable systems. I also have
              hands-on experience in frontend development using Next.js and
              TypeScript, allowing me to develop and integrate applications
              across the full stack while maintaining my primary focus on
              backend development.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-2 sm:gap-3 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-0.5 sm:mt-1 p-1 sm:p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I am also interested in{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Machine Learning
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Data Mining
              </span>
              , which allows me to explore data processing and analytical
              approaches to gain valuable insights. I am always enthusiastic
              about learning new technologies and taking on challenges that help
              me improve my technical skills. With an analytical mindset and a
              problem-solving approach, I aim to contribute to development teams
              by building reliable and well-integrated applications.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-2 sm:gap-3 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-0.5 sm:mt-1 p-1 sm:p-1.5 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
              <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600 dark:text-pink-400" />
            </div>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
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
