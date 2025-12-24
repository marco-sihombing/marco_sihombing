"use client";

import { projects } from "@/data/projects";
import { Project } from "@/interface/Project";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ProjectSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

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
          {projects.map((project: Project, index: number) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={project.title}
                layout
                className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                {/* Klik gambar / title → link */}
                <a
                  href={project.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </a>

                <div className="p-4">
                  <a
                    href={project.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h4>
                  </a>

                  {/* Description */}
                  <motion.p
                    layout
                    className={`text-sm text-gray-600 dark:text-gray-300 mt-2 ${
                      isExpanded ? "line-clamp-none" : "line-clamp-3"
                    }`}
                  >
                    {project.description}
                  </motion.p>

                  {/* Read more */}
                  {project.description.length > 120 && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                      className="mt-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
