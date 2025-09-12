"use client";

import { Welcome } from "@/interface/Welcome";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function WelcomePopup({
  message = "Welcome",
  description = "Hopefully you find the worker you need.",
  autoClose = 3000,
}: Welcome) {
  const [show, setShow] = useState(true);
  const particles = Array.from({ length: 20 });
  const [isMobile, setIsMobile] = useState(false);

  // 🔒 Lock scroll
  useEffect(() => {
    if (show) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [show]);

  // Auto close
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), autoClose);
    return () => clearTimeout(timer);
  }, [autoClose]);

  // ✅ Deteksi mobile + update saat resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    if (typeof window !== "undefined") {
      handleResize(); // cek pertama kali
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-3 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl 
                   p-5 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg 
                   text-center overflow-hidden transition-colors duration-300"
      >
        {/* Tombol Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 md:top-4 md:right-4 
                     p-1.5 md:p-2 rounded-full 
                     hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-200" />
        </button>

        {/* Animasi teks judul */}
        <div className="flex justify-center space-x-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
          {message.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, type: "spring" }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Deskripsi */}
        <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 px-2 text-balance">
          {description}
        </p>

        {/* Confetti */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: ["#f87171", "#facc15", "#34d399", "#60a5fa"][
                i % 4
              ],
              top: "50%",
              left: "50%",
            }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: (Math.random() - 0.5) * (isMobile ? 80 : 150),
              y: (Math.random() - 0.5) * (isMobile ? 80 : 150),
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
