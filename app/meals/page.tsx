import MealsGrid from "@/components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";

const  MealsPage = async () => {
 const meals= await getMeals();
  return (
    <>
      {/* Header Section */}
      <header className="flex flex-col gap-12 mx-auto my-12 w-[90%] max-w-300 text-[#ddd6cb] text-lg text-center">
        <h1 className="font-montserrat text-3xl sm:text-4xl font-bold">
          Delicious Meals, Created{" "}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            By You
          </span>
        </h1>

        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It's easy and fun!
        </p>

        <p className="mt-4">
          <Link
            href="/meals/share"
            className="inline-block mt-4 px-4 py-2 rounded-md bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:opacity-90 transition"
          >
            Share your favorite recipe
          </Link>
        </p>
      </header>

      {/* Main Section */}
      <main className="w-[90%] max-w-300 mx-auto pb-12">
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
