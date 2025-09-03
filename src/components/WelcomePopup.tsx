"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface WelcomePopupProps {
  message?: string; // teks utama (default "Welcome")
  description?: string; // teks deskripsi
  autoClose?: number; // waktu auto close dalam ms (default 3000)
}

export default function WelcomePopup({
  message = "Welcome",
  description = "Hopefully you find the worker you need.",
  autoClose = 3000,
}: WelcomePopupProps) {
  const [show, setShow] = useState(true);
  const particles = Array.from({ length: 20 });

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), autoClose);
    return () => clearTimeout(timer);
  }, [autoClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 w-[450px] text-center overflow-hidden transition-colors duration-300"
      >
        {/* Tombol Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-200" />
        </button>

        {/* Split Text Animasi */}
        <div className="flex justify-center space-x-1 text-4xl font-extrabold text-gray-800 dark:text-gray-100">
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

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
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
