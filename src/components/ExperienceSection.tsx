"use client";

import { experiences } from "@/data/experiences";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative max-w-6xl mx-auto py-24 px-6 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Title */}
      <motion.h3
        className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-900 dark:text-white text-center md:text-left tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Work & Internship Experience
      </motion.h3>

      <motion.div
        className="mx-auto md:mx-0 w-20 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-12"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      />

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14 !overflow-visible"
      >
        {experiences.map((exp, i) => (
          <SwiperSlide key={i} className="h-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 p-7 flex flex-col ring-1 ring-gray-100 dark:ring-gray-800"
            >
              {/* Logo */}
              <div className="flex justify-center mb-5">
                <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-inner ring-1 ring-gray-200 dark:ring-gray-600 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500">
                  <Image
                    src={exp.logo}
                    alt={exp.title}
                    width={56}
                    height={56}
                    className="object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center flex-1 flex flex-col">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  {exp.title}
                </h4>

                <p className="mt-1.5 text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {exp.role}
                </p>

                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-1 mb-5 tracking-wide uppercase">
                  {exp.period}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4 md:line-clamp-5">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
