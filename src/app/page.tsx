"use client";
import { Certificate } from "@/interface/Certificate";
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
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaJava, FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiBootstrap,
  // Languages
  SiC,
  SiCodeigniter,
  SiCplusplus,
  // Styling
  SiCss3,
  // DevOps
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiKubernetes,
  // Frameworks & Libraries
  SiLaravel,
  SiMariadb,
  SiMongodb,
  // Databases
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSupabase,
  SiTailwindcss,
  // Data Science & ML
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const text = useState("Welcome");
  const particles = Array.from({ length: 20 });

  // scroll to top / bottom
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  // Hide navbar on scroll down, show on scroll up
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

  // Disable klik kanan & shortcut DevTools
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && ["U", "S", "C", "V", "X"].includes(e.key))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Auto close setelah 3 detik
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    // 🚀 Languages
    { name: "C", icon: <SiC className="text-blue-600 text-4xl mx-auto" /> },
    {
      name: "C++",
      icon: <SiCplusplus className="text-blue-500 text-4xl mx-auto" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-red-600 text-4xl mx-auto" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 text-4xl mx-auto" />,
    },
    {
      name: "PHP",
      icon: <SiPhp className="text-indigo-500 text-4xl mx-auto" />,
    },
    {
      name: "Python",
      icon: <SiPython className="text-blue-400 text-4xl mx-auto" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 text-4xl mx-auto" />,
    },

    // 🎨 Styling
    {
      name: "CSS3",
      icon: <SiCss3 className="text-blue-500 text-4xl mx-auto" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-600 text-4xl mx-auto" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-teal-400 text-4xl mx-auto" />,
    },

    // 🖥 Frameworks
    {
      name: "Laravel",
      icon: <SiLaravel className="text-red-600 text-4xl mx-auto" />,
    },
    {
      name: "CodeIgniter",
      icon: <SiCodeigniter className="text-orange-600 text-4xl mx-auto" />,
    },
    {
      name: "React",
      icon: <SiReact className="text-cyan-400 text-4xl mx-auto" />,
    },
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs className="text-gray-900 dark:text-white text-4xl mx-auto" />
      ),
    },
    {
      name: "Expo",
      icon: <SiExpo className="text-black dark:text-white text-4xl mx-auto" />,
    },
    {
      name: "NodeJS",
      icon: <SiNodedotjs className="text-green-600 text-4xl mx-auto" />,
    },
    {
      name: "Express.js",
      icon: (
        <SiExpress className="text-gray-700 dark:text-gray-200 text-4xl mx-auto" />
      ),
    },
    {
      name: "NestJS",
      icon: <SiNestjs className="text-red-500 text-4xl mx-auto" />,
    },

    // 📊 Databases
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-500 text-4xl mx-auto" />,
    },
    {
      name: "MariaDB",
      icon: <SiMariadb className="text-blue-700 text-4xl mx-auto" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-4xl mx-auto" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 text-4xl mx-auto" />,
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-emerald-500 text-4xl mx-auto" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-700 text-4xl mx-auto" />,
    },

    // 🛠 DevOps
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-400 text-4xl mx-auto" />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="text-blue-600 text-4xl mx-auto" />,
    },
    {
      name: "Prometheus",
      icon: <SiPrometheus className="text-orange-500 text-4xl mx-auto" />,
    },

    // 📚 Data Science & ML
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="text-orange-500 text-4xl mx-auto" />,
    },
    {
      name: "Pandas",
      icon: <SiPandas className="text-purple-600 text-4xl mx-auto" />,
    },
    {
      name: "NumPy",
      icon: <SiNumpy className="text-blue-500 text-4xl mx-auto" />,
    },
    {
      name: "Scikit-learn",
      icon: <SiScikitlearn className="text-orange-400 text-4xl mx-auto" />,
    },
  ];

  const experiences = [
    {
      title: "Magang BMKG Bengkulu",
      role: "Backend Developer",
      period: "Feb 2024 - Jul 2024",
      description:
        "Mengembangkan backend service untuk sinkronisasi data cuaca & penerbangan.",
      logo: "/bmkg.png",
    },
    {
      title: "Freelance Project",
      role: "Fullstack Developer",
      period: "Agu 2024 - Sekarang",
      description:
        "Membangun aplikasi web dengan Next.js dan NestJS untuk client startup.",
      logo: "/freelance.png",
    },
    {
      title: "Kampus UNJANI",
      role: "Asisten Praktikum",
      period: "2023",
      description:
        "Membimbing mahasiswa dalam praktikum basis data dan pemrograman web.",
      logo: "/unjani.png",
    },
    {
      title: "Kampus UNJANI",
      role: "Asisten Praktikum",
      period: "2023",
      description:
        "Membimbing mahasiswa dalam praktikum basis data dan pemrograman web.",
      logo: "/unjani.png",
    },
  ];

  const certificates: Certificate[] = [
    {
      title: "Sertifikat 1",
      description: "Deskripsi sertifikat 1",
      image: "/cert1.png",
    },
    {
      title: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image: "/cert2.png",
    },
    {
      title: "Sertifikat 3",
      description: "Deskripsi sertifikat 3",
      image: "/cert3.png",
    },
  ];

  return (
    <main className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <>
        {show && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 w-[450px] text-center overflow-hidden transition-colors duration-300"
            >
              {/* Tombol Close */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-200" />
              </button>

              {/* Split Text Animasi */}
              <div className="flex justify-center space-x-1 text-4xl font-extrabold text-gray-800 dark:text-gray-100">
                {text[0].split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, type: "spring" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Hopefully you find the worker you need.
              </p>

              {/* Confetti Particles */}
              {particles.map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: [
                      "#f87171", // merah
                      "#facc15", // kuning
                      "#34d399", // hijau
                      "#60a5fa", // biru
                    ][i % 4],
                    top: "50%",
                    left: "50%",
                  }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 300,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                />
              ))}
            </motion.div>
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
            href="/cv.pdf"
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
        <a href="/cv.pdf" download className="flex flex-col items-center">
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-800" />

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 py-16 md:py-0">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Marco Sihombing
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
              Backend Developer • Undergraduate
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
              <TypeAnimation
                sequence={[
                  "Backend Developer",
                  2000,
                  "Optimizing Systems & Databases",
                  2000,
                  "Learning ML & Data Mining",
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
                href="mailto:marcosihombing72@email.com"
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
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Image
              src="/vercel.svg"
              alt="Profile"
              width={260}
              height={260}
              className="rounded-full shadow-2xl border-4 border-gray-200 dark:border-gray-700"
            />
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-300 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a href="#about" className="flex flex-col items-center text-sm">
            <span>Scroll Down</span>
            <ArrowDown className="mt-1 animate-bounce" size={20} />
          </a>
        </motion.div>
      </section>

      {/* Tentang Saya */}
      <section id="about" className="relative max-w-6xl mx-auto py-20 px-6">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-pink-100/40 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/30 blur-3xl rounded-3xl"></div>

        {/* Content Card */}
        <motion.div
          className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-xl rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h3
            className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h3>

          {/* Divider Accent */}
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>

          {/* Description */}
          <motion.p
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I am a{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Backend Developer
            </span>{" "}
            focused on application development, database management, and system
            performance optimization for greater efficiency and scalability.
            With a basic understanding of frontend development, I can
            collaborate in building well-integrated applications.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            In addition, I also have an interest in{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Machine Learning
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Data Mining
            </span>
            , which enriches my knowledge in processing data to generate
            valuable insights.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            I am always enthusiastic about learning new technologies and seeking
            challenges that can enhance my skills. With an analytical approach
            and innovative solutions, I am ready to contribute to the
            development team to create reliable and high-performance systems.
          </motion.p>
        </motion.div>
      </section>

      {/* Skill */}
      <section id="skills" className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Tech Stack
          </h3>

          {/* Baris 1 - ke kiri */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            className="py-8"
            breakpoints={{
              320: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {skills.map((skill, i) => (
              <SwiperSlide key={`row1-${i}`}>
                <motion.div
                  className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon}
                  <p className="mt-3 font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    {skill.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Baris 2 - ke kanan */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={3500} // beda speed supaya tidak sinkron
            className="py-8"
            breakpoints={{
              320: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {skills.map((skill, i) => (
              <SwiperSlide key={`row2-${i}`}>
                <motion.div
                  className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon}
                  <p className="mt-3 font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    {skill.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Baris 3 - ke kiri lagi */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={2800} // beda lagi biar "random"
            className="py-8"
            breakpoints={{
              320: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {skills.map((skill, i) => (
              <SwiperSlide key={`row3-${i}`}>
                <motion.div
                  className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon}
                  <p className="mt-3 font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    {skill.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Riwayat Pendidikan */}
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
            {/* Item 1 */}
            <motion.li
              className="flex justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-1/2 pr-8 text-right">
                <p className="font-semibold">
                  State Vocational High School 11 Bandung
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  software engineering - 2019 to 2021
                </p>
              </div>
              <div className="w-4 h-4 bg-blue-500 rounded-full z-10 relative top-2 -ml-2" />
              <div className="w-1/2" />
            </motion.li>

            {/* Item 2 */}
            <motion.li
              className="flex justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-1/2" />
              <div className="w-4 h-4 bg-blue-500 rounded-full z-10 relative top-2 -ml-2" />
              <div className="w-1/2 pl-8 text-left">
                <p className="font-semibold">Ahmad Yani University</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Informatika - 2022 to present
                </p>
              </div>
            </motion.li>
          </ul>
        </div>
      </section>

      {/* Project */}
      <section
        id="projects"
        className="bg-gray-100 dark:bg-gray-800 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Project
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((proj, i) => (
              <motion.div
                key={proj}
                className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Image
                  src="/globe.svg"
                  alt="Project"
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold">Project {proj}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Deskripsi singkat project ini...{" "}
                    <span className="text-blue-500 cursor-pointer">...</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikat */}
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

      <section id="experience" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Work History & Internships
        </h3>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true} // pastikan true
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {experiences.map((exp, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 h-full flex flex-col items-center text-center hover:shadow-lg transition-all">
                <Image
                  src={exp.logo}
                  alt={exp.title}
                  width={80}
                  height={80}
                  className="mb-4 rounded-full"
                />
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {exp.title}
                </h4>
                <p className="text-sm text-blue-500 font-medium">{exp.role}</p>
                <p className="text-xs text-gray-500 mb-3">{exp.period}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Kontak */}
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
              className="p-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
            />

            {/* Input Email */}
            <motion.input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
            />

            {/* Textarea Pesan */}
            <motion.textarea
              placeholder="Pesan"
              rows={4}
              className="p-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
            />

            {/* Tombol Kirim */}
            <motion.button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kirim
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 py-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
          {/* Info */}
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Marco Sihombing. All rights reserved.
          </p>

          {/* Icons */}
          <div className="flex space-x-5 text-lg">
            <a
              href="mailto:marcosihombing72@email.com"
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
