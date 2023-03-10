import { categories } from "../../../constants";
import fetchNews from "../../../utils/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};

export default async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="dark:text-slate-100 underline decoration-blue-500">
        {category}
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
