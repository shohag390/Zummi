import React from "react";
import logo from "../assets/logo.svg";
import image_one from "../assets/food-4.jpg";
import image_two from "../assets/food-6.jpg";

import { FaCalendar, FaFacebookF } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const menu = [
  {
    name: "Breakfast",
    path: "#breakfast",
  },
  {
    name: "Lunch",
    path: "#lunch",
  },
  {
    name: "Dinner",
    path: "#dinner",
  },
  {
    name: "Vegetable",
    path: "#vegetable",
  },
  {
    name: "Korean Food",
    path: "#koreanfood",
  },
];
const resources = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Menu",
    path: "#menu",
  },
  {
    name: "Pages",
    path: "#pages",
  },
  {
    name: "Contact",
    path: "#contact",
  },
  {
    name: "Branch",
    path: "#branch",
  },
];

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#191919] lg:px-[90px] md:px-[80px] sm:px-[50px] px-[20px] grid grid-cols-4 gap-[30px] py-[50px]">
        <div className="">
          <img src={logo} alt="" />
          <p className="text-[#969696] py-[20px]">
            Morbi pharetra eros sed euismod pellentesque nulla risus lobortis
            purus quis maximus.
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="h-[40px] w-[40px] border-[1px] border-[#333333] hover:border-[#ff9d24] hover:bg-[#ff9d24] duration-500 flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="h-[40px] w-[40px] border-[1px] border-[#333333] hover:border-[#ff9d24] hover:bg-[#ff9d24] duration-500 flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="h-[40px] w-[40px] border-[1px] border-[#333333] hover:border-[#ff9d24] hover:bg-[#ff9d24] duration-500 flex items-center justify-center">
              <FaFacebookF />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[20px] uppercase pb-[20px]">Our Menu</h4>
          <ul>
            {menu?.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-[8px] pb-[10px] text-[#969696] hover:text-[#ff9d24] duration-500"
              >
                <MdKeyboardDoubleArrowRight className="text-[#ff9d24]" />
                <a href={item?.path}>{item?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[20px] uppercase pb-[20px]">Resources</h4>
          <ul>
            {resources?.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-[8px] pb-[10px] text-[#969696] hover:text-[#ff9d24] duration-500"
              >
                <MdKeyboardDoubleArrowRight className="text-[#ff9d24]" />
                <a href={item?.path}>{item?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[20px] uppercase pb-[20px]">Recent Post</h4>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[15px]">
              <div>
                <div className="h-[80px] w-[80px] relative bg-[#fff] overflow-hidden">
                  <img
                    className="absolute w-full h-full hover:scale-[1.1] duration-500 cursor-pointer"
                    src={image_one}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[8px] pb-[5px] text-[#969696] hover:text-[#ff9d24] cursor-pointer duration-500">
                  <FaCalendar />
                  March 27, 2024
                </div>
                <h4 className="text-[17px] uppercase hover:text-[#ff9d24] cursor-pointer duration-500">
                  Dining in Paris Explore Them in Town
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <div>
                <div className="h-[80px] w-[80px] relative bg-[#fff] overflow-hidden">
                  <img
                    className="absolute w-full h-full hover:scale-[1.1] duration-500 cursor-pointer"
                    src={image_two}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[8px] pb-[5px] text-[#969696] hover:text-[#ff9d24] cursor-pointer duration-500">
                  <FaCalendar />
                  March 27, 2024
                </div>
                <h4 className="text-[16px] uppercase hover:text-[#ff9d24] cursor-pointer duration-500">
                  Mouthwatering Recipes for Home Cooking.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10vh] lg:px-[90px] md:px-[80px] sm:px-[50px] px-[20px] flex items-center justify-between">
        <p>&copy; 2024 zummi All Rights Reserved by Md Shohag Ali</p>
        <div className="flex items-center gap-[10px]">
          <p>Privacy Policy</p>
          <div className="h-[3vh] w-[1px] bg-[#fff]"></div>
          <p>Term of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
