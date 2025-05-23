import React from "react";
import { GraduationCap, Award, Users, Code2 } from "lucide-react";
import Card, { CardHeader, CardContent, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { personalInfo, education, certificates } from "@/data/personal";
import SectionContainer from "../common/SectionContainer";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Master's in Computer Science",
      detail: "Bina Nusantara University - GPA 3.67/4.00",
    },
    {
      icon: Code2,
      title: "Experience",
      description: "6+ Years Development",
      detail: "Full Stack & Cloud Computing expertise",
    },
    {
      icon: Award,
      title: "Achievement",
      description: "Top 50 Bangkit Capstone",
      detail: "Google Cloud Computing Program",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Team Collaboration",
      detail: "Led multiple development teams",
    },
  ];

  return (
    <SectionContainer id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a strong foundation in computer science
              and hands-on experience in modern web technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Building Digital Solutions That Matter
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {personalInfo.description} I specialize in creating robust
                    web applications using modern technologies like Laravel,
                    React, and cloud computing platforms.
                  </p>
                  <p>
                    Throughout my career, I&apos;ve had the privilege of working
                    with diverse teams and contributing to projects ranging from
                    ERP systems to community platforms. My experience spans both
                    technical development and team leadership roles.
                  </p>
                  <p>
                    I believe in continuous learning and staying updated with
                    the latest technology trends. This philosophy has helped me
                    successfully transition between different tech stacks and
                    adapt to evolving project requirements.
                  </p>
                </div>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div
                      key={highlight.title}
                      className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <IconComponent size={24} className="text-primary mb-2" />
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* What I Do */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  What I Do
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full Stack Development",
                    "Web Application Development",
                    "API Design & Development",
                    "Database Architecture",
                    "Cloud Computing",
                    "Team Leadership",
                    "Technical Consultation",
                    "Code Review & Mentoring",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-6">
              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap size={20} className="text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div
                        key={edu.id}
                        className="border-l-2 border-primary pl-4"
                      >
                        <h4 className="font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-medium">
                          {edu.institution}
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-muted-foreground">
                            {edu.duration}
                          </span>
                          <Badge variant="success" size="sm">
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award size={20} className="text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {certificates.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex items-start justify-between"
                      >
                        <div>
                          <h4 className="font-medium text-foreground text-sm">
                            {cert.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {cert.issuer}
                          </p>
                        </div>
                        <Badge variant="secondary" size="sm">
                          {cert.year}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Organization Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users size={20} className="text-primary" />
                    Leadership & Volunteering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        org: "HIMTI",
                        role: "General Affairs & Logistic",
                        year: "2018-2020",
                      },
                      {
                        org: "SWANARAPALA",
                        role: "General Affairs & Logistic",
                        year: "2018-2019",
                      },
                      {
                        org: "Tech for Indonesia",
                        role: "Video Editor",
                        year: "2018-2019",
                      },
                    ].map((exp) => (
                      <div
                        key={exp.org}
                        className="flex items-start justify-between"
                      >
                        <div>
                          <h4 className="font-medium text-foreground text-sm">
                            {exp.org}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {exp.role}
                          </p>
                        </div>
                        <Badge variant="secondary" size="sm">
                          {exp.year}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Personal Touch */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Beyond Coding
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                When I&apos;m not coding, I enjoy exploring new technologies,
                contributing to open-source projects, and mentoring aspiring
                developers. I believe in the power of community and continuous
                learning to drive innovation in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
