"use client";

import Link from "next/link";
import { ArrowUpIcons } from "../../icons/formIcons";

interface CtaBtnProps {
  href: string;
  label: string;
  className?: string;
  icon?: boolean;
  type: "link" | "button";
  onClick?: () => void;
  [key: string]: unknown;
}

export const CtaBtn = ({
  href,
  label,
  className,
  type,
  onClick,
  icon = true,
  ...props
}: CtaBtnProps) => {
  // if onClick function is provided other wise use scroll to section function
  const scrollToSection = ({ id }: { id: string }) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // if onClick is provided, use button, otherwise use link
  return type === "link" ? (
    <Link
      href={href}
      className={`flex items-center justify-center px-5 py-3 gap-2 hover:scale-x-105 active:scale-95 transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {label}
      {icon && (
        <span>
          <span className="sr-only">cta-icon</span>
          <ArrowUpIcons />
        </span>
      )}
    </Link>
  ) : (
    <button
      className={`flex items-center justify-center px-5 py-3 gap-2 hover:scale-x-105 active:scale-95 transition-all duration-300 ease-in-out ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
      {icon && (
        <span>
          <span className="sr-only">cta-icon</span>
          <ArrowUpIcons />
        </span>
      )}
    </button>
  );
};
