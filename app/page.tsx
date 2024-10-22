"use client";
import * as React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { GlassCard, Card } from "@/components/card";
import { getArticles } from "@/services";
import type { LanguageStore } from "@/utils/interfaces";

export default function Home() {
  const { language } = useLanguageStore() as LanguageStore;
  const listArticles = React.useRef("list_articles");
  const articles = React.useMemo(
    () => getArticles({ lang: language }),
    [language]
  );

  return (
    <main>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold" id="heading_articles">
            {language === "en-us" ? "Articles" : "Artigos"}
          </h1>
          <section id={listArticles.current}>
            {articles.map((article, index) => (
              <Card
                key={article.slug}
                data-testid={`article-card-${index}`}
                {...article}
              />
            ))}

            {/* {articles.map((article) => (
            <GlassCard key={article.slug} {...article} />
          ))} */}
            {articles.length === 0 && <p>No articles found.</p>}
            {/* <Card /> */}
          </section>
        </div>
      </div>
    </main>
  );
}
