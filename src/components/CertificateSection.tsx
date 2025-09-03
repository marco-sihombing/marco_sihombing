"use client";

import { certificates } from "@/data/certificates";
import { Certificate } from "@/interface/Certificate";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CertificateSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="max-w-6xl mx-auto py-20 px-6">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Certificates
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-colors duration-300 cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={200}
              height={100}
              className="mx-auto"
            />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full p-6 flex flex-col items-center"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </button>

            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {selectedCert.title}
            </h4>

            <Image
              src={selectedCert.image}
              alt={selectedCert.title}
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />

            <p className="mt-4 text-gray-700 dark:text-gray-300 text-center">
              {selectedCert.description}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
