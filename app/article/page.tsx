import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: DataEntry;
};

export default function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: any = searchParams;

  console.log("article title:", article);
  return (
    <article className="lg:px-16 xl:px-24 px-4">
      <section>
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="h-30 w-full rounded-t-3xl"
          />
        )}
        <div className="bg-white px-4 -translate-y-10 z-10 rounded-t-3xl">
          <h1 className="pt-6 sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
            {article.title}
          </h1>
          <div className="flex text-gray-500 pl-1 py-2 justify-center italic min-[510px]:text-xs text-[0.6rem]">
            <h2>By: {article.author}</h2>
            <p className="my-1">|</p>
            <h2>
              <LiveTimestamp time={article.published_at} />
            </h2>
          </div>
          <div className="font-bold">{article.description}</div>
        </div>
      </section>
    </article>
  );
}
