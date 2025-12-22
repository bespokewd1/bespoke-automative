import { motion } from "motion/react";
import { useState } from "react";

interface DiagonalFillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "accent";
  className?: string;
}

export function DiagonalFillButton({
  children,
  href,
  onClick,
  variant = "accent",
  className = "",
}: DiagonalFillButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const bgColor = variant === "accent" ? "bg-accent" : "bg-primary";
  const hoverBgColor =
    variant === "accent" ? "bg-accent-700" : "bg-primary-700";

  const buttonContent = (
    <motion.span
      className={`
        relative inline-flex items-center justify-center
        px-8 py-4 font-bold uppercase tracking-wider
        overflow-hidden cursor-pointer
        border-2 border-accent text-fg
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        clipPath:
          "polygon(0 14px, 14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
      }}
    >
      {/* Diagonal fill background */}
      <motion.span
        className={`absolute inset-0 ${bgColor} origin-top-left`}
        initial={{ scaleX: 0, scaleY: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          scaleY: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          transformOrigin: "top left",
        }}
      />

      {/* Content */}
      <span
        className={`relative z-10 transition-colors duration-300 ${isHovered ? "text-white" : "text-fg"
          }`}
      >
        {children}
      </span>
    </motion.span>
  );

  if (href) {
    return <a href={href}>{buttonContent}</a>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}
