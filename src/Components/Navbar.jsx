import React from "react";
import logo from "../assets/logo.svg";

const navMenu = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Offers",
    path: "#offers",
  },
  {
    name: "Blogs ",
    path: "#blogs",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-[12vh] lg:px-[90px] md:px-[80px] sm:px-[50px] px-[20px] fixed top-0 left-0 right-0 z-50 navbar">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className="flex items-center gap-[40px]">
        {navMenu?.map((item, index) => {
          return (
            <li key={index}>
              <a href={item?.path}>{item?.name}</a>
            </li>
          );
        })}
      </ul>

      <button className="btn py-[8px] px-[20px] bg-[#AD1A19] uppercase">
        Find a Table
      </button>
    </nav>
  );
};

export default Navbar;
