import { getArticleById } from "@/services/newsService";
import { ArticlePageProps } from "../../../types/news";
import { Publicity } from "@/components/Publicity/Publicity";

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    return (
      <article className="pt-20 text-center px-37.5">
        <h1 className="text-xl font-bold">Artigo não encontrado</h1>
      </article>
    );
  }

  const [date, time] = article.publishedAt.split("T");
  const formattedDate = date.replaceAll("-", "/");
  const hour = time.slice(0, 5);

  return (
    <article className="lg:px-37.5 lg:py-12.25">
      <span
        style={{ color: article.categoryColor }}
        className="font-bold text-[12px]  py-3.75"
      >
        {article.category}
      </span>
      <h1 className="font-bold text-2xl leading-tight sm:text-[44px] lg:text-[58px]">
        {article.title}
      </h1>
      <p className="lg:py-7.5 lg:text-[25px]">{article.summary}</p>
      <span className="font-bold text-[12px] text-[#00000033]">
        {formattedDate} às {hour}, Por: {article.author}
      </span>
      <Publicity />
      <article className="lg:text-[20px] lg:space-y-6 leading-relaxed">
        {article.content.split(".").map((sentence, index) => (
          <p key={index}>{sentence.trim()}</p>
        ))}
      </article>
    </article>
  );
}
