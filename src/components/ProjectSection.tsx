"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h3
          className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h3>

        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Image
                src="/project1.png"
                alt="Project 1"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-gray-900 dark:text-gray-100">
                  Sistem Buku Tamu BMKG
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Aplikasi web untuk mencatat kunjungan tamu, terintegrasi
                  dengan Supabase & NestJS.
                </p>
              </div>
            </motion.div>
          </a>

          {/* Project 2 */}
          <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Image
                src="/project2.png"
                alt="Project 2"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-gray-900 dark:text-gray-100">
                  Dashboard Admin
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Dashboard interaktif dengan statistik tamu & ekspor data
                  PDF/Excel.
                </p>
              </div>
            </motion.div>
          </a>

          {/* Project 3 */}
          <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Image
                src="/project3.png"
                alt="Project 3"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-gray-900 dark:text-gray-100">
                  Flight & Weather Sync
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  API sinkronisasi data pesawat & cuaca berbasis Supabase +
                  NestJS.
                </p>
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
