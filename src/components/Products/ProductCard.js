import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* Card section */}
        {data.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            className="group shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            key={item.id}
          >
            <div className="relative">
              <img
                src={item.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* Hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <div className="flex items-center">
                  <button className="bg-orange-300 rounded-full px-2 py-3 mr-2">+</button>
                  <Button
                    text={"Add to cart"}
                    bgColor={"bg-primary shiny-button"}
                    textColor={"text-white"}
                  />
                  <button className="bg-orange-300 rounded-full px-3 py-3 ml-3">-</button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center leading-7 mt-2">
              <h2 className="font-semibold transition-transform duration-300 hover:scale-105">
                {item.title}
              </h2>
              <h2 className="font-bold">${item.price}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for shiny button effect */}
      <style jsx>{`
        .shiny-button {
          background: linear-gradient(90deg, #ff7e5f, #feb47b);
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          transition: background-color 0.3s ease;
        }

        .shiny-button:hover {
          background: linear-gradient(90deg, #feb47b, #ff7e5f);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
