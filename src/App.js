import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
import Category from "./components/Category/Category.js";
import Services from "./components/Services/Services.js";
import Banner from "./components/Banner/Banner.js";
import classicwatch from "./assets/hero/classicwatch.png";

import Products from "./components/Products/Products.js";
import Footer from "./components/Footer/Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "20% OFF",
  title: "Timeless Elegance",
  date: "1 August to 1 September",
  image: classicwatch, 
  title2: "Classic Leather Strap",
  title3: "Luxury Collection",
  title4:
    "Experience the perfect blend of style and functionality with our Classic Leather Strap watch. Designed for the discerning individual, this timepiece is a statement of sophistication and precision.",
  bgColor: "#6f72b5",
};



const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
