import Image from "next/image";
import { getHeadlines } from "@/services/newsService";

export async function MainContainer() {
  const headlines = await getHeadlines();

  const MainHeadlines = headlines[0];
  const sideHeadlines = headlines.slice(1, 3);

  return (
    <div className="w-full py-21 gap-5 grid grid-cols-1 lg:grid-cols-2 ">
      <article className="flex flex-col gap-4 pb-16">
        <span
          style={{ color: MainHeadlines.categoryColor }}
          className="font-bold text-[12px] uppercase"
        >
          {MainHeadlines.category}
        </span>
        <h2 className="font-bold text-2xl sm:text-[44px] md:text-[44px] lg:text-[58px]">
          {MainHeadlines.title}
        </h2>
      </article>

      <div className=" gap-5 grid grid-cols-1 sm:grid-cols-2">
        {sideHeadlines.map((headline) => (
          <article key={headline.id} className="flex flex-col gap-3 ">
            <div className="relative w-full h-47.5 ">
              <Image
                src={headline.imageUrl}
                alt={headline.title}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 1024px) 100vw, 280px"
              />
            </div>
            <h2
              style={{ color: headline.categoryColor }}
              className="font-bold text-[12px] "
            >
              {headline.category}
            </h2>
            <h2 className="font-bold sm:text-[18px] lg:text-[20px]">
              {headline.title}
            </h2>
          </article>
        ))}
      </div>
    </div>
  );
}
