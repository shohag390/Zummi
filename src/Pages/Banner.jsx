import React from "react";
import Sheap from "../Components/Sheap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="h-[100vh] w-full banner relative top-0 left-0 lg:px-[90px] md:px-[80px] sm:px-[50px] px-[20px] flex items-center justify-between pt-[12vh]">
      <div className="w-[90%]">
        <Sheap text={"Traditional & Hygiene"} />
        <h1 className="text-[50px] uppercase font-medium w-[70%] leading-[60px] pt-[30px] ">
          For the <span className="text-[#ff9d24]">enjoyment</span> of
          scrumptious fare.
        </h1>
        <p className="w-[75%] pt-[15px] pb-[40px] text-[#969696] capitalize">
          Donec blandit massa at ex ullamcorper pellentesque. Vestibulum sit
          amet odio sit amet lacus vulputate luctus. Quisque ut ultrices risus.
          Mauris mattis, lectus eget tincidunt maximus, ursus fermentum enim
          mauris eu ante.
        </p>
        <div className="flex items-center gap-[20px]">
          <button className="py-[12px] px-[30px] border-[1px] border-[#AD1A19] hover:border-[#ff9d24] bg-[#AD1A19] hover:bg-[#ff9d24] duration-500 uppercase">
            Explore the map
          </button>
          <button className="py-[12px] px-[30px] border-[1px] border-[#333333] hover:border-[#ff9d24] hover:bg-[#ff9d24] duration-500 uppercase">
            discover more
          </button>
        </div>
      </div>
      <div className="w-[10%] flex flex-col gap-[10px] items-center">
        <div className="h-[150px] w-[1px] bg-[gray]"></div>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="h-[35px] w-[35px] bg-[blue] hover:bg-[#ff9d24] duration-500 rounded-full flex items-center justify-center">
            <FaFacebookF />
          </div>
          <div className="h-[35px] w-[35px] bg-[#006efe] hover:bg-[#ff9d24] duration-500 rounded-full flex items-center justify-center">
            <FaTwitter />
          </div>
          <div className="h-[35px] w-[35px] bg-[#ff1500c9] hover:bg-[#ff9d24] duration-500 rounded-full flex items-center justify-center">
            <FaInstagram />
          </div>
          <div className="h-[35px] w-[35px] bg-[#000062] hover:bg-[#ff9d24] duration-500 rounded-full flex items-center justify-center">
            <FaLinkedinIn />
          </div>
        </div>
        <div className="h-[150px] w-[1px] bg-[gray]"></div>
      </div>
    </div>
  );
};

export default Banner;
