"use client";

import { useRouter } from "next/navigation";
import LiveTimestamp from "./LiveTimestamp";

type Props = {
  article: DataEntry;
};

export default function Article({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };
  return (
    <article
      onClick={handleClick}
      className="flex flex-col hover:scale-105 transition-all duration-200 cursor-pointer"
    >
      {article.image && (
        <div>
          <div className="bg-gray-100 dark:bg-zinc-900">
            <img
              src={article.image}
              alt={article.title}
              className="h-50 w-full object-cover rounded-t-2xl shadow-md"
            />
          </div>
          <div className="shadow-sm hover:shadow-lg  flex-1 flex flex-col bg-white rounded-b-2xl">
            <div className="flex-1 flex flex-col p-5">
              <h2 className="font-bold font-serif">{article.title}</h2>
              <section className="mt-2 flex-1">
                <p className="text-xs line-clamp-6">{article.description}</p>
              </section>
              <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                <p>{article.source}</p>
                <p className="mx-2">|</p>
                <p>
                  <LiveTimestamp time={article.published_at} />
                </p>
              </footer>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
