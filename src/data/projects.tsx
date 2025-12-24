import { Project } from "@/interface/Project";

export const projects: Project[] = [
  {
    title: "Guest Book API Documentation",
    description:
      "Nest JS documentation for connecting databases for the guest recording system at the Meteorology, Climatology, and Geophysics Agency. It contains links to database schemas, tables, and data structures used to store information about visiting guests.",
    image: "/projs/buku-tamu.png",
    link: "https://bukutamu-bengkulu.devbmkg.my.id/",
  },
  {
    title: "Meteorological Flight and Weather Radar Documentation",
    description:
      "Documentation displaying real-time flight and weather information. Flight data is obtained from OpenSky, weather and radar data from OpenWeather, and CMAX/SSA/TITAN layers from BMKG SIDARMA. All data is integrated and visualized using Leaflet, with a special endpoint for Analysis Mode.",
    image: "/projs/met-flight-radar.png",
    link: "",
  },
  {
    title: "CABDIN DIKWIL 2 REJANG LEBONG API Documentation",
    description:
      "Official Backend API documentation for the Regional Education Office II of Rejang Lebong Regency website, built using NestJS. Provides structured, secure, and frontend-ready school data services (special needs schools, high schools, vocational schools), news, Regional Office profiles, organizational structures, main duties and functions, and vision and mission.",
    image: "/projs/cabdin.jpeg",
    link: "https://cabdindikwil-2.vercel.app/Beranda",
  },
  {
    title: "Sistem Informasi Reservasi & Pemesanan Makanan",
    description:
      "Created using Laravel 10.48, this website is designed for restaurants with key features including takeaway and dine-in ordering, payment, and order and payment history.",
    image: "/projs/sireman.png",
    link: "https://github.com/marco-sihombing/sireman",
  },
];
