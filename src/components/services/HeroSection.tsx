import { motion } from "motion/react";
import { SplitTextReveal } from "./SplitTextReveal";
import { CountUpStats } from "./CountUpStats";
import { DiagonalFillButton } from "./DiagonalFillButton";
import { TextGenerateEffect } from "@components/ui/TextGenerateEffect";

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
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Background text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        {/* BESPOKE */}
        <TextGenerateEffect className="text-[20vw] font-bold text-primary/5 uppercase whitespace-nowrap" words="BESPOKE" duration={1} filter={false} />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">
            {/* Orange dot accent */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-3 h-3 bg-accent rounded-full mb-6"
            />

            <TextGenerateEffect
              words={headline}
              className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-2"
              duration={2}
            />

            {/* <SplitTextReveal */}
            {/*   text={headline} */}
            {/*   className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-2" */}
            {/*   delay={0.3} */}
            {/* /> */}

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

              <a
                href="tel:+17801234567"
                className="inline-flex items-center gap-2 px-6 py-4 border-2 border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors"
                style={{
                  clipPath:
                    "polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </motion.div>
          </div>

          {/* Car Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
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
