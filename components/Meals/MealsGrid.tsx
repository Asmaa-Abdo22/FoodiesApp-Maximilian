import MealItem from "./MealItem";

export interface Meal {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

const MealsGrid = ({ meals }: { meals: Meal[] }) => {
  return (
    <ul className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none p-0 m-0">
      {meals.map((meal) => (
        <li
          key={meal.id}
          className="bg-[#2a2a2a] text-[#ddd6cb] font-montserrat font-bold p-4 rounded-lg text-center shadow-md  transition-transform duration-200"
        >
          <MealItem
            title={meal.title}
            slug={meal.slug}
            image={meal.image}
            summary={meal.summary}
            creator={meal.creator}
          />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
