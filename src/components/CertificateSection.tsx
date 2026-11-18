"use client";

import { certificates } from "@/data/certificates";
import { Certificate } from "@/interface/Certificate";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  // Lock body scroll saat modal terbuka
  useEffect(() => {
    if (selectedCert || zoomedImage) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [selectedCert, zoomedImage]);

  // Tutup modal dengan ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomedImage) setZoomedImage(null);
        else if (selectedCert) setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedCert, zoomedImage]);

  return (
    <section
      id="certificates"
      className="max-w-6xl mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12 text-center"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Certificates
        </h3>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </motion.div>

      {/* Grid Card */}
      <div
        className={`
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5 sm:gap-6 lg:gap-8
          justify-items-center
          items-stretch
          w-full
          mx-auto
          ${certCount === 1 ? "max-w-sm" : ""}
          ${certCount === 2 ? "max-w-3xl" : ""}
          ${certCount >= 3 ? "max-w-6xl" : ""}
        `}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setSelectedCert(cert)}
            className="
              group relative
              bg-white dark:bg-gray-800/80
              backdrop-blur-sm
              rounded-2xl
              shadow-lg hover:shadow-2xl
              transition-all duration-500
              p-3 sm:p-4 md:p-5
              cursor-pointer
              w-full
              max-w-sm
              overflow-hidden
              border border-gray-100 dark:border-gray-700/50
              h-full
            "
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />

            {/* Image */}
            <div className="overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-gray-700">
              <Image
                src={cert.images[0]}
                alt={cert.title}
                width={300}
                height={180}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-40 sm:h-44 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Content */}
            <div className="mt-4 sm:mt-5 text-center relative z-10">
              <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                {cert.title}
              </h4>

              <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8"
          >
            {/* Tombol close */}
            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Tutup"
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 p-2 sm:p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Judul */}
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 md:mb-8 text-center pr-10 sm:pr-12">
              {selectedCert.title}
            </h4>

            {/* Mobile: Carousel dengan Zoom */}
            <div className="block md:hidden">
              <Swiper
                spaceBetween={12}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                zoom={true}
                modules={[Pagination, Navigation, Zoom]}
                className="rounded-xl overflow-hidden pb-10"
              >
                {selectedCert.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="swiper-zoom-container">
                      <Image
                        src={img}
                        alt={`${selectedCert.title} - ${idx + 1}`}
                        width={500}
                        height={400}
                        sizes="100vw"
                        className="rounded-xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop: Grid + Zoom */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {selectedCert.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setZoomedImage(img)}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-zoom-in overflow-hidden rounded-xl shadow-md ring-1 ring-gray-200 dark:ring-gray-700"
                >
                  <Image
                    src={img}
                    alt={`${selectedCert.title} - ${idx + 1}`}
                    width={400}
                    height={300}
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>

            <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center leading-relaxed max-w-2xl mx-auto">
              {selectedCert.description}
            </p>
          </motion.div>
        </div>
      )}

      {/* Zoomed image overlay */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center cursor-zoom-out p-3 sm:p-4"
          onClick={() => setZoomedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-[90vw] h-[90vh]"
          >
            <Image
              src={zoomedImage}
              alt="Zoomed certificate"
              fill
              sizes="90vw"
              className="object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
