import Link from "next/link";
import { getOthers } from "@/services/newsService";

const othersNews = await getOthers();

export function OthersNews() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {othersNews.map((news) => (
        <Link key={news.id} href={`/article/${news.id}`}>
          <div>
            <span
              style={
                {
                  "--category-color": news.categoryColor,
                } as React.CSSProperties
              }
              className="flex pl-3.75 font-bold text-[15px] leading-5 relative before:[''] before:absolute before:h-12.5 before:w-1.25 before:bg-(--category-color) before:rounded-md before:left-0 before:min-h-fit "
            >
              {news.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
