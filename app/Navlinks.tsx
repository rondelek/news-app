"use client";

import { usePathname } from "next/navigation";
import { categories } from "../constants";
import Navlink from "./Navlink";

export default function Navlinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav className="grid sm:grid-cols-6 grid-cols-3 justify-items-center">
      {categories.map((category) => (
        <Navlink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}
