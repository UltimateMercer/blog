import { FormatFullTimeStamp } from "@/components/date-format";
import { MDXComponents } from "@/components/mdx";
import { getArticles } from "@/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getArticles({ lang: "pt-br" });
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const articles = getArticles({ lang: "pt-br" });
  const article = articles.find(
    (article) => article.slug === "pt-br/" + params.slug
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
