// src/components/services/VideoSection.tsx
import { motion } from "framer-motion";
import { useState } from "react";

interface VideoSectionProps {
  title?: string;
  thumbnailUrl?: string;
  videoUrl?: string;
}

export function VideoSection({
  title = "Maintenance & Repairs",
  thumbnailUrl = "/images/video-thumbnail.jpg",
  videoUrl,
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold uppercase mb-8 border-b border-border pb-4"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video bg-primary/10 overflow-hidden rounded-lg"
        >
          {/* Thumbnail/Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${thumbnailUrl})`,
              filter: "brightness(0.4)",
            }}
          />

          {/* Play Button */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-accent flex items-center justify-center transition-colors group-hover:bg-accent-700"
                style={{
                  clipPath:
                    "polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                }}
              >
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </button>
          )}

          {/* Video iframe (when playing) */}
          {isPlaying && videoUrl && (
            <iframe
              src={videoUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
