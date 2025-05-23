import React from "react";
import { cn } from "@/utils/cn";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "secondary" | "primary";
  containerClassName?: string;
  wrapperClassName?: string;
}

/**
 * A container component for sections with consistent styling
 */
export default function SectionContainer({
  id,
  className,
  children,
  variant = "default",
  containerClassName,
  wrapperClassName,
}: SectionContainerProps) {
  // Background variants
  const variants = {
    default: "bg-background",
    secondary: "bg-secondary/30",
    primary: "bg-primary/5",
  };

  return (
    <section id={id} className={cn("py-20", variants[variant], className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        <div className={cn("max-w-6xl mx-auto", wrapperClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
