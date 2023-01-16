import fetchNews from "../../utils/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};

export default async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="dark:text-slate-100 underline decoration-blue-500">
        Search results for: {searchParams?.term}
      </h1>
      <NewsList news={news} />
    </div>
  );
}
