import React from 'react';
import arrow from "../../assets/img/arrow.svg"
const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-start    gap-4">
      <p className="text-[#023047] font-semibold text-2xl sm:text-3xl md:text-4xl">{title}</p>
      <img className="w-6 h-5 sm:w-7 sm:h-6" src={arrow} alt="Arrow" />
    </div>
  );
};

export default SectionTitle;