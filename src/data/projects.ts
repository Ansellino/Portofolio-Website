import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "lembur-mangrove-patikang",
    title: "Lembur Mangrove Patikang Website",
    description:
      "Comprehensive mangrove conservation website developed from initial concept to deployment. Features community engagement tools, conservation tracking, and educational resources to promote mangrove ecosystem preservation.",
    technologies: [
      "Laravel 11",
      "Filament V.3",
      "Tailwind CSS",
      "Alpine.js",
      "Livewire",
      "MySQL",
      "PHP",
    ],
    features: [
      "Interactive conservation dashboard with real-time data",
      "Community engagement platform for volunteers",
      "Educational content management system",
      "Event scheduling and management",
      "Photo gallery and progress tracking",
      "Responsive admin panel with Filament",
      "Multi-language support (Indonesian/English)",
      "SEO optimized content structure",
    ],
    link: "https://mangrove-patikang.example.com",
    github: "https://github.com/jeremy/mangrove-website",
    image: "/images/projects/mangrove-conservation.jpg",
  },
  {
    id: "mahkota-erp-system",
    title: "Machine Spare Parts ERP System",
    description:
      "Enterprise Resource Planning system for CV. Mahkota Sarana to manage machine spare parts inventory, supplier relationships, and order processing for packaging machinery business.",
    technologies: [
      "Laravel 9",
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "Chart.js",
    ],
    features: [
      "Comprehensive inventory management system",
      "Supplier relationship management",
      "Purchase order automation",
      "Real-time stock tracking and alerts",
      "Financial reporting and analytics",
      "Multi-user role management",
      "Barcode scanning integration",
      "Export/Import functionality for bulk operations",
      "Mobile-responsive interface",
      "Automated email notifications",
    ],
    link: "https://erp.mahkotasarana.com",
    image: "/images/projects/erp-system.jpg",
  },
  {
    id: "pasarjb-gaming-platform",
    title: "PASARJB Gaming Community Platform",
    description:
      "Comprehensive gaming community platform serving as marketplace, news hub, and social network for gamers. Includes trading system, game services, and community event management.",
    technologies: [
      "Laravel 9",
      "PHP",
      "MySQL",
      "Vue.js",
      "Payment Gateway",
      "WebSocket",
      "Redis",
    ],
    features: [
      "User-to-user trading marketplace",
      "Game top-up and voucher services",
      "Gaming news and article management",
      "Game boosting service marketplace",
      "Community forums and discussions",
      "Tournament and event management",
      "Integrated payment gateway (multiple providers)",
      "Real-time chat and notifications",
      "User reputation and review system",
      "Admin dashboard for community management",
      "Mobile app companion (PWA)",
      "Social media integration",
    ],
    link: "https://pasarjb.com",
    github: "https://github.com/jeremy/pasarjb-platform",
    image: "/images/projects/gaming-platform.jpg",
  },
  {
    id: "bangkit-capstone-cloud",
    title: "Smart Agriculture Cloud Platform",
    description:
      "Top 50 capstone project at Google Bangkit Academy 2021. Cloud-based IoT platform for smart agriculture monitoring with machine learning predictions and real-time data analytics.",
    technologies: [
      "Google Cloud Platform",
      "Docker",
      "Kubernetes",
      "Node.js",
      "React",
      "TensorFlow",
      "IoT",
      "BigQuery",
    ],
    features: [
      "IoT sensor data collection and processing",
      "Machine learning crop yield prediction",
      "Real-time environmental monitoring dashboard",
      "Automated irrigation control system",
      "Weather data integration and forecasting",
      "Mobile app for farmers",
      "Cloud-based data storage and analytics",
      "Scalable microservices architecture",
      "CI/CD pipeline with automated testing",
      "Cost-optimized cloud resource management",
    ],
    link: "https://smart-agri.bangkit.academy",
    github: "https://github.com/bangkit-team/smart-agriculture",
    image: "/images/projects/smart-agriculture.jpg",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js and TypeScript. Features dark mode, smooth animations, and optimized performance for showcasing professional work and skills.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Vercel",
      "Framer Motion",
    ],
    features: [
      "Responsive design for all devices",
      "Dark/Light mode toggle",
      "Smooth scrolling navigation",
      "Interactive animations and transitions",
      "SEO optimized with meta tags",
      "Contact form with validation",
      "Project showcase with filtering",
      "Blog integration (planned)",
      "Performance optimized (Lighthouse 100)",
      "Progressive Web App features",
    ],
    link: "https://jeremy-portfolio.vercel.app",
    github: "https://github.com/jeremy/portfolio-nextjs",
    image: "/images/projects/portfolio-website.jpg",
  },
  {
    id: "inventory-management-api",
    title: "RESTful Inventory Management API",
    description:
      "Scalable REST API for inventory management systems built with Laravel. Features comprehensive CRUD operations, authentication, and real-time notifications.",
    technologies: [
      "Laravel 10",
      "PHP",
      "MySQL",
      "Redis",
      "JWT",
      "Swagger",
      "Docker",
      "PHPUnit",
    ],
    features: [
      "RESTful API design with proper HTTP methods",
      "JWT authentication and authorization",
      "Role-based access control (RBAC)",
      "Real-time inventory tracking",
      "Automated low-stock alerts",
      "Comprehensive API documentation with Swagger",
      "Rate limiting and throttling",
      "Database migrations and seeders",
      "Unit and feature testing with PHPUnit",
      "Docker containerization",
      "Redis caching for performance",
      "API versioning support",
    ],
    github: "https://github.com/jeremy/inventory-api",
    image: "/images/projects/api-system.jpg",
  },
];

// Featured projects for homepage showcase
export const featuredProjects = projects.filter((project) =>
  [
    "lembur-mangrove-patikang",
    "mahkota-erp-system",
    "pasarjb-gaming-platform",
    "bangkit-capstone-cloud",
  ].includes(project.id)
);

// Projects by category
export const projectsByCategory = {
  "Web Applications": projects.filter((p) =>
    [
      "lembur-mangrove-patikang",
      "pasarjb-gaming-platform",
      "portfolio-website",
    ].includes(p.id)
  ),
  "Enterprise Systems": projects.filter((p) =>
    ["mahkota-erp-system", "inventory-management-api"].includes(p.id)
  ),
  "Cloud Computing": projects.filter((p) =>
    ["bangkit-capstone-cloud"].includes(p.id)
  ),
};

// Technologies used across all projects
export const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();

// Project statistics
export const projectStats = {
  totalProjects: projects.length,
  totalTechnologies: allTechnologies.length,
  yearsOfExperience: 6,
  completedProjects: projects.filter((p) => p.link).length,
};
