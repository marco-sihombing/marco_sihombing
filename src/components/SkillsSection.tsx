"use client";

import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Tech Stack
        </h3>

        {/* Baris 1 - ke kiri */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false }}
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
                className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg text-center flex flex-col items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon}
                <p
                  className="mt-3 font-semibold text-gray-800 dark:text-gray-200 
               text-sm sm:text-sm md:text-base lg:text-sm
               break-words text-center px-2 max-w-[100px]"
                >
                  {skill.name}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
