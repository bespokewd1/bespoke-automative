import { motion } from "framer-motion";
import { RollingTextLinkAlt } from "./RollingTextLink";

interface WorkItem {
  title: string;
  image: string;
  href: string;
}

interface RecentWorksGalleryProps {
  items: WorkItem[];
  title?: string;
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative aspect-4/5 overflow-hidden"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay that slides up on hover */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/70 to-transparent p-6"
        initial={{ y: "60%", opacity: 0.5 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Orange accent line */}
        <div className="w-12 h-1 bg-accent mb-4" />

        <h3 className="text-white font-bold text-lg uppercase mb-4">
          {item.title}
        </h3>

        <RollingTextLinkAlt
          text="More Details"
          href={item.href}
          className="text-white"
        />
      </motion.div>
    </motion.div>
  );
}

export function RecentWorksGallery({
  items,
  title = "Our Recent Works",
}: RecentWorksGalleryProps) {
  return (
    <section className="py-16 bg-bg-muted">
      <div className="container mx-auto px-4">
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
