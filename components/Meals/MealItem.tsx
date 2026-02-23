import Image from "next/image";
import Link from "next/link";

interface MealItemProps {
  slug: string;
  title: string;
  image: string;
  summary: string;

  creator: string;
}

const MealItem = ({ title, slug, image, summary, creator }: MealItemProps) => {
  return (
    <article className="flex flex-col justify-between h-full rounded-md shadow-md overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-linear-to-r from-[#2c1e19] to-[#25200f]">
      {/* Image Section */}
      <div className="relative h-60 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Header Text */}
      <header className="px-4 pt-2">
        <h2 className="m-0 text-xl font-montserrat">{title}</h2>
        <p className="text-sm italic text-[#cfa69b] m-0">by {creator}</p>
      </header>

      {/* Content / Summary */}
      <div className="flex flex-col justify-between h-full">
        <p className="px-4 pt-2">{summary}</p>

        {/* Actions */}
        <div className="px-4 py-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-2 px-4 py-2 rounded-md bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
