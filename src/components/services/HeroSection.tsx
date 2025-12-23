import { motion, useScroll, useTransform } from "motion/react";
import { SplitTextReveal } from "./SplitTextReveal";
import { CountUpStats } from "./CountUpStats";
import { DiagonalFillButton } from "./DiagonalFillButton";
import { TextGenerateEffect } from "@components/ui/TextGenerateEffect";
import TelLink from "@components/TelLink";
import { useRef } from "react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  description: string;
  carImageUrl: string;
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
  }>;
}

export function HeroSection({
  headline,
  subheadline,
  description,
  carImageUrl,
  stats,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section className="relative flex flex-col justify-center overflow-hidden">
      {/* Background text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a smooth "out" feel
            delay: 0.2,
          }}
          className="text-[20vw] font-bold text-primary/5 uppercase whitespace-nowrap"
        >
          BESPOKE
        </motion.span>
        {/* <span className="text-[20vw] font-bold text-primary/5 uppercase whitespace-nowrap"> */}
        {/*   BESPOKE */}
        {/* </span> */}


      </div>

      <div className="container mx-auto px-4 my-0 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">

            <TextGenerateEffect
              words={headline}
              className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-2"
              duration={1.5}
            />

            <SplitTextReveal
              text={subheadline}
              className="text-2xl md:text-3xl font-bold text-accent uppercase mb-6"
              delay={0.5}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-fg-muted text-lg mb-8 max-w-xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <DiagonalFillButton href="/contact/">
                Book Service
              </DiagonalFillButton>

              <TelLink />

            </motion.div>
          </div>

          {/* Car Image */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ scale }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={carImageUrl}
              alt="Professional Auto Service"
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-16 border-t border-border pt-8">
          <CountUpStats stats={stats} />
        </div>
      </div>
    </section>
  );
}
