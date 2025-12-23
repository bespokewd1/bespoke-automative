// src/components/services/OtherServices.tsx
import { motion } from "motion/react";
import { RollingTextLinkAlt } from "./RollingTextLink";

interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

interface OtherServicesProps {
  services: Service[];
  title?: string;
}

// Simple icon mapping - you can expand this
const IconMap: Record<string, React.FC<{ className?: string }>> = {
  "tabler:car": ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
    </svg>
  ),
  "tabler:truck": ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
    </svg>
  ),
  "tabler:brake": ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  ),
  "tabler:engine": ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 10v6" />
      <path d="M12 5v3" />
      <path d="M10 5h4" />
      <path d="M5 13h-2" />
      <path d="M6 10h2l2 -2h3.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2v-2h-3v2a1 1 0 0 1 -1 1h-3.465a1 1 0 0 1 -.832 -.445l-1.703 -2.555h-2v-4z" />
    </svg>
  ),
  "tabler:clipboard-check": ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M9 14l2 2l4 -4" />
    </svg>
  ),
  "tabler:camper": ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M5 18h-1a1 1 0 0 1 -1 -1v-8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a1 1 0 0 1 -1 1h-1" />
      <path d="M9 18h6" />
      <path d="M9 13h6" />
      <path d="M12 5v8" />
    </svg>
  ),
  "tabler:droplet": ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
    </svg>
  ),
};

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const IconComponent = IconMap[service.icon] || IconMap["tabler:car"];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      // Added "relative" so the absolute border stays attached to this card
      className="relative border-t border-border pt-8 group flex flex-col"
    >
      {/* Growing Border Element */}
      <div
        className="absolute top-0 left-0 h-0.5 w-full bg-accent origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <div className="text-accent mb-4">
        <IconComponent className="w-12 h-12 group-hover:-scale-x-100 duration-400 ease-out transition-transform" />
      </div>
      <h3 className="text-xl font-bold text-neutral-950 uppercase mb-3">
        {service.title}
      </h3>
      <p className="text-neutral-800 mb-4 line-clamp-3 flex-1">
        {service.description}
      </p>
      <RollingTextLinkAlt text="Details Service" href={service.href} />
    </motion.div>
  );
}

export function OtherServices({
  services,
  title = "Other Services",
}: OtherServicesProps) {
  return (
    <section className="py-16 bg-bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold uppercase"
          >
            {title}
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="/services/"
            className="hidden md:inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold uppercase tracking-wider hover:bg-accent-700 transition-colors"
            style={{
              clipPath:
                "polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
            }}
          >
            All Services
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
