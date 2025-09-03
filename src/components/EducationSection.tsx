"use client";

import { education } from "@/data/education";
import { Education } from "@/interface/Education";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section id="education" className="max-w-6xl mx-auto py-20 px-6">
      <motion.h3
        className="text-2xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Educational Background
      </motion.h3>

      <div className="relative">
        {/* Garis tengah */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2" />

        <ul className="space-y-12">
          {education.map((edu: Education, index: number) => (
            <motion.li
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {index % 2 === 0 ? (
                <>
                  {/* Kiri */}
                  <div className="w-1/2 pr-8 text-right">
                    <p className="font-semibold">{edu.school}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.major} - {edu.period}
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full z-10 relative top-2 -ml-2" />
                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  {/* Kanan */}
                  <div className="w-1/2" />
                  <div className="w-4 h-4 bg-blue-500 rounded-full z-10 relative top-2 -ml-2" />
                  <div className="w-1/2 pl-8 text-left">
                    <p className="font-semibold">{edu.school}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.major} - {edu.period}
                    </p>
                  </div>
                </>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
