import Image from "next/image";
import Link from "next/link";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

interface MealItemProps {
  slug: string;
  title: string;
  image: string;
  summary: string;
  creator: string;
}

const MealItem = ({ title, slug, image, summary, creator }: MealItemProps) => {
  const imageMap: Record<string, any> = {
    "burger.jpg": burgerImg,
    "curry.jpg": curryImg,
    "dumplings.jpg": dumplingsImg,
    "macncheese.jpg": macncheeseImg,
    "pizza.jpg": pizzaImg,
    "schnitzel.jpg": schnitzelImg,
    "tomato-salad.jpg": tomatoSaladImg,
  };

  const filename =
    typeof image === "string" ? image.split("/").pop() || image : undefined;
  const src =
    filename && imageMap[filename]
      ? imageMap[filename]
      : image?.startsWith("/images/")
        ? image.replace("/images/", "/")
        : image;

  return (
    <article className="flex flex-col h-full rounded-xl shadow-xl overflow-hidden bg-linear-to-r from-[#2c1e19] to-[#25200f] text-[#ddd6cb] transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-60 w-full">
        <Image src={src} alt={title} fill className="object-cover" />
      </div>

      {/* Header */}
      <header className="px-5 pt-4">
        <h2 className="text-2xl font-semibold font-montserrat">{title}</h2>
        <p className="text-sm italic text-[#cfa69b] mt-1">by {creator}</p>
      </header>

      {/* Summary */}
      <div className="flex flex-col justify-between px-5 py-4 flex-1">
        <p className="text-[#e0d9cc] text-base">{summary}</p>

        {/* Actions */}
        <div className="mt-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block px-5 py-2 rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-lg transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;