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
      <div className="article-grid">
        <h5 className="article-meta font-semibold tracking-wide">
          <FormatFullTimeStamp date={date} locale={language} />
        </h5>
        <h1 className="md:text-4xl text-3xl font-extrabold tracking-wide mb-4">
          {title}
        </h1>
        <article className="prose dark:prose-dark">{children}</article>
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SimpleLayout;
