import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ btn }) => {
  return <button className=" border-4 w-fit  rounded-2xl  px-4 py-2 bg-[#292F36] text-white  flex items-center gap-2 ">
    {btn} <div className="text-orange-300"><FaArrowRight/></div>
    </button>;
    
};

export default Button;
