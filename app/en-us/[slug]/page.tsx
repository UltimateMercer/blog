import { getArticles } from "@/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getArticles({ lang: "en-us" });
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = getArticles({ lang: "en-us" }).find(
    (article) => article.slug === params.slug
  );

  if (!article) return notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-lg">{article.description}</p>
      <p>{article.date}</p>
      <article>{article.body.raw}</article>
    </div>
  );
}
