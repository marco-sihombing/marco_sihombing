"use client";

import { education } from "@/data/education";
import { Education } from "@/interface/Education";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

function TimelineItem({ edu, isLeft }: { edu: Education; isLeft: boolean }) {
  return (
    <motion.li
      className={`flex ${isLeft ? "justify-start" : "justify-end"} group`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Spacer kiri */}
      <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : ""}`}>
        {isLeft && (
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500">
            <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
              {edu.school}
            </p>
            <div className="flex items-center justify-end gap-2 mt-1">
              <Award className="w-4 h-4 text-blue-500" />
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {edu.major}
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{edu.period}</span>
            </div>
            {edu.location && (
              <div className="flex items-center justify-end gap-2 mt-1 text-xs text-gray-500 dark:text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>{edu.location}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Dot dengan efek */}
      <div className="relative flex flex-col items-center">
        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-10 relative top-2 -ml-2.5 shadow-lg shadow-blue-500/30 group-hover:scale-125 transition-transform duration-300">
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
        </div>
      </div>

      {/* Konten kanan */}
      <div className={`w-1/2 ${!isLeft ? "pl-8 text-left" : ""}`}>
        {!isLeft && (
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-purple-400 dark:hover:border-purple-500">
            <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
              {edu.school}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Award className="w-4 h-4 text-purple-500" />
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                {edu.major}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{edu.period}</span>
            </div>
            {edu.location && (
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>{edu.location}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default function EducationSection() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto py-20 px-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Header dengan Icon */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <motion.h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Educational Background
          </motion.h3>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8 text-sm">
          My academic journey and qualifications
        </p>
      </motion.div>

      <div className="relative">
        {/* Garis tengah dengan gradien */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 -translate-x-1/2 rounded-full" />

        {/* Garis tengah dekoratif */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/20 dark:bg-gray-700/30 -translate-x-1/2" />

        <ul className="space-y-12">
          {education.map((edu, index) => (
            <TimelineItem
              key={`${edu.school}-${edu.period}`}
              edu={edu}
              isLeft={index % 2 === 0}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
