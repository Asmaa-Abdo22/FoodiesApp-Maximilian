export const LoadingMeals = () => {
  return (
    <div className="rounded-4xl flex items-center justify-center h-full py-8 sm:py-12 px-4 bg-linear-to-br from-[#2c1e19] to-[#25200f]">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 sm:border-4 border-t-[#f9572a] border-b-[#ff9b05] border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        <p className="mt-3 sm:mt-4 text-[#ddd6cb] text-base sm:text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingMeals;