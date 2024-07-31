import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 relative overflow-hidden">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl shadow-lg relative p-8"
        >
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm font-semibold animate-bounce transition-transform duration-300 hover:scale-105">
              {data.discount}
            </p>
            <h1 className="uppercase text-4xl lg:text-6xl font-extrabold mt-2 transition-transform duration-300 hover:scale-105">
              {data.title}
            </h1>
            <p className="text-sm mt-2 transition-transform duration-300 hover:scale-105">
              {data.date}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={data.image}
              alt=""
              className="w-[250px] md:w-[340px] mx-auto drop-shadow-lg object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="font-bold text-xl transition-transform duration-300 hover:scale-105">
              {data.title2}
            </p>
            <p className="text-3xl sm:text-5xl font-bold transition-transform duration-300 hover:scale-105">
              {data.title3}
            </p>
            <p className="text-sm tracking-wide leading-5 transition-transform duration-300 hover:scale-105">
              {data.title4}
            </p>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <button
            className="border-2 border-blue text-black py-2 px-6 rounded-full transition-transform duration-300 transform hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
