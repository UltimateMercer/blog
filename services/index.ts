import { compareDesc } from "date-fns";

import { allArticles } from "contentlayer/generated";

interface ArticleLangProps {
  lang?: "pt-br" | "en-us";
}

export const getArticles = ({ lang = "pt-br" }: ArticleLangProps) =>
  allArticles
    .filter((article) => article.lang === lang)
    .sort((a: any, b: any) => compareDesc(new Date(a.date), new Date(b.date)));
