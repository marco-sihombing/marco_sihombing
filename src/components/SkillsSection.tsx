"use client";

import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { skills } from "@/data/skills";
import { Sparkles } from "lucide-react";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 dark:bg-blue-400/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/5 dark:bg-purple-400/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Title with Icon */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Tech Stack
            </h3>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Baris 1 - ke kiri */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop
          autoplay={{ delay: 1, disableOnInteraction: false }}
          speed={3000}
          className="py-8"
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {skills.map((skill, i) => (
            <SwiperSlide key={`row1-${i}`}>
              <motion.div
                className="group p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-2xl text-center flex flex-col items-center justify-center border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Icon Container with Gradient */}
                <div className="relative">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl">
                      {skill.icon}
                    </div>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500" />
                </div>

                <p
                  className="mt-4 font-semibold text-gray-800 dark:text-gray-200 
                    text-sm sm:text-sm md:text-base lg:text-sm
                    break-words text-center px-2 max-w-[100px]
                    group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                >
                  {skill.name}
                </p>

                {/* Decorative dot */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Skills Counter */}
        <motion.div
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>{skills.length} Technologies</span>
          </div>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Always Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
