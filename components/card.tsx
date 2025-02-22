import { Badge } from "@/components/ui/badge";
import { FormatFullDate } from "./date-format";
import Link from "next/link";
import type { ArticleCardProps, LanguageStore } from "@/utils/interfaces";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Button } from "./ui/button";

export function GlassCard({
  title = "The Future of AI: Advancements and Challenges",
  description = "Explore the latest developments in artificial intelligence and the ethical considerations that come with these technological advancements. This field is rapidly evolving, bringing both exciting possibilities and complex challenges that society must address.",
  date = "2023-05-15",
  tags = ["AI", "Technology", "Ethics"],
  image = "https://i.imgur.com/jm9zFhK.jpg",
}: ArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl h-[150px] flex flex-row md:flex-row bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 backdrop-blur-md backdrop-filter ">
      <div className="md:w-1/4 h-full">
        <img
          alt={title}
          className="h-full w-full object-cover"
          height="300"
          src={image ? image : "https://i.imgur.com/jm9zFhK.jpg"}
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 md:w-3/4 overflow-hidden">
        <div className="overflow-hidden">
          <h2 className="mb-2 text-xl font-semibold leading-tight text-gray-800 dark:text-white line-clamp-1">
            {title}
          </h2>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {description}
          </p>
          {Array.isArray(tags) && tags.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Published on <FormatFullDate date={date} />
        </div>
      </div>
    </article>
  );
}

export const Card = ({
  title = "The Future of AI: Advancements and Challenges",
  description = "Explore the latest developments in artificial intelligence and the ethical considerations that come with these technological advancements. This field is rapidly evolving, bringing both exciting possibilities and complex challenges that society must address.",
  date = "2023-05-15",
  tags = ["AI", "Technology", "Ethics"],
  image = "https://i.imgur.com/jm9zFhK.jpg",
  slug,
}: ArticleCardProps) => {
  const { language } = useLanguageStore() as LanguageStore;
  return (
    <article className="group relative !border rounded-lg shadow-lg transition-all min-h-[120px] flex flex-col gap-5 md:flex-row bg-background/20  backdrop-blur-md backdrop-filter hover:shadow pt-6 px-5 pb-5 mb-2 hover:hover-card-dark hover:dark:hover-card-light">
      <div className="absolute -top-4 bg-background inline-flex items-center px-2 py-1.5 rounded font-medium tracking-wide leading-none text-black dark:text-white !border">
        <FormatFullDate date={date} locale={language} />
      </div>
      <div className="md:h-36 md:w-52 h-64 w-full rounded-lg border">
        <img
          alt={title}
          className="md:h-36 md:w-52 h-64 w-full rounded-lg !object-cover border"
          src={image ? image : "/public/ultimate-mercer-base.jpg"}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 overflow-hidden py-1">
        <Link href={`${slug}`} className="hover:underline">
          <h2 className="text-2xl font-bold leading-normal">{title}</h2>
        </Link>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mb-1 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <Link
          href={`${slug}`}
          className="hover:underline mt-1 ml-auto"
          aria-label={language === "en-us" ? "Read more" : "Leia mais"}
        >
          <p>{language === "en-us" ? "Read more" : "Leia mais"}</p>
        </Link>
      </div>
    </article>
  );
};

export const BackgroundCard = ({
  title = "The Future of AI: Advancements and Challenges",
  description = "Explore the latest developments in artificial intelligence and the ethical considerations that come with these technological advancements. This field is rapidly evolving, bringing both exciting possibilities and complex challenges that society must address.",
  date = "2023-05-15",
  tags = ["AI", "Technology", "Ethics"],
  image = "https://i.imgur.com/jm9zFhK.jpg",
  slug,
}: ArticleCardProps) => {
  const { language } = useLanguageStore() as LanguageStore;

  return (
    <article className="flex min-w-0 flex-col relative overflow-hidden cursor-default rounded-xl transition-all hover:hover-card-dark hover:dark:hover-card-light">
      <img
        alt={title}
        className="object-cover max-w-full h-[600px] block rounded-xl scale-125"
        src={image ? image : "/public/ultimate-mercer-base.jpg"}
      />
      <div className="absolute top-0 right-0 left-0 bottom-0 p-5 rounded flex flex-col justify-end">
        <div className="absolute top-4 z-10 bg-dark-500 dark:bg-light-500 inline-flex items-center px-2 py-1.5 rounded font-medium tracking-wide leading-none text-light-500 dark:text-dark-500">
          <FormatFullDate date={date} locale={language} />
        </div>
        <Link
          href={`${slug}`}
          className="hover:underline decoration-light-500 dark:decoration-dark-500"
        >
          <h2 className="text-2xl font-bold mb-2">
            <span className="dark:bg-light-500 dark:text-dark-500  bg-dark-500 text-light-500 marker-line !py-1">
              {title}
            </span>
          </h2>
        </Link>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          <span className="dark:bg-light-500 dark:text-dark-500  bg-dark-500 text-light-500 marker-line">
            {description}
          </span>
        </p>

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mb-1 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <Button variant={"default"} asChild>
          <Link
            href={`${slug}`}
            className=" ml-auto"
            aria-label={language === "en-us" ? "Read more" : "Leia mais"}
          >
            <p>{language === "en-us" ? "Read more" : "Leia mais"}</p>
          </Link>
        </Button>
      </div>
    </article>
  );
};
