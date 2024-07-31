import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/sportwatch.png";
import Image2 from "../../assets/hero/techwatxh.png"; 
import Image3 from "../../assets/hero/handwatch.png"; 

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Adventure Ready",
    title: "Durable",
    title2: "Sport Watch",
    
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Smart Technology",
    title: "Innovative",
    title2: "Wrist Watch",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Timeless Elegance",
    title: "Classic",
    title2: "Wrist Watch",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 text-2xl text-gray-800 transition-colors duration-300 hover:text-purple-400">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold ">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className=" text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold transition-colors duration-300 hover:text-green-600">
                      {data.title2}
                    </h1>
                  </div>
                  <div className="order-1 sm:order-2">
                     <div className="relative z-10 ">{/*hover:opacity-0 */}
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
