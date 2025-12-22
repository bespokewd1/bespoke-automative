import { motion } from "motion/react";
import { RollingTextLinkAlt } from "./RollingTextLink";

interface Article {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  href: string;
}

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

function ArticleCard({
  article,
  index,
  featured = false,
}: {
  article: Article;
  index: number;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden group col-span-full"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8">
          <div className="flex gap-3 mb-4">
            <span className="bg-accent text-white px-3 py-1 text-xs font-bold uppercase">
              {article.category}
            </span>
          </div>

          <h3 className="text-white text-2xl lg:text-3xl font-bold uppercase mb-2 max-w-2xl">
            {article.title}
          </h3>

          <p className="text-white/70 text-sm mb-4">{article.date}</p>

          <RollingTextLinkAlt
            text="Read More"
            href={article.href}
            className="text-white"
          />
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4">
          <span className="bg-accent text-white px-3 py-1 text-xs font-bold uppercase">
            {article.category}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold uppercase mb-2 group-hover:text-accent transition-colors">
        {article.title}
      </h3>

      <p className="text-fg-muted text-sm mb-3">{article.date}</p>

      <RollingTextLinkAlt text="Read More" href={article.href} />
    </motion.article>
  );
}

export function RelatedArticles({
  articles,
  title = "Popular Articles",
}: RelatedArticlesProps) {
  const [featured, ...rest] = articles;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold uppercase mb-12"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured && (
            <ArticleCard article={featured} index={0} featured />
          )}

          {rest.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
