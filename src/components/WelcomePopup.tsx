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

  // 🔒 Lock scroll saat popup muncul
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // reset
    }

    return () => {
      document.body.style.overflow = ""; // pastikan reset
    };
  }, [show]);

  // Auto close popup
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), autoClose);
    return () => clearTimeout(timer);
  }, [autoClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl 
                   p-6 sm:p-10 w-full max-w-md text-center overflow-hidden 
                   transition-colors duration-300"
      >
        {/* Tombol Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 
                     p-1.5 sm:p-2 rounded-full 
                     hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-200" />
        </button>

        {/* Split Text Animasi */}
        <div className="flex justify-center space-x-1 text-2xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
          {message.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, type: "spring" }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 px-2">
          {description}
        </p>

        {/* Confetti Particles */}
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
              x: (Math.random() - 0.5) * 300,
              y: (Math.random() - 0.5) * 300,
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
