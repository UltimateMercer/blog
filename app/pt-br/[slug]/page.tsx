import { FormatFullTimeStamp } from "@/components/date-format";
import { getArticles } from "@/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getArticles({ lang: "pt-br" });
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  const articles = getArticles({ lang: "pt-br" });
  console.log(articles.map((obj) => obj.slug));
  const article = articles.find(
    (article) => article.slug === "pt-br/" + params.slug
  );

  console.log(article);

  if (!article) return notFound();

  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-lg">{article.description}</p>
      <p>
        <FormatFullTimeStamp date={article.date} />
      </p>
      <article>{article.body.raw}</article>
    </div>
  );
}
