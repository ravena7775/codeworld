import React from "react";

const ReviewCard = ({ name, review, className = "" }) => {
  return (
     <div 
    className={`${className} rounded-md md:p-6  text-[#023047] p-5 h-auto`}
>
      <h3 className="font-semibold text-xl md:text-2xl mb-2">{name}</h3>
      <p className="text-sm md:text-base leading-relaxed">{review}</p>
    </div>
  );
};

export default ReviewCard;