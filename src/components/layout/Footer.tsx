"use client";

import React from "react";
import { Mail, Phone, Linkedin, MapPin, Heart, ArrowUp } from "lucide-react";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Full Stack Development", href: "#contact" },
        { name: "Web Application Development", href: "#contact" },
        { name: "API Development", href: "#contact" },
        { name: "Cloud Computing", href: "#contact" },
        { name: "Technical Consultation", href: "#contact" },
      ],
    },
    {
      title: "Technologies",
      links: [
        { name: "Laravel & PHP", href: "#skills" },
        { name: "React & Next.js", href: "#skills" },
        { name: "Google Cloud Platform", href: "#skills" },
        { name: "MySQL & Database", href: "#skills" },
        { name: "Docker & Kubernetes", href: "#skills" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: "hover:text-red-500",
    },
    {
      name: "LinkedIn",
      href: personalInfo.linkedin,
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Phone",
      href: `tel:${personalInfo.phone}`,
      icon: Phone,
      color: "hover:text-green-500",
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Jeremy<span className="text-primary">.</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Full Stack Developer passionate about creating innovative web
                  solutions and cloud-based applications.
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail size={16} className="text-primary" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={16} className="text-primary" />
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.name === "LinkedIn" ? "_blank" : undefined}
                      rel={
                        social.name === "LinkedIn"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground ${social.color} transition-all duration-200 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        onClick={(e) => {
                          if (link.href.startsWith("#")) {
                            e.preventDefault();
                            const element = document.querySelector(link.href);
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Jeremy Ansellino Gunawan. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Available for hire
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>

              {/* Back to Top Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="p-2"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="py-4 text-center border-t border-border">
          <p className="text-xs text-muted-foreground">
            This website is built with modern web technologies and follows best
            practices for performance, accessibility, and SEO. Source code
            available upon request.
          </p>
        </div>
      </div>
    </footer>
  );
}
