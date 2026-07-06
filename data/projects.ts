export type Project = {
  title: string;
  description: string;
  period: string;
  category: string;
  skills: string[];
  link: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Groundwater Quality GIS System",
    description:
      "Web GIS system for groundwater quality monitoring using buffer analysis and spatial overlay (pH, septic tank distance, drainage proximity).",
    period: "Dec 2025 – Jan 2026",
    category: "GIS & Spatial Analysis",
    skills: ["GIS", "Spatial Analysis", "Web Mapping", "Leaflet", "Data Visualization"],
    link: "https://najwaazizii.github.io/sig-kualitas-air-sumur-pekanbaru/",
    image: "images/projects/gis.png",
  },

  {
    title: "MPU6050 Machine Learning Mobile App",
    description:
      "Kotlin Android app using Random Forest regression + ONNX model for sensor prediction.",
    period: "Nov 2025 – Jan 2026",
    category: "Mobile AI",
    skills: ["Kotlin", "Machine Learning", "ONNX", "Android"],
    link: "https://drive.google.com/file/d/196Qr1BfUy1ACDHWACwkY-DZa3FZ_24Bu/view",
    image: "images/projects/mpu6050.png",
  },

  {
    title: "Big Mart Sales Analytics Dashboard",
    description:
      "End-to-end PySpark pipeline for data cleaning, transformation, and BI dashboard analytics.",
    period: "Nov 2025 – Dec 2025",
    category: "Data Engineering",
    skills: ["PySpark", "ETL", "Data Engineering", "BI"],
    link: "https://najwaazizii.github.io/big-mart-analytics-dashboard/",
    image: "images/projects/bigmart.png",
  },

  {
    title: "Obatology – Software Testing Project",
    description:
      "Black-box, white-box, and UAT testing for pharmacy system quality assurance.",
    period: "Nov 2025 – Dec 2025",
    category: "Software Testing",
    skills: ["QA", "Testing", "Test Case Design"],
    link: "https://drive.google.com/file/d/1WkgQYsZNb-p60P7eR6CW1MQLEI_qifRY/view",
    image: "images/projects/testing.png",
  },

  {
    title: "3D Animated Short Film (Blender)",
    description:
      "Full animation pipeline: modeling, lighting, rendering, storytelling.",
    period: "Apr 2025 – Jul 2025",
    category: "3D Animation",
    skills: ["Blender", "3D Modeling", "Rendering"],
    link: "https://drive.google.com/file/d/1IhUz0Un1ZPEUXHvZrTyrCS_pb_VglaAz/view",
    image: "images/projects/blender.png",
  },

  {
    title: "CornGo System Design (UI/UX)",
    description:
      "SRS, SDS, use case modeling, and Figma prototype system design.",
    period: "Jun 2025 – Jul 2025",
    category: "UI/UX Design",
    skills: ["Figma", "UI/UX", "System Design"],
    link: "https://www.figma.com/proto/uecgu8qTyGhznIUyUND0P2/RPL-Jagung",
    image: "images/projects/corngo.png",
  },

  {
    title: "Car Rental System",
    description:
      "Full-stack web system for booking, transactions, and admin dashboard.",
    period: "Mar 2025 – Jul 2025",
    category: "Full Stack Web",
    skills: ["Web Dev", "Database", "System Design"],
    link: "https://www.youtube.com/watch?v=_rOxzVp7zOQ",
    image: "images/projects/rental.png",
  },

  {
    title: "Wisata Petik Labu – Unity Game",
    description:
      "3D Unity game with NPC, quests, and Blender asset integration.",
    period: "Jun 2025 – Jul 2025",
    category: "Game Development",
    skills: ["Unity", "C#", "Game Design"],
    link: "https://drive.google.com/drive/folders/1XSWA1jHqF8ILFR9AO8jfZ0gyIdb_zBip",
    image: "images/projects/unity.png",
  },

  {
    title: "Legendary Treasure Hunt – RPG Game",
    description:
      "RPG Maker MV game with storyline, maps, and battle system.",
    period: "May 2025 – Jun 2025",
    category: "Game Development",
    skills: ["RPG Maker", "Game Design"],
    link: "https://drive.google.com/file/d/19eGvSlyvDCx_zTJcreFxKZyhgAcsiYQA/view",
    image: "images/projects/rpg.png",
  },

  {
    title: "Job Vacancy Filtering System",
    description:
      "Boolean logic-based job filtering system using Python.",
    period: "Mar 2025",
    category: "Algorithm System",
    skills: ["Python", "Algorithms", "Logic"],
    link: "https://drive.google.com/file/d/1ih5OXJDK_nDKgjR2eode-dv5k8vh9ufm/view",
    image: "images/projects/filter.png",
  },

  {
    title: "Monify UI/UX Finance App",
    description:
      "Finance app design with research, wireframe, and prototype.",
    period: "Nov 2024 – Jan 2025",
    category: "UI/UX Design",
    skills: ["Figma", "UX Research"],
    link: "https://drive.google.com/file/d/1HznBskl23rsb25jwg3OxSxHJp8zKCgXG/view",
    image: "images/projects/monify.png",
  },

  {
    title: "Wine Data Warehouse (SQL + Tableau)",
    description:
      "ETL pipeline and dashboard for wine analytics.",
    period: "Nov 2024 – Jan 2025",
    category: "Data Analytics",
    skills: ["SQL", "Tableau", "ETL"],
    link: "https://public.tableau.com/views/Najwa_MonitoringRatingHargaWine/DashboardFinal",
    image: "images/projects/wine.png",
  },

  {
    title: "Warung UJ System",
    description:
      "Food ordering system with cart and admin dashboard.",
    period: "Nov 2024 – Dec 2024",
    category: "Full Stack Web",
    skills: ["PHP", "MySQL", "Web Dev"],
    link: "https://github.com/NajwaAzizii/warung_uj",
    image: "images/projects/warung.png",
  },

  {
    title: "CPU Scheduling Simulator",
    description:
      "OS simulator for FCFS and SJF algorithms.",
    period: "Jul 2024",
    category: "System Simulation",
    skills: ["OS", "Algorithms"],
    link: "https://najwaazizii.github.io/cpu-scheduling-simulator/",
    image: "images/projects/cpu.png",
  },

  {
    title: "3D Coca-Cola Advertisement",
    description:
      "3D product animation with Blender rendering.",
    period: "Oct 2024 – Nov 2024",
    category: "3D Animation",
    skills: ["Blender", "Rendering"],
    link: "https://drive.google.com/file/d/1A_1vAEzVyd8_7SRxeAwSj-0jtB2H2wTM/view",
    image: "images/projects/coke.jpg",
  },

  {
    title: "GSG Reservation System (Award Project)",
    description:
      "Hall reservation system (Best Project Winner JTI Expo II 2024).",
    period: "Apr 2024 – Jul 2024",
    category: "Full Stack Web",
    skills: ["Web Dev", "Database", "System Design"],
    link: "https://github.com/NajwaAzizii/Reservasi_GSG1",
    image: "images/projects/gsg.png",
  },
];