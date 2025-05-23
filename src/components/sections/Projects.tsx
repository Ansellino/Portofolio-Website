"use client";

import React from "react";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import Card, { CardHeader, CardContent, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionContainer from "../common/SectionContainer";

// Sample projects data based on CV
const projects = [
  {
    id: "mangrove-conservation",
    title: "Lembur Mangrove Patikang",
    description:
      "Comprehensive mangrove conservation website developed from initial concept to deployment, featuring community engagement tools and conservation tracking.",
    image: "/images/projects/mangrove.jpg",
    technologies: [
      "Laravel 11",
      "Filament V.3",
      "Tailwind CSS",
      "Alpine.js",
      "Livewire",
    ],
    features: [
      "Interactive conservation dashboard",
      "Community engagement platform",
      "Real-time data tracking",
      "Admin management system",
    ],
    duration: "Oct 2024 - Jan 2025",
    teamSize: 4,
    status: "Completed",
    category: "Web Application",
  },
  {
    id: "spare-parts-erp",
    title: "Machine Spare Parts ERP",
    description:
      "Enterprise Resource Planning system for managing machine spare parts inventory, built for packaging machinery company.",
    image: "/images/projects/erp.jpg",
    technologies: ["Laravel 9", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Inventory management",
      "Order tracking system",
      "Supplier management",
      "Reporting dashboard",
    ],
    duration: "Sep 2021 - Jan 2023",
    teamSize: 3,
    status: "Completed",
    category: "ERP System",
  },
  {
    id: "gaming-community",
    title: "PASARJB Gaming Platform",
    description:
      "Community platform for gamers featuring trading, news, game top-ups, and boosting services with integrated event management.",
    image: "/images/projects/gaming.jpg",
    technologies: ["Laravel 9", "PHP", "MySQL", "Vue.js", "Payment Gateway"],
    features: [
      "User trading system",
      "Game top-up services",
      "Community forums",
      "Tournament management",
      "Payment integration",
    ],
    duration: "Jan 2018 - Dec 2023",
    teamSize: 4,
    status: "Live",
    category: "E-commerce Platform",
  },
  {
    id: "bangkit-capstone",
    title: "Cloud Computing Capstone",
    description:
      "Top 50 capstone project in Google Bangkit Academy focusing on cloud infrastructure and scalable application deployment.",
    image: "/images/projects/cloud.jpg",
    technologies: [
      "Google Cloud Platform",
      "Docker",
      "Kubernetes",
      "Node.js",
      "React",
    ],
    features: [
      "Scalable cloud architecture",
      "Container orchestration",
      "CI/CD pipeline",
      "Monitoring dashboard",
    ],
    duration: "Feb 2021 - Jul 2021",
    teamSize: 6,
    status: "Awarded",
    category: "Cloud Computing",
  },
];

const categoryColors = {
  "Web Application":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "ERP System":
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "E-commerce Platform":
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "Cloud Computing":
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
};

const statusColors = {
  Completed: "success",
  Live: "default",
  Awarded: "warning",
} as const;

export default function Projects() {
  return (
    <SectionContainer id="projects" className="py-20 bg-secondary/30">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent work spanning web applications, ERP systems,
          and cloud computing solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} hover className="group overflow-hidden">
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-blue-600/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-2">
                    {project.category === "Web Application"
                      ? "🌱"
                      : project.category === "ERP System"
                      ? "⚙️"
                      : project.category === "E-commerce Platform"
                      ? "🎮"
                      : "☁️"}
                  </div>
                  <p className="text-sm">Project Screenshot</p>
                </div>
              </div>

              {/* Project Status Badge */}
              <div className="absolute top-4 left-4 z-20">
                <Badge
                  variant={
                    statusColors[project.status as keyof typeof statusColors]
                  }
                >
                  {project.status}
                </Badge>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    categoryColors[
                      project.category as keyof typeof categoryColors
                    ]
                  }`}
                >
                  {project.category}
                </span>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>

              {/* Project Meta */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {project.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  {project.teamSize} members
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-sm text-muted-foreground">
                      + {project.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2 text-sm">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink size={14} className="mr-1" />
                  View Details
                </Button>
                <Button variant="ghost" size="sm">
                  <Github size={14} className="mr-1" />
                  Code
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Statistics */}
      <div className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "4+", label: "Projects Completed", icon: "✅" },
            { number: "6+", label: "Years Experience", icon: "⏱️" },
            { number: "10+", label: "Technologies Used", icon: "🛠️" },
            { number: "Top 50", label: "Bangkit Achievement", icon: "🏆" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-background rounded-lg border border-border"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Interested in My Work?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These projects represent just a sample of my work. I&apos;m always
            excited to take on new challenges and create innovative solutions.
            Let&apos;s discuss your next project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#contact" size="lg">
              Start a Project
            </Button>

            <Button variant="outline" size="lg">
              <Github size={18} className="mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
