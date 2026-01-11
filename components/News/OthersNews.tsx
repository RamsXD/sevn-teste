import Link from "next/link";
import { getOthers } from "@/services/newsService";

const othersNews = await getOthers();

export function OthersNews() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
      {othersNews.map((news) => (
        <Link key={news.id} href={`/article/${news.id}`}>
          <div>
            <span
              style={
                {
                  "--category-color": news.categoryColor,
                } as React.CSSProperties
              }
              className="pb-5 pr-5 flex font-bold text-[15px] justify-center relative before:[''] before:absolute before:h-12.5 before:w-1.25 before:bg-(--category-color) before:rounded-md before:left-1.25  pl-4"
            >
              {news.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
