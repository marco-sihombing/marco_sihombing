"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

    try {
      const res = await fetch(`${API_URL}/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Status: ${res.status}, Response: ${text}`);
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
        console.error("Error sending message:", err);
      } else {
        setErrorMessage("An unexpected error occurred");
        console.error("Unknown error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
        setErrorMessage(null);
      }, 3000); // 3 detik
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-800 py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-3">
            Get In Touch
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Contact Me
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Have a question? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Sosial Media - 2 kolom */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/089664686245"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 p-3 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp className="text-xl text-green-500" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  WhatsApp
                </span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:marcosihombing72@gmail.com"
                className="group flex flex-col items-center gap-1 p-3 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FiMail className="text-xl text-red-500" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Email
                </span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/marcosihombing/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 p-3 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FiLinkedin className="text-xl text-blue-600" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  LinkedIn
                </span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/marco-sihombing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 p-3 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-2 bg-gray-200 dark:bg-gray-600/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FiGithub className="text-xl text-gray-800 dark:text-gray-200" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  GitHub
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Form - 3 kolom */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
              <motion.form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-3 border-2 rounded-xl bg-gray-50 dark:bg-gray-800 
                    border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                    whileFocus={{ scale: 1.02 }}
                  />

                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 border-2 rounded-xl bg-gray-50 dark:bg-gray-800 
                    border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.textarea
                  name="message"
                  placeholder="Write your message..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 rounded-xl bg-gray-50 dark:bg-gray-800 
                  border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm"
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>

        {/* Popup Notification */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>Message sent!</span>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 bg-red-500 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <span>{errorMessage || "Failed to send."}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
