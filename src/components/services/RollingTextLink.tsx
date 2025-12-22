import { motion } from "motion/react";

interface RollingTextLinkProps {
  text: string;
  href: string;
  className?: string;
}

export function RollingTextLink({
  text,
  href,
  className = "",
}: RollingTextLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 overflow-hidden ${className}`}
    >
      <motion.span
        className="inline-flex items-center justify-center w-6 h-6 bg-accent text-white"
        style={{
          clipPath:
            "polygon(0 4px, 4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)",
        }}
      >
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.span>

      <span className="relative h-5 overflow-hidden">
        <span className="flex flex-col">
          {/* Original text */}
          <motion.span
            className="font-bold uppercase text-sm tracking-wider"
            initial={{ y: 0 }}
            whileHover={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {text}
          </motion.span>
          {/* Duplicate text that comes from bottom */}
          <motion.span
            className="font-bold uppercase text-sm tracking-wider text-accent absolute top-full"
            initial={{ y: 0 }}
            whileHover={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {text}
          </motion.span>
        </span>
      </span>
    </a>
  );
}

// Alternative component that handles hover state on parent
export function RollingTextLinkAlt({
  text,
  href,
  className = "",
}: RollingTextLinkProps) {
  return (
    <motion.a
      href={href}
      className={`group inline-flex items-center gap-2 ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <span
        className="inline-flex items-center justify-center w-6 h-6 bg-accent text-white"
        style={{
          clipPath:
            "polygon(0 4px, 4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)",
        }}
      >
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>

      <span className="relative h-5 overflow-hidden inline-block">
        <motion.span
          className="block font-bold uppercase text-sm tracking-wider"
          variants={{
            rest: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
        <motion.span
          className="block font-bold uppercase text-sm tracking-wider text-accent absolute inset-0"
          variants={{
            rest: { y: "100%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      </span>
    </motion.a>
  );
}
