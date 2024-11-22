import React from "react";
import rightSheap from "../assets/right-shape.svg";
import leftSheap from "../assets/left-shape.svg";

const Sheap = ({ text }) => {
  return (
    <div className="flex items-center">
      <img className="h-[40px]" src={leftSheap} alt="" />
      <div className="bg-[#1a1a1a] h-[40px] px-[30px] border-t-[1.5px] border-b-[1.5px] border-[#333333] flex items-center uppercase">
        {text}
      </div>
      <img className="h-[40px]" src={rightSheap} alt="" />
    </div>
  );
};

export default Sheap;
