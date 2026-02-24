import { Meal } from "@/components/Meals/MealsGrid";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to load meals");
  return db.prepare("SELECT * FROM meals").all() as Meal[];
}

export  function getMealBySlug(slug: string) {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug);
}
