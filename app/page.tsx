"use client";
import * as React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import { GlassCard, Card } from "@/components/card";
import { getArticles } from "@/services";
import type { LanguageStore } from "@/utils/interfaces";

export default function Home() {
  const { language } = useLanguageStore() as LanguageStore;
  const articles = React.useMemo(
    () => getArticles({ lang: language }),
    [language]
  );

  return (
    <main>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">
            {language === "en-us" ? "Articles" : "Artigos"}
          </h1>
          {articles.map((article) => (
            <Card key={article.slug} {...article} />
          ))}
          {articles.length === 0 && <p>No articles found.</p>}
          {/* <Card /> */}
        </div>
      </div>
    </main>
  );
}
