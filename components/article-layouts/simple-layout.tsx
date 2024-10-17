"use client";
import Link from "next/link";
import Image from "next/image";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import { useLanguageStore } from "@/store/useLanguageStore";
import type { ArticleLayoutProps, LanguageStore } from "@/utils/interfaces";

const SimpleLayout = ({ doc, children }: ArticleLayoutProps) => {
  const { title, tags, date, image = "" } = doc;
  const { language } = useLanguageStore() as LanguageStore;

  return (
    <section className="main-article py-4">
      <div className="article-grid !pb-0">
        <h5 className="font-sans font-semibold tracking-wide">
          <FormatFullTimeStamp date={date} locale={language} />
        </h5>
        <h1 className="md:text-4xl text-3xl font-bold tracking-wide mb-4">
          {title}
        </h1>
      </div>
      <article className="article-grid prose dark:prose-dark">
        {children}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="my-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="lg:px-4 px-2 my-6">
          <h3 className="mb-1">Escrito por:</h3>
          <div className="flex md:flex-row flex-col items-center">
            <Image
              src={"https://i.imgur.com/55Kcg9V.jpeg"}
              className={`w-36 h-36 rounded-full object-cover hover:scale-105 hover:ring-2 ring-gray-300 hover:shadow-lg transition-all md:mb-0 !mt-0 mb-4 `}
              width={10000}
              height={10000}
              alt={`Image`}
            />
            <div className="flex flex-col flex-1 justify-center ml-6">
              <h4 className="text-3xl font-bold tracking-wide mb-2">
                Julian Silva da Cunha
              </h4>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SimpleLayout;
