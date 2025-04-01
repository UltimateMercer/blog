import { MDXComponents } from "@/components/mdx";
import { getArticles } from "@/services";
import { notFound, redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { allArticles } from "contentlayer/generated";

type Props = {
  params: { slug: string; lang: "pt-br" | "en-us" };
};

export async function generateStaticParams() {
  const articles = allArticles;
  const test = articles.map((article) => ({
    example: article.slug,
    slug: article.slug.replace(/en-us\/|pt-br\//, ""),
  }));
  console.log(test);
  return articles.map((article) => ({
    lang: article.lang,
    slug: article.slug.replace(/en-us\/|pt-br\//, ""),
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;
  const slug = params.slug;

  const articles = getArticles({ lang });
  const article = articles.find(
    (article) => article.slug === `${lang}/${slug}`
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

export default function Page({
  params,
}: {
  params: { slug: string; lang: "pt-br" | "en-us" };
}) {
  const lang = params.lang;
  const slug = params.slug;

  const articles = getArticles({ lang });
  const article = articles.find(
    (article) => article.slug === `${lang}/${slug}`
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
