"use client";
import { MDXComponents } from "@/components/mdx";
import { getArticles } from "@/services";
import { notFound, useRouter } from "next/navigation";
import type { LanguageStore } from "@/utils/interfaces";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Page({ params }: { params: { slug: string } }) {
  const { language } = useLanguageStore() as LanguageStore;
  const router = useRouter();

  if (language !== "en-us") {
    return router.push(`/${language}/${params.slug}`);
  }

  const articles = getArticles({ lang: "en-us" });
  const article = articles.find(
    (article) => article.slug === `en-us/${params.slug}`
  );

  if (!article) return notFound();

  return (
    <>
      <MDXComponents
        layout={article.image ? "basic-layout" : "simple-layout"}
        doc={article}
        code={article.body.code}
      />
    </>
  );
}
