"use client";

import { experiences } from "@/data/experiences"; // sesuaikan path
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ExperienceSection() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Work & Internships History
      </h3>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true} // pastikan true
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {experiences.map((exp, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 h-full flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Image
                src={exp.logo}
                alt={exp.title}
                width={80}
                height={80}
                className="mb-4 rounded-full"
              />
              <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                {exp.title}
              </h4>
              <p className="text-sm text-blue-500 font-medium">{exp.role}</p>
              <p className="text-xs text-gray-500 mb-3">{exp.period}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
