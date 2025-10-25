import React from 'react';
import Line4 from "../../assets/img/Line 4.svg";
const CourseCard = ({ title, iconSrc }) => {
  return (
    <div className="w-full sm:w-[300px] md:w-[372px] h-[135px] bg-[#D1B200] px-4 py-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <p className="font-medium text-xl md:text-2xl">{title}</p>
        <img className="w-8 h-8 md:w-10 md:h-10" src={iconSrc} alt={title} />
      </div>
      <div>
        <img src={Line4} alt="Line" className="w-full" />
      </div>
    </div>
  );
};

export default CourseCard;