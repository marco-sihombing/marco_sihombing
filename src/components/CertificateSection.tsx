"use client";

import { certificates } from "@/data/certificates";
import { Certificate } from "@/interface/Certificate";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CertificateSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const certCount = certificates.length;

  return (
    <section id="certificates" className="max-w-6xl mx-auto py-20 px-6">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Certificates
      </h3>

      {/* Grid Card */}
      <div
        className={`
    grid gap-6
    ${
      certCount === 1
        ? "grid-cols-1 justify-items-center"
        : certCount === 2
        ? "grid-cols-1 sm:grid-cols-2 justify-center max-w-4xl mx-auto"
        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    }
  `}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-5 cursor-pointer w-full max-w-sm"
            onClick={() => setSelectedCert(cert)}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src={cert.images[0]}
                alt={cert.title}
                width={300}
                height={180}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="mt-4 text-center">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                {cert.title}
              </h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {cert.description}
              </p>
            </div>
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

            {/* Mobile: Carousel dengan Zoom */}
            <div className="block md:hidden">
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                zoom={true}
                modules={[Pagination, Navigation, Zoom]}
                className="rounded-lg"
              >
                {selectedCert.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="swiper-zoom-container">
                      <Image
                        src={img}
                        alt={`${selectedCert.title} - ${idx + 1}`}
                        width={500}
                        height={400}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop: Grid + Zoom */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCert.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setZoomedImage(img)}
                  className="cursor-zoom-in"
                >
                  <Image
                    src={img}
                    alt={`${selectedCert.title} - ${idx + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {zoomedImage && (
              <div
                className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center cursor-zoom-out"
                onClick={() => setZoomedImage(null)}
              >
                <motion.img
                  src={zoomedImage}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
                />
              </div>
            )}

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-center">
              {selectedCert.description}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
