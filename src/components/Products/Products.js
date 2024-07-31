import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/p-1.png";
import Img2 from "../../assets/product/p-2.png";
import Img3 from "../../assets/product/p-3.png";
import Img4 from "../../assets/product/p-4.png";
import Img5 from "../../assets/product/p-5.png";
import Img6 from "../../assets/product/p-6.png";
import Img7 from "../../assets/product/p-7.png";
import Img8 from "../../assets/product/p-8.png";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Rolex Submariner",
    price: "8,500",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Patek Philippe",
    price: "30,000",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Audemars Royal Oak",
    price: "25,000",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Ladies A.Lange",
    price: "15,000",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Ladies Omega",
    price: "5,500",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Jaeger-LeCoultre",
    price: "7,200",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "IWC Schaffhausen",
    price: "6,800",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img8,
    title: "Cartier Ballon",
    price: "9,000",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
