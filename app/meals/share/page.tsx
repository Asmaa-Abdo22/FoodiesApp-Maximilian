import { shareMeal } from "@/lib/actions";
import ImagePicker from "../ImagePicker/ImagePicker";

export default function ShareMealPage() {
  return (
    <div className="min-h-screen rounded-xl bg-[#1c1410] text-[#ddd6cb] px-6 py-12">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Share your{" "}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="text-[#cfa69b] text-lg">
          Or any other meal you feel needs sharing!
        </p>
      </header>

      <main className="max-w-3xl mx-auto">
        <form
          className="space-y-6 bg-[#2a1f18] p-8 rounded-xl shadow-xl"
          action={shareMeal}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="inputStyle"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="inputStyle"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="title" className="mb-2 font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="inputStyle"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="summary" className="mb-2 font-semibold">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="inputStyle"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="instructions" className="mb-2 font-semibold">
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={8}
              required
              className="inputStyle resize-none"
            />
          </div>
          <ImagePicker label="Your meal image" name="image" />
          <div className="text-right">
            <button
              type="submit"
              className="cursor-pointer px-8 py-3 rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-semibold  transition-transform duration-300 shadow-lg"
            >
              Share Meal
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
