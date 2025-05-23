"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Hi, I&apos;m{" "}
                  <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
                    Jeremy
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  {personalInfo.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {personalInfo.description}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={18} className="text-primary" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone size={18} className="text-primary" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Download CV button */}
                <Button
                  size="lg"
                  className="group"
                  onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
                >
                  <Download
                    size={18}
                    className="mr-2 group-hover:animate-bounce"
                  />
                  Download CV
                </Button>

                {/* LinkedIn button - FIXED */}
                <Button
                  variant="outline"
                  size="lg"
                  href={personalInfo.linkedin}
                  onClick={() => {
                    window.open(
                      personalInfo.linkedin,
                      "_blank",
                      "noopener noreferrer"
                    );
                    return false;
                  }}
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </Button>

                {/* Contact button - FIXED */}
                <Button variant="ghost" size="lg" href="#contact">
                  <Mail size={18} className="mr-2" />
                  Contact Me
                </Button>
              </div>

              {/* Lower buttons section - Already correctly using href */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" href="#contact">
                  Get in Touch
                </Button>

                <Button variant="outline" size="lg" href="#projects">
                  View Projects
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  href={personalInfo.resumeUrl}
                  onClick={() => {
                    window.open(
                      personalInfo.resumeUrl,
                      "_blank",
                      "noopener noreferrer"
                    );
                    return false;
                  }}
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center animate-slide-up">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>

                {/* Profile image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full p-1">
                    <div className="w-full h-full bg-background rounded-full p-4">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-secondary to-muted">
                        {/* Profile image */}
                        <Image
                          src={personalInfo.avatar}
                          alt={personalInfo.name}
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                  💻 Available for hire
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-muted-foreground">Scroll down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
