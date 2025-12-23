import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FinalCTAProps {
  title: string;
  description: string;
  children: ReactNode; // This will hold your buttons
}

export const FinalCTA = ({ title, description, children }: FinalCTAProps) => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* 1. Background Image with heavy dark overlay */}
      <div className="absolute inset-0 -z-2">
        <slot name="background-image" />
        <div className="absolute inset-0 bg-neutral-950/80 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
      </div>

      {/* 2. Consistent Grid Pattern to match Service Area */}
      <div className="absolute inset-0 -z-1 opacity-15 [mask-image:radial-gradient(circle,white_20%,transparent_70%)]">
        <svg className="size-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-bold tracking-widest text-accent uppercase"
          >
            Elite Performance
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold text-neutral-50 uppercase md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-200"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {children}
          </motion.div>
        </div>
      </div>

      {/* 3. Subtle accent line at the top to separate sections */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
};
