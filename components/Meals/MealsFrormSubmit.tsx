"use client";

import { useFormStatus } from "react-dom";

export const MealsFrormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        disabled={pending}
        type="submit"
        className="cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-sm sm:text-base rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-semibold transition-transform duration-300 shadow-lg"
      >
        {pending ? "Submitting..." : "Share Meal"}
      </button>
    </>
  );
};

export default MealsFrormSubmit;
