import Image from "next/image";
import Link from "next/link";
import { ThumbsUp, Eye } from "lucide-react";
import { CinemaArticle } from "@/types/cinema-corner";

interface ArticleCardProps {
  article: CinemaArticle;
  variant?: "featured" | "compact";
}

export default function ArticleCard({
  article,
  variant = "compact",
}: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <article className="flex flex-col gap-y-4">
        <aside className="max-h-[476px] group transition-all duration-300 ease-in-out md:hover:text-orange-500">
          <Link href={`/binh-luan-phim/${article.slug}/`}>
            <Image
              src={article.image}
              alt={article.title}
              width={445}
              height={300}
              className="rounded-lg md:rounded md:w-full w-full h-[232px] md:h-[215px] lg:h-[300px] xl:h-full max-h-[400px] group-hover:md:scale-105 transition-all duration-300 object-cover"
              loading="lazy"
            />
          </Link>

          <aside className="descriptions text-left mt-4 md:mt-7">
            <Link
              href={`/binh-luan-phim/${article.slug}/`}
              className="text-xl font-bold md:hover:text-orange-500 transition-all duration-300 overflow-hidden block"
            >
              {article.title}
            </Link>

            <div className="card__votes flex mt-2 gap-2">
              <button
                type="button"
                className="h-[20px] text-xs text-white hover:text-white bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:ring-orange-300 rounded px-3 inline-flex items-center gap-1 transition-colors"
              >
                <ThumbsUp size={14} />
                Thích
              </button>
              <button className="text-xs text-gray-700 bg-gray-200 h-[20px] rounded px-3 hover:text-gray-900 inline-flex items-center gap-1 transition-colors">
                <Eye size={14} />
                {article.views}
              </button>
            </div>
          </aside>
        </aside>
      </article>
    );
  }

  return (
    <aside className="flex gap-x-2 w-full max-h-[80px] md:max-h-[150px] group transition-all duration-300 ease-in-out md:hover:text-orange-500">
      <Link
        href={`/binh-luan-phim/${article.slug}/`}
        className="w-[30%] md:w-[35%] flex-shrink-0"
      >
        <Image
          src={article.image}
          alt={article.title}
          width={195}
          height={150}
          className="rounded-lg md:rounded md:w-[195px] md:h-full w-[120px] h-[75px] group-hover:md:scale-105 transition-all duration-300 object-cover"
          loading="lazy"
        />
      </Link>

      <aside
        className="descriptions title__movie text-left w-[70%] md:w-[65%] flex flex-col justify-between"
        style={{ lineHeight: "120%" }}
      >
        <Link
          href={`/binh-luan-phim/${article.slug}/`}
          className="text-sm md:text-base xl:text-lg font-normal md:font-bold hover:text-orange-500 transition-all duration-300 overflow-hidden leading-normal line-clamp-2"
        >
          {article.title}
        </Link>

        <div className="card__votes flex mt-2 gap-2">
          <button
            type="button"
            className="h-[20px] text-xs text-white hover:text-white bg-orange-500 hover:bg-orange-600 focus:ring-1 focus:ring-orange-300 rounded px-3 inline-flex items-center gap-1 transition-colors"
          >
            <ThumbsUp size={12} />
            Thích
          </button>
          <button className="text-xs text-gray-700 bg-gray-200 h-[20px] rounded px-3 hover:text-gray-900 inline-flex items-center gap-1 transition-colors">
            <Eye size={12} />
            {article.views}
          </button>
        </div>
      </aside>
    </aside>
  );
}
