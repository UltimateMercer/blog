import { compareDesc } from "date-fns";

import { allArticles } from "contentlayer/generated";

export const getArticles = () =>
  allArticles.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
