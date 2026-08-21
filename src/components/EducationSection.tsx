"use client";

import { education } from "@/data/education";
import { Education } from "@/interface/Education";
import { motion } from "framer-motion";
import { Calendar, Award, MapPin } from "lucide-react";

function TimelineItem({ edu, isLeft }: { edu: Education; isLeft: boolean }) {
  return (
    <motion.li
      className={`relative flex flex-col sm:flex-row items-center ${
        isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
      } gap-4 sm:gap-0 group`}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Dot di mobile - di kiri */}
      <div className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/30 z-10">
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
      </div>

      {/* Dot di desktop - di tengah */}
      <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/30 z-10">
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
        <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full" />
      </div>

      {/* Content - Mobile & Desktop */}
      <div
        className={`w-full sm:w-[calc(50%-2rem)] ${
          isLeft ? "sm:pr-6 sm:text-right" : "sm:pl-6 sm:text-left"
        } pl-6 sm:pl-0`}
      >
        <div
          className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
            isLeft
              ? "hover:border-blue-400 dark:hover:border-blue-500"
              : "hover:border-purple-400 dark:hover:border-purple-500"
          }`}
        >
          <p className="font-bold text-gray-900 dark:text-gray-100 text-base sm:text-lg">
            {edu.school}
          </p>
          <div
            className={`flex items-center gap-2 mt-1 ${
              isLeft ? "justify-end" : "justify-start"
            }`}
          >
            <Award
              className={`w-4 h-4 ${isLeft ? "text-blue-500" : "text-purple-500"}`}
            />
            <p
              className={`text-sm font-medium ${
                isLeft
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-purple-600 dark:text-purple-400"
              }`}
            >
              {edu.major}
            </p>
          </div>
          <div
            className={`flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400 ${
              isLeft ? "justify-end" : "justify-start"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{edu.period}</span>
          </div>
          {edu.location && (
            <div
              className={`flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-500 ${
                isLeft ? "justify-end" : "justify-start"
              }`}
            >
              <MapPin className="w-3 h-3" />
              <span>{edu.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Empty space for alignment - Desktop only */}
      <div className="hidden sm:block w-[calc(50%-2rem)]" />
    </motion.li>
  );
}

export default function EducationSection() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <motion.h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Educational Background
          </motion.h3>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 text-xs sm:text-sm">
          My academic journey and qualifications
        </p>
      </motion.div>

      <div className="relative">
        {/* Garis tengah - hidden di mobile */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 -translate-x-1/2 rounded-full" />
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-0.5 bg-white/20 dark:bg-gray-700/30 -translate-x-1/2" />

        {/* Garis vertikal di mobile - di kiri */}
        <div className="sm:hidden absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full" />

        <ul className="space-y-6 sm:space-y-12">
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
