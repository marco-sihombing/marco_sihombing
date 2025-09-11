"use client";

import { certificates } from "@/data/certificates";
import { Certificate } from "@/interface/Certificate";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// import Swiper + modul tambahan
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CertificateSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="max-w-6xl mx-auto py-20 px-6">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Certificates
      </h3>

      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <Image
              src={cert.images[0]}
              alt={cert.title}
              width={200}
              height={120}
              className="mx-auto rounded-md"
            />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full p-6"
          >
            {/* Tombol close */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </button>

            {/* Judul */}
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              {selectedCert.title}
            </h4>

            {/* Mobile: pakai Swiper (carousel) */}
            <div className="block md:hidden">
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                modules={[Pagination, Navigation]}
                className="rounded-lg"
              >
                {selectedCert.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={img}
                      alt={`${selectedCert.title} - ${idx + 1}`}
                      width={500}
                      height={400}
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop: tetap grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCert.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${selectedCert.title} - ${idx + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              ))}
            </div>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-center">
              {selectedCert.description}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
