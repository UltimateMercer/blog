"use client";
import Link from "next/link";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import { useLanguageStore } from "@/store/useLanguageStore";
import type { ArticleLayoutProps, LanguageStore } from "@/utils/interfaces";

const SimpleLayout = ({ doc, children }: ArticleLayoutProps) => {
  const { title, tags, date, image = "" } = doc;
  const { language } = useLanguageStore() as LanguageStore;

  return (
    <section className="main-article py-4">
      <div className="article-grid !pb-0">
        <h5 className="font-sans font-semibold tracking-wide">
          <FormatFullTimeStamp date={date} locale={language} />
        </h5>
        <h1 className="md:text-4xl text-3xl font-bold tracking-wide mb-4">
          {title}
        </h1>
      </div>
      <article className="article-grid prose dark:prose-dark">
        {children}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="my-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default SimpleLayout;
