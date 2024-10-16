// import { Badge } from "@/components/ui/badge";

// interface ArticleCardProps {
//   title: string;
//   description: string;
//   date: string;
//   tags?: string[];
//   image: string;
// }

// export default function GlassCard({
//   title = "The Future of AI: Advancements and Challenges",
//   description = "Explore the latest developments in artificial intelligence and the ethical considerations that come with these technological advancements. This field is rapidly evolving, bringing both exciting possibilities and complex challenges that society must address.",
//   date = "2023-05-15",
//   tags = ["AI", "Technology", "Ethics"],
//   image = "https://i.imgur.com/jm9zFhK.jpg",
// }: ArticleCardProps) {
//   return (
//     <article className="overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl h-[300px] flex flex-col md:flex-row">
//       <div className="md:w-1/3 h-full">
//         <img
//           alt={title}
//           className="h-full w-full object-cover"
//           height="300"
//           src={image}
//           style={{
//             aspectRatio: "400/300",
//             objectFit: "cover",
//           }}
//           width="400"
//         />
//       </div>
//       <div className="flex flex-1 flex-col justify-between p-4 backdrop-blur-md backdrop-filter md:w-2/3 bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 overflow-hidden">
//         <div className="overflow-hidden">
//           <h2 className="mb-2 text-xl font-semibold leading-tight text-gray-800 dark:text-white line-clamp-1">
//             {title}
//           </h2>
//           <p className="mb-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
//             {description}
//           </p>
//           {Array.isArray(tags) && tags.length > 0 && (
//             <div className="mb-2 flex flex-wrap gap-1">
//               {tags.map((tag) => (
//                 <Badge key={tag} variant="secondary" className="text-xs">
//                   {tag}
//                 </Badge>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="text-xs text-gray-500 dark:text-gray-400">
//           Published on {new Date(date).toLocaleDateString()}
//         </div>
//       </div>
//     </article>
//   );
// }

import { Badge } from "@/components/ui/badge";
import { FormatFullTimeStamp, FormatFullDate } from "./date-format";
import Link from "next/link";
import type { ArticleCardProps } from "@/utils/interfaces";

export function GlassCard({
  title = "The Future of AI: Advancements and Challenges",
  description = "Explore the latest developments in artificial intelligence and the ethical considerations that come with these technological advancements. This field is rapidly evolving, bringing both exciting possibilities and complex challenges that society must address.",
  date = "2023-05-15",
  tags = ["AI", "Technology", "Ethics"],
  image = "https://i.imgur.com/jm9zFhK.jpg",
}: ArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl h-[150px] flex flex-row md:flex-row bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 backdrop-blur-md backdrop-filter">
      <div className="md:w-1/3 h-full">
        <img
          alt={title}
          className="h-full w-full object-cover"
          height="300"
          src={image}
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 md:w-2/3 overflow-hidden">
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
          Published on {new Date(date).toLocaleDateString()}
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
  return (
    <article className="relative !border rounded-lg transition-all min-h-[120px] flex flex-row gap-5 md:flex-row bg-background/20  backdrop-blur-md backdrop-filter hover:shadow pt-6 px-5 pb-5 mb-2">
      <div className="absolute -top-4 bg-background dark:bg-black inline-flex items-center px-2 py-1.5 rounded font-medium tracking-wide leading-none text-black dark:text-white !border">
        <FormatFullDate date={date} />
        {/* {new Date(date).toLocaleDateString()} */}
      </div>
      <div className="h-32 w-48 rounded-lg border">
        <img
          alt={title}
          className="h-32 w-48 rounded-lg !object-cover border"
          src={"https://i.imgur.com/55Kcg9V.jpeg"}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 overflow-hidden">
        <Link href={`blog/${slug}`} className="hover:underline">
          <h2 className="text-xl font-bold leading-normal">{title}</h2>
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
      </div>
    </article>
  );
};
