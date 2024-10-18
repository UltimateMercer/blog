import { Metadata, ResolvingMetadata } from "next";
import { MDXComponents } from "@/components/mdx";
import { getArticles } from "@/services";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const articles = getArticles({ lang: "en-us" });
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const articles = getArticles({ lang: "en-us" });
  const article = articles.find(
    (article) => article.slug === "en-us/" + params.slug
  );

  const image = article?.image ? article.image : "/ultimate-mercer-base.jpg";

  return {
    title: article?.title,
    authors: [{ name: "Ultimate Mercer" }, { name: "Julian Silva da Cunha" }],
    description: article?.description,
    openGraph: {
      title: article?.title,
      description: article?.description,
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title: article?.title,
      description: article?.description,
      images: image,
    },
  };
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
