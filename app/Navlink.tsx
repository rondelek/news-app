import Image from "next/image";
import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

export default function Navlink({ category, isActive }: Props) {
  return (
    <Link href={`/news/${category}`} className="navlink relative my-2">
      <img
        className="w-full h-full rounded-full absolute"
        src={`/${category}.jpg`}
        alt="Rounded avatar"
      />

      <p
        className={`${
          isActive && "bg-opacity-10"
        } flex items-center justify-center z-50 bg-black lg:h-[110px] lg:w-[110px] md:h-[90px] md:w-[90px] sm:h-[80px] sm:w-[80px] h-[70px] w-[70px] rounded-full bg-opacity-50 hover:bg-opacity-20  duration-200 ease-out`}
      >
        {category}
      </p>
    </Link>
  );
}
