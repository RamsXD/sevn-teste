import Link from "next/link";
import { getOthers } from "@/services/newsService";

const othersNews = await getOthers();

export function OthersNews() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {othersNews.map((news) => (
        <Link key={news.id} href={`/article/${news.id}`}>
          <div className="flex relative items-center min-h-[50px]">
            <span
              style={{ backgroundColor: news.categoryColor }}
              className="absolute left-0 h-12.5 w-1.25 rounded-md"
            />
            <span className="pl-3.75 font-bold text-[15px] leading-5 ">
              {news.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
