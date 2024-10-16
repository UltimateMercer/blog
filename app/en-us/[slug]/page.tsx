import { MDXComponents } from "@/components/mdx";
import { getArticles } from "@/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getArticles({ lang: "en-us" });
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const articles = getArticles({ lang: "en-us" });
  const article = articles.find(
    (article) => article.slug === "en-us/" + params.slug
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
