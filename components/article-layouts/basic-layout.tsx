"use client";
import * as React from "react";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import type { ArticleLayoutProps, LanguageStore } from "@/utils/interfaces";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Author } from "../author";

const BasicLayout = ({ doc, children }: ArticleLayoutProps) => {
  const { title, tags, date, image = "" } = doc;
  const article = React.useRef("main_article");
  const { language } = useLanguageStore() as LanguageStore;

  return (
    <section id={article.current} className="main-article">
      <div className="header-basic">
        <div className="header-basic-content px-4">
          <h5 className="font-sans font-semibold tracking-wide">
            <FormatFullTimeStamp date={date} locale={language} />
          </h5>
          <h1 className="md:text-4xl text-3xl font-bold tracking-wide mb-4">
            {title}
          </h1>
        </div>
        <div className="header-basic-container hover:hover-card">
          <picture>
            <source media="(max-width: 768px)" srcSet={image} />
            <source media="(min-width: 769px)" srcSet={image} />
            <img
              src={image}
              className={`header-basic-container-image`}
              alt={`${title} Image`}
            />
          </picture>
        </div>
      </div>
      <article className="article-grid prose dark:prose-dark">
        {children}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <Author />
      </article>
    </section>
  );
};

export default BasicLayout;
