import { motion } from "motion/react";
import { RollingTextLinkAlt } from "./RollingTextLink";
import type { WorkItem } from "@data/services";
import { cn } from "@lib/utils";


interface RecentWorksGalleryProps {
  items: WorkItem[];
  title?: string;
}

function WorkCard({ item, index, className = "" }: { item: WorkItem; index: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={cn("group relative pointer-coarse:pb-24 aspect-4/5 overflow-hidden", className)}
    >
      <img
        src={item.image.src}
        height={item.image.height}
        width={item.image.width}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay that slides up on hover */}
      <div className="absolute translate-y-[calc(100%-5rem)] pointer-coarse:translate-y-0 group-hover:translate-y-0 transition-transform ease-out duration-500 inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/70 to-transparent px-4 py-6"
      >
        {/* Orange accent line */}
        <div className="w-12 h-1 bg-accent mb-4" />

        <h3 className="text-white font-bold text-lg uppercase mb-4">
          {item.title}
        </h3>
        <p className="text-white/90 font-semibold mb-4">
          {item.description}</p>

        <RollingTextLinkAlt
          text="More Details"
          href={item.href}
          className="text-white"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-1 h-[200%] w-full backdrop-blur-sm"
          style={{
            mask: "linear-gradient(to bottom, rgba(255, 255, 255) 0% 50%, transparent 50% 100%)",
            WebkitMask:
              "linear-gradient(to bottom, rgba(255, 255, 255) 0% 50%, transparent 50% 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 h-full -translate-y-full bg-fore-light/10"
          style={{
            mask: "linear-gradient(to top, black 0, black 6px, transparent 6px)",
            WebkitMask: "linear-gradient(to top, black 0, black 6px, transparent 6px)",
            backdropFilter: "blur(4px) brightness(120%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function RecentWorksGallery({
  items,
  title = "Our Recent Works",
}: RecentWorksGalleryProps) {
  return (
    <section className="py-16 bg-bg-muted">
      <div className="container mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 uppercase"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <WorkCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
