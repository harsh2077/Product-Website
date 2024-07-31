import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks1 = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const FooterLinks2 = [
  {
    title: "Trending Products",
    link: "/#trending-products",
  },
  {
    title: "Best Sell",
    link: "/#best-sell",
  },
  {
    title: "Top Rated",
    link: "/#top-rated",
  },
];
const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul className="space-y-3">
                {FooterLinks1.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {FooterLinks2.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-3">Address</h1>
            <div>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>New Delhi, IND</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-3xl hover:text-primary duration-200" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
