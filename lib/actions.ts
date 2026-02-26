"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  const title = formData.get("title");
  const summary = formData.get("summary");
  const instructions = formData.get("instructions");
  const image = formData.get("image");
  const creator = formData.get("name");
  const creator_email = formData.get("email");

  if (
    typeof title !== "string" ||
    typeof summary !== "string" ||
    typeof instructions !== "string" ||
    typeof creator !== "string" ||
    typeof creator_email !== "string" ||
    !title.trim() ||
    !creator.trim() ||
    !creator_email.trim()
  ) {
    throw new Error("Invalid input: all text fields are required.");
  }

  if (!(image instanceof File) || image.size === 0) {
    throw new Error("Please select an image for your meal.");
  }

  await saveMeal({
    slug: "",
    title: title.trim(),
    summary: summary.trim(),
    instructions: instructions.trim(),
    image,
    creator: creator.trim(),
    creator_email: creator_email.trim(),
  });

  redirect("/meals");
}