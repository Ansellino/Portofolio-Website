import React from "react";
import {
  Code,
  Database,
  Cloud,
  Settings,
  Users,
  Lightbulb,
} from "lucide-react";
import Card, { CardHeader, CardContent, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { skills } from "@/data/skills";
import SectionContainer from "../common/SectionContainer";

const categoryIcons = {
  "Programming Languages": Code,
  "Frontend Development": Code,
  "Backend Development": Database,
  "Cloud & DevOps": Cloud,
  "Tools & Technologies": Settings,
  "Soft Skills": Users,
};

const categoryColors = {
  "Programming Languages": "text-blue-500",
  "Frontend Development": "text-green-500",
  "Backend Development": "text-purple-500",
  "Cloud & DevOps": "text-orange-500",
  "Tools & Technologies": "text-gray-500",
  "Soft Skills": "text-pink-500",
};

export default function Skills() {
  return (
    <SectionContainer id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory) => {
              const IconComponent =
                categoryIcons[
                  skillCategory.category as keyof typeof categoryIcons
                ] || Lightbulb;
              const iconColor =
                categoryColors[
                  skillCategory.category as keyof typeof categoryColors
                ] || "text-primary";

              return (
                <Card
                  key={skillCategory.category}
                  hover
                  className="group transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div
                        className={`p-2 rounded-lg bg-secondary group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent size={24} className={iconColor} />
                      </div>
                      {skillCategory.category}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Core Competencies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Laravel",
                  level: 90,
                  description: "Advanced PHP framework expertise",
                },
                {
                  name: "React/Next.js",
                  level: 85,
                  description: "Modern frontend development",
                },
                {
                  name: "Cloud Computing",
                  level: 80,
                  description: "GCP & infrastructure management",
                },
                {
                  name: "Full Stack",
                  level: 88,
                  description: "End-to-end development",
                },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {skill.level}%
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {skill.name}
                    </h4>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-border rounded-full h-2 mb-3">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Certifications & Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Google Bangkit Academy",
                  subtitle: "Cloud Computing Path",
                  year: "2021",
                  achievement: "Top 50 Capstone Project",
                  icon: "🎓",
                },
                {
                  title: "Alibaba Cloud",
                  subtitle: "Certified Associate",
                  year: "2021",
                  achievement: "Cloud Infrastructure",
                  icon: "☁️",
                },
                {
                  title: "AIESEC",
                  subtitle: "Future Leaders Program",
                  year: "2022",
                  achievement: "Leadership Development",
                  icon: "🏆",
                },
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors"
                >
                  <div className="text-3xl mb-3">{cert.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.subtitle}
                  </p>
                  <div className="text-primary font-medium text-sm">
                    {cert.achievement}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
