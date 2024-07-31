import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import home from "../../assets/image.png";

const MenuLinks1 = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blog",
  },
];

const MenuLinks2 = [
  {
    id: 1,
    name: "Trending Products",
    link: "/trending-products",
  },
  {
    id: 2,
    name: "Best Sell",
    link: "/best-sell",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/top-rated",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer group">
            <button className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 transition-transform duration-300 hover:scale-110">
    <img src={home} alt="Logo" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
</button>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                <ul className="space-y-2">
                  {MenuLinks1.map((data, index) => (
                    <li key={index}>
                      <a
                        className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-gray-600 dark:text-gray-400 flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-2 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:scale-105">
    <img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="Google Logo" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
    Login
</div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            <button className="relative p-3" >
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                1
              </div>
            </button>

            <div className="relative cursor-pointer group">
              <button className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                Quick Links
                <span>
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </span>
              </button>

              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                <ul className="space-y-2">
                  {MenuLinks2.map((data, index) => (
                    <li key={index}>
                      <a
                        className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
