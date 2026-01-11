import Image from "next/image";
import Link from "next/link";
import { getHeadlines } from "@/services/newsService";

export async function MainContainer() {
  const headlines = await getHeadlines();

  const MainHeadlines = headlines[0];
  const sideHeadlines = headlines.slice(1, 3);

  return (
    <div className="w-full pt-21 pb-16 gap-5 grid grid-cols-1 lg:grid-cols-2 ">
      <article className="flex flex-col gap-4 pb-16">
        <Link href={`/article/${MainHeadlines.id}`}>
          <span
            style={{ color: MainHeadlines.categoryColor }}
            className="font-bold text-[12px] uppercase"
          >
            {MainHeadlines.category}
          </span>
          <h2 className="font-bold text-2xl sm:text-[44px] lg:text-[58px] leading-tight">
            {MainHeadlines.title}
          </h2>
        </Link>
      </article>
      
      <div className=" gap-5 grid grid-cols-1 md:grid-cols-2">
        {sideHeadlines.map((headline) => (
          <Link key={headline.id} href={`/article/${headline.id}`}>
            <article className="flex flex-col">
              <div className="relative w-full h-47.5 ">
                2
                <Image
                  src={headline.imageUrl}
                  alt={headline.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 1024px) 100vw, 280px"
                />
              </div>
              <span
                style={{ color: headline.categoryColor }}
                className="font-bold text-[12px] py-3.75 pb-2"
              >
                {headline.category}
              </span>
              <h2 className="font-bold sm:text-[18px] lg:text-[20px]">
                {headline.title}
              </h2>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
