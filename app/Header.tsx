import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Navlinks from "./Navlinks";
import Searchbox from "./Searchbox";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 py-10 items-center">
        <Bars3BottomLeftIcon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="dark:text-gray-100 font-serif text-[1.2rem] text-md sm:text-2xl md:text-4xl text-center underline decoration-blue-500">
            NEWS APP
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <button className="hidden md:inline hover:scale-105 duration-200 bg-slate-900 text-slate-200 px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
      <Navlinks />
      <Searchbox />
    </header>
  );
}
