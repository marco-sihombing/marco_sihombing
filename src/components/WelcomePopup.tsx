"use client";

import { Welcome } from "@/interface/Welcome";
import { motion } from "framer-motion";
import { X, Sparkles, PartyPopper, Hand } from "lucide-react";
import { useEffect, useState } from "react";

export default function WelcomePopup({
  message = "Welcome",
  description = "Let's connect and explore what we can build together.",
  autoClose = 5000,
}: Welcome) {
  const [show, setShow] = useState(true);
  const particles = Array.from({ length: 30 });
  const [isMobile, setIsMobile] = useState(false);

  // Lock scroll
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

  // Deteksi mobile + update saat resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    if (typeof window !== "undefined") {
      handleResize();
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-3 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl 
                   p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg 
                   text-center overflow-hidden border border-white/20 dark:border-gray-700/30"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl" />
        </div>

        {/* Tombol Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 md:top-4 md:right-4 
                     p-2 rounded-full 
                     bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm
                     hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300
                     hover:scale-110 hover:rotate-90 z-10"
        >
          <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600 dark:text-gray-200" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 200,
              delay: 0.2,
            }}
            className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg shadow-blue-500/20"
          >
            <Hand className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
        </div>

        {/* Animasi teks judul */}
        <div className="flex justify-center space-x-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 relative z-10">
          {message.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: index * 0.07,
                type: "spring",
                damping: 15,
                stiffness: 200,
              }}
              className="inline-block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Deskripsi dengan Icon */}
        <div className="relative z-10 mt-3 sm:mt-5">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 px-2 text-balance">
              {description}
            </p>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: autoClose / 1000, ease: "linear" }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-3xl"
        />

        {/* Confetti - Enhanced */}
        {particles.map((_, i) => {
          const colors = [
            "#f87171",
            "#facc15",
            "#34d399",
            "#60a5fa",
            "#a78bfa",
            "#fb923c",
            "#f472b6",
          ];
          const size = Math.random() * 8 + 4;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: colors[i % colors.length],
                width: size,
                height: size,
                top: "50%",
                left: "50%",
                boxShadow: `0 0 10px ${colors[i % colors.length]}40`,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: (Math.random() - 0.5) * (isMobile ? 120 : 250),
                y: (Math.random() - 0.5) * (isMobile ? 120 : 250),
                opacity: 0,
                scale: 0,
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 1.8 + Math.random() * 0.5,
                ease: "easeOut",
                delay: 0.3 + Math.random() * 0.2,
              }}
            />
          );
        })}

        {/* Party Popper Decoration */}
        <div className="absolute bottom-4 left-4 text-2xl opacity-20 select-none">
          🎉
        </div>
        <div className="absolute top-4 left-4 text-xl opacity-20 select-none">
          ✨
        </div>
        <div className="absolute bottom-4 right-4 text-xl opacity-20 select-none">
          🎊
        </div>

        {/* Small close hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="relative z-10 mt-4 text-[10px] text-gray-400 dark:text-gray-500 select-none"
        >
          Click anywhere outside or press the ✕ button to close
        </motion.p>
      </motion.div>
    </div>
  );
}
