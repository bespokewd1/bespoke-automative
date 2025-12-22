import { motion } from "motion/react";
import type { ReactNode } from "react";

interface StaggeredFadeInProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "left" | "right" | "up" | "down";
}

export function StaggeredFadeIn({
  children,
  className = "",
  staggerDelay = 0.1,
  direction = "left",
}: StaggeredFadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -30, y: 0 };
      case "right":
        return { x: 30, y: 0 };
      case "up":
        return { x: 0, y: 30 };
      case "down":
        return { x: 0, y: -30 };
      default:
        return { x: -30, y: 0 };
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))
        : children}
    </motion.div>
  );
}

// Individual item wrapper for more control
export function FadeInItem({
  children,
  className = "",
  delay = 0,
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -30, y: 0 };
      case "right":
        return { x: 30, y: 0 };
      case "up":
        return { x: 0, y: 30 };
      case "down":
        return { x: 0, y: -30 };
      default:
        return { x: -30, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay,
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}
