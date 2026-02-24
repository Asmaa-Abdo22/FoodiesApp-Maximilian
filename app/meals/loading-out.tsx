export const LoadingMeals = () => {
  return (
    <div className="rounded-4xl flex items-center justify-center h-full py-12 bg-linear-to-br from-[#2c1e19] to-[#25200f]">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-[#f9572a] border-b-[#ff9b05] border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        {/* Loading Text */}
        <p className="mt-4 text-[#ddd6cb] text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingMeals;