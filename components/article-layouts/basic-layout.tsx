import Link from "next/link";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import type { ArticleLayoutProps } from "@/utils/interfaces";

const BasicLayout = ({ doc, children }: ArticleLayoutProps) => {
  const { title, tags, date, image = "" } = doc;

  return (
    <section className="main-article">
      <div className="header-basic">
        <div className="header-basic-content">
          <h5 className="article-meta">
            <span className="marker-line rounded-sm bg-dark-500 !py-1 text-light-500 dark:bg-light-500 dark:text-dark-500">
              <FormatFullTimeStamp date={date} />
            </span>
          </h5>
          <h1 className="md:text-5xl text-3xl font-extrabold tracking-wide !leading-normal mb-4">
            <span className="marker-line rounded-sm bg-dark-500 !py-1 text-light-500 dark:bg-light-500 dark:text-dark-500">
              {title}
            </span>
          </h1>
        </div>
        <div className="header-basic-container hover:hover-card">
          <picture>
            <source media="(max-width: 768px)" srcSet={image} />
            <source media="(min-width: 769px)" srcSet={image} />
            <img
              src={image}
              className={`header-basic-container-image`}
              alt={`${title} Image`}
            />
          </picture>
        </div>
      </div>
      <article className="article-grid prose dark:prose-dark">
        {children}
      </article>
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="default" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </section>
  );
};

export default BasicLayout;