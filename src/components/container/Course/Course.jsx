import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
      
      <img className="object-cover h-32"  src={image} alt="" />
    
      <div className="mt-2 text-xs text-Teal">{category}</div>
      <div className="text-sm mt-2 font-bold">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          
         
        </div>
        <div className="flex items-center gap-2">
         
         
        </div>
        
      </div>
    </div>
  );
};

export default Course;
