"use client";
import AboutSection from "@/components/AboutSection";
import CertificateSection from "@/components/CertificateSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import WelcomePopup from "@/components/WelcomePopup";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  Award,
  Briefcase,
  Code,
  FileDown,
  Folder,
  GraduationCap,
  Home as HomeIcon,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [overlay, setOverlay] = useState(false);

  // scroll to top / bottom
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scroll down → hide
      } else {
        setShowNav(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Disable klik kanan
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable shortcut tertentu
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      const forbidden =
        key === "f12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        (e.ctrlKey && ["u", "s", "c", "v", "x"].includes(key));

      if (forbidden) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (e.key === "PrintScreen") {
        setOverlay(true);
        // Hilangkan overlay setelah beberapa detik
        setTimeout(() => setOverlay(false), 2000);
      }
    };

    // Disable double click
    const handleDoubleClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable drag & drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dblclick", handleDoubleClick);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("drop", handleDrop);
    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dblclick", handleDoubleClick);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("drop", handleDrop);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, []);

  return (
    <main className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <WelcomePopup
        message="Welcome"
        description="Hopefully you find the worker you need."
        autoClose={4000}
      />

      <noscript>
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            fontSize: "1.2rem",
            textAlign: "center",
            padding: "20px",
          }}
        >
          JavaScript is disabled. Enable JavaScript for the website to function
          properly.
        </div>
      </noscript>

      <>
        {overlay && (
          <div className="fixed inset-0 bg-black z-[9999] opacity-90 flex items-center justify-center">
          <p>Sorry, but please don't take screenshots</p>
          </div>
        )}
      </>

      {/* Header (desktop only) */}
      <header
        className={`hidden md:flex justify-between items-center px-10 py-6 
  bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg sticky top-0 z-50 
  transition-all duration-500 ease-in-out shadow-md
  ${
    showNav
      ? "translate-y-0 opacity-100 shadow-lg"
      : "-translate-y-full opacity-0"
  }`}
      >
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Marco Sihombing
        </h1>

        {/* Nav */}
        <nav className="flex gap-8 text-sm font-medium items-center">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skill" },
            { href: "#education", label: "Education" },
            { href: "#projects", label: "Project" },
            { href: "#certificates", label: "Certificates" },
            { href: "#experience", label: "Work and Internship History" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group transition-colors duration-300 hover:text-blue-500"
            >
              {item.label}
              {/* animasi underline */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Button CV (lebih kecil & proporsional) */}
          <a
            href="/pdf/Marco-Sihombing.pdf"
            className="px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 
      text-white font-medium shadow-md hover:shadow-lg hover:scale-105 
      active:scale-95 transition-transform duration-300 text-sm"
          >
            Download CV
          </a>
        </nav>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-lg z-50 flex justify-around py-2 text-xs transition-transform duration-300 ${
          showNav ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a href="#about" className="flex flex-col items-center">
          <HomeIcon size={18} />
          Home
        </a>
        <a href="#skills" className="flex flex-col items-center">
          <Code size={18} />
          Skill
        </a>
        <a href="#education" className="flex flex-col items-center">
          <GraduationCap size={18} />
          Edu
        </a>
        <a href="#projects" className="flex flex-col items-center">
          <Folder size={18} />
          Proj
        </a>
        <a href="#certificates" className="flex flex-col items-center">
          <Award size={18} />
          Cert
        </a>
        <a href="#experience" className="flex flex-col items-center">
          <Briefcase size={18} />
          Exp
        </a>
        <a href="#contact" className="flex flex-col items-center">
          <Mail size={18} />
          Contact
        </a>
        {/* Tambahan Unduh CV */}
        <a
          href="/pdf/Marco-Sihombing.pdf"
          download
          className="flex flex-col items-center"
        >
          <FileDown size={18} />
          CV
        </a>
      </nav>

      {/* Scroll Buttons */}
      <div className="fixed bottom-24 right-5 flex flex-col gap-3 z-50">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full 
               bg-blue-600 text-white shadow-lg hover:bg-blue-700 
               dark:bg-blue-500 dark:hover:bg-blue-400 
               transition-colors duration-300"
        >
          <ArrowUp size={20} />
        </button>
        <button
          onClick={scrollToBottom}
          className="p-3 rounded-full 
               bg-blue-600 text-white shadow-lg hover:bg-blue-700 
               dark:bg-blue-500 dark:hover:bg-blue-400 
               transition-colors duration-300"
        >
          <ArrowDown size={20} />
        </button>
      </div>

      {/* Hero */}
      <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-blue-50 via-white to-transparent dark:from-gray-900 dark:via-gray-800" />

        {/* Content */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-2 items-center 
               max-w-6xl mx-auto w-full
               px-6 sm:px-8 md:px-12 
               gap-10 md:gap-16
               pt-16 sm:pt-20 md:pt-0 
               pb-28 sm:pb-32 md:pb-0"
        >
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
              Marco{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Sihombing
              </span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
              Backend Developer • Undergraduate
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              <TypeAnimation
                sequence={[
                  "Backend Developer",
                  2000,
                  "Optimizing Systems & Databases",
                  2000,
                  "Learning Machine Learning & Data Mining",
                  2000,
                  "Open to New Tech",
                  2000,
                  "Team & Solo Work",
                  2000,
                  "Punctual & Detail-Oriented",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-600 dark:text-blue-400 font-semibold"
              />
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-600 dark:text-gray-300">
              <a
                href="mailto:marcosihombing72@gmail.com"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FiMail />
              </a>
              <a
                href="https://github.com/marco-sihombing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/marcosihombing/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors duration-300"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://wa.me/089664686245"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="flex justify-center md:justify-center relative -top-4"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-3xl scale-110" />
              <Image
                src="/photo1.png"
                alt="Profile"
                width={260}
                height={260}
                className="relative rounded-full shadow-2xl border-4 border-gray-200 dark:border-gray-700 
                     w-44 sm:w-60 md:w-72 lg:w-[19rem] h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-300 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-xs sm:text-sm"
          >
            <span>Scroll Down</span>
            <ArrowDown className="mt-1 animate-bounce" size={18} />
          </a>
        </motion.div>
      </section>

      {/* Tentang Saya */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Skill */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Riwayat Pendidikan */}
      <section id="education">
        <EducationSection />
      </section>

      {/* Project */}
      <section id="projects">
        <ProjectSection />
      </section>

      {/* Sertifikat */}
      <section id="certificates">
        <CertificateSection />
      </section>

      {/* Experience */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* Kontak */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 py-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
          {/* Info */}
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Marco Sihombing. All rights reserved.
          </p>

          {/* Icons */}
          {/* Icons */}
          <div className="flex space-x-5 text-lg">
            <a
              href="mailto:marcosihombing72@gmail.com"
              className="hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <FiMail />
            </a>
            <a
              href="https://wa.me/089664686245"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/marco-sihombing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/marcosihombing/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
