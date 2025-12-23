import { cn } from "@lib/utils";
import { motion } from "motion/react";

interface SEOContentProps {
  content: string;
  className?: string;
}

export function SEOContent({ content, className = "" }: SEOContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`prose prose-lg max-w-none ${className}`}
    >
      <div
        dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
        className={cn([
          "[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-neutral-950",
          "[&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-neutral-950",
          "[&_p]:text-neutral-800 [&_p]:mb-4 [&_p]:leading-relaxed",
          "[&_ul]:my-4 [&_ul]:space-y-2",
          "[&_li]:text-neutral-800 [&_li]:pl-4 [&_li]:relative",
          "[&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 ",
          "[&_li]:before:top-[0.6em] [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:bg-accent",
          "[&_strong]:text-fg [&_strong]:font-semibold",
        ])}
      />
    </motion.div>
  );
}

// Simple markdown parser for basic formatting
function parseMarkdown(text: string): string {
  return text
    // Headers
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Lists
    .replace(/^\- (.*$)/gim, "<li>$1</li>")
    // Wrap consecutive li elements in ul
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
    // Paragraphs (lines that aren't headers or lists)
    .replace(/^(?!<[hul])(.*$)/gim, (match) => {
      if (match.trim() === "") return "";
      if (match.startsWith("<")) return match;
      return `<p>${match}</p>`;
    })
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, "")
    .replace(/<p>\s*<\/p>/g, "");
}

