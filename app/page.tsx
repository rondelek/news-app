import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";
import NewsList from "./NewsList";

export default async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  console.log(news);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
