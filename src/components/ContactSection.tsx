"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
      const res = await fetch("${API_URL}/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Gagal mengirim pesan");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

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
          onSubmit={handleSubmit}
          className="grid gap-5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Input Nama */}
          <motion.input
            type="text"
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg bg-white dark:bg-gray-700 
              border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />

          {/* Input Email */}
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg bg-white dark:bg-gray-700 
              border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />

          {/* Textarea Pesan */}
          <motion.textarea
            name="message"
            placeholder="Pesan"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg bg-white dark:bg-gray-700 
              border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />

          {/* Tombol Kirim */}
          <motion.button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md 
              hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Mengirim..." : "Kirim"}
          </motion.button>
        </motion.form>

        {/* Popup Notification */}
        {status === "success" && (
          <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-bounce">
            ✅ Pesan berhasil dikirim!
          </div>
        )}
        {status === "error" && (
          <div className="fixed bottom-6 right-6 bg-red-500 text-white px-4 py-2 rounded shadow-lg animate-bounce">
            ❌ Gagal mengirim pesan. Coba lagi.
          </div>
        )}
      </div>
    </section>
  );
}
