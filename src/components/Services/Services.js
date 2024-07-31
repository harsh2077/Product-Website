import React, { useState } from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-dark" />,
    title: "Free Shipping",
    description: "Free Shipping On All Orders",

  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-dark" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-dark" />,
    title: "Secure Payment",
    description: "All Payments Secure",

  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-dark" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-14">
      <div className="container my-14 md:my-20 flex">
        {/* Service items */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data, index) => (
            <div
              key={data.id}
              className="flex flex-col items-start sm:flex-row gap-4 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-br from-blue-500 to-purple-500 text-dark relative overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="icon-container">
                {data.icon}
              </div>
              <div>
                <h1 className="lg:text-xl font-bold transition-colors duration-300 hover:text-white">{data.title}</h1>
                <h1 className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-200">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
