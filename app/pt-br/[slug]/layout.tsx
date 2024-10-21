import { Metadata, ResolvingMetadata } from "next";
import { getArticles } from "@/services";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const articles = getArticles({ lang: "pt-br" });
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
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

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
