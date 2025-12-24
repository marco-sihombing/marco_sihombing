"use client";

import { experiences } from "@/data/experiences";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 px-6">
      {/* Title */}
      <h3 className="text-2xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center md:text-left">
        Work & Internship Experience
      </h3>

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
        className="pb-12"
      >
        {experiences.map((exp, i) => (
          <SwiperSlide key={i} className="h-auto">
            <div className="group h-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col">
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 group-hover:scale-105 transition-transform">
                  <Image
                    src={exp.logo}
                    alt={exp.title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center flex-1 flex flex-col">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {exp.title}
                </h4>

                <p className="mt-1 text-sm font-medium text-blue-500">
                  {exp.role}
                </p>

                <p className="text-xs text-gray-500 mb-4">{exp.period}</p>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4 md:line-clamp-5">
                  {exp.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
