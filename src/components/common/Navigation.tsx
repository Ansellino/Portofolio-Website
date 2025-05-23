"use client";

import React from "react";
import { cn } from "@/utils/cn";
import Button from "@/components/ui/Button";

interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  onClick?: () => void; // For mobile menu closing
  variant?: "desktop" | "mobile";
}

const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation({
  items = navigationItems,
  className,
  onClick,
  variant = "desktop",
}: NavigationProps) {
  if (variant === "desktop") {
    return (
      <nav className={cn("hidden md:flex items-center gap-6", className)}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClick}
            className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav
      className={cn(
        "flex flex-col items-center justify-center gap-8",
        className
      )}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onClick}
          className="text-xl font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
      <Button href="#contact" onClick={onClick}>
        Contact Me
      </Button>
    </nav>
  );
}
