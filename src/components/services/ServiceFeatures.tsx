import { motion, type Variants } from "motion/react";

interface ServiceFeaturesProps {
  features: string[];
  title?: string;
}

export function ServiceFeatures({
  features,
  title = "Services Included",
}: ServiceFeaturesProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl lg:text-3xl font-bold mb-8 uppercase"
      >
        {title}
      </motion.h2>

      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.li
            key={feature}
            variants={item}
            className="flex items-center gap-3"
          >
            <span className="shrink-0 size-2 bg-accent" />
            <span className="text-fg">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
