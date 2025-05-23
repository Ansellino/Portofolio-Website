import React from "react";
import { MapPin, Calendar, Users, Code } from "lucide-react";
import Card, { CardHeader, CardContent, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/data/experience";

const typeIcons = {
  Hybrid: "🏢",
  Remote: "🏠",
  "On-site": "🏪",
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in software development, from startups to
              established companies
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    } ml-12 md:ml-0`}
                  >
                    <Card hover className="group">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                              {experience.position}
                            </CardTitle>
                            <h4 className="text-lg font-semibold text-primary mb-2">
                              {experience.company}
                            </h4>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                              <Calendar size={16} />
                              {experience.duration}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin size={16} />
                              {typeIcons[experience.type]} {experience.type}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Users size={16} className="text-primary" />
                            Key Responsibilities
                          </h5>
                          <ul className="space-y-2">
                            {experience.responsibilities.map(
                              (responsibility, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                  {responsibility}
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Code size={16} className="text-primary" />
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for desktop layout */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Companies Worked</div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-2">
                  Top 50
                </div>
                <div className="text-muted-foreground">Bangkit Capstone</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
