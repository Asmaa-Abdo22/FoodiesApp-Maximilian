"use client";

const error = () => {
  return (
    <>
      <h1 className="font-bold uppercase bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent text-5xl text-center">
        An Error Occured !
      </h1>
      <p className="text-center text-[#ddd6cb] mt-4 text-lg">
        Sorry, something went wrong while loading the meals. Please try again
        later.
      </p>
    </>
  );
};

export default error;
