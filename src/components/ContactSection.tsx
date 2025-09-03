"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-800 py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h3
          className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h3>

        <motion.form
          className="grid gap-5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Input Nama */}
          <motion.input
            type="text"
            placeholder="Nama"
            className="p-3 border rounded-lg bg-white dark:bg-gray-700 
              border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />

          {/* Input Email */}
          <motion.input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg bg-white dark:bg-gray-700 
              border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />

          {/* Textarea Pesan */}
          <motion.textarea
            placeholder="Pesan"
            rows={4}
            className="p-3 border rounded-lg bg-white dark:bg-gray-700 
              border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />

          {/* Tombol Kirim */}
          <motion.button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md 
              hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kirim
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
