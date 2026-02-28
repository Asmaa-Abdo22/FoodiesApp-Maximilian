import Image from "next/image";
import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
export const metadata = {
  title: "Community - Foodie Haven",
  description:
    "Join our food-loving community and share your favorite recipes!",
};

export default function CommunityPage() {
  return (
    <>
      <div className="pb-14">
        {/* Header */}
        <header className=" flex flex-col items-center gap-12 mx-auto my-12 text-center text-[#ddd6cb] w-[90%] max-w-300">
          <h1 className="font-montserrat text-2xl sm:text-3xl">
            One shared passion:{" "}
            <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
              Food
            </span>
          </h1>
          <p className="text-lg sm:text-xl">
            Join our community and share your favorite recipes!
          </p>
        </header>

        {/* Main Content */}
        <main className="w-[90%] max-w-160 mx-auto text-center">
          <h2 className="font-montserrat text-2xl sm:text-3xl mb-12 text-[#ddd6cb]">
            Community Perks
          </h2>

          <ul className="flex flex-col gap-8 list-none p-0">
            <li className="flex flex-col items-center gap-8">
              <Image
                src={mealIcon}
                alt="A delicious meal"
                className="w-32 h-32 object-contain"
              />
              <p className="font-montserrat text-xl font-bold text-[#ddd6cb] m-0">
                Share & discover recipes
              </p>
            </li>

            <li className="flex flex-col items-center gap-8">
              <Image
                src={communityIcon}
                alt="A crowd of people, cooking"
                className="w-32 h-32 object-contain"
              />
              <p className="font-montserrat text-xl font-bold text-[#ddd6cb] m-0">
                Find new friends & like-minded people
              </p>
            </li>

            <li className="flex flex-col items-center gap-8">
              <Image
                src={eventsIcon}
                alt="A crowd of people at a cooking event"
                className="w-32 h-32 object-contain"
              />
              <p className="font-montserrat text-xl font-bold text-[#ddd6cb] m-0">
                Participate in exclusive events
              </p>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
