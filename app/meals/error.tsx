"use client";

const error = () => {
  return (
    <>
      <h1 className="font-bold uppercase bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl text-center px-4">
        An Error Occured !
      </h1>
      <p className="text-center text-[#ddd6cb] mt-3 sm:mt-4 text-base sm:text-lg px-4">
        Sorry, something went wrong while loading the meals. Please try again
        later.
      </p>
    </>
  );
};

export default error;
