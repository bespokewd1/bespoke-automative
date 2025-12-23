import { motion } from "framer-motion";

interface ServiceAreasProps {
  locations: string[];
}

export const ServiceAreas = ({ locations }: ServiceAreasProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      {/* Background Decorative Element: Subtle Grid or Map Pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(white,transparent_85%)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-neutral-200 uppercase tracking-tight lg:text-4xl"
          >
            Proudly Serving the <span className="text-accent">Greater Edmonton</span> Area
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="mx-auto h-1 bg-accent"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 lg:gap-8"
        >
          {locations.map((location) => (
            <motion.div
              key={location}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-3 rounded-sm border border-white/10 bg-neutral-50/5 px-6 py-4 transition-colors hover:border-accent/50 hover:bg-white/10"
            >
              <span className="size-5 text-accent transition-transform group-hover:animate-bounce" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6" /></svg>
              </span>
              <span className="text-lg font-semibold tracking-wide uppercase">
                {location}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
