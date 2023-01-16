"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Searchbox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5 xl:px-0"
    >
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-white"
      />
      <button
        type="submit"
        disabled={!input}
        className="disabled:bg-slate-400 bg-blue-700 hover:bg-blue-600 text-slate-200 hover:text-white rounded-full py-1 px-4 cursor-pointer duration-200"
      >
        Search
      </button>
    </form>
  );
}
