import React from 'react';
import arrowIcon from '../../assets/img/arrow.svg';
const ScholarshipCard = ({ title, description, iconSrc }) => {
  return (
    <div
      className="px-5 py-12 w-full sm:w-[280px] md:w-[303px] h-auto md:h-[456px] rounded-[20px] bg-[radial-gradient(ellipse_at_center,#A5D6F5_0%,#BFE4F6_40%,#E8F7FC_100%)] shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
    >
      <div className="flex items-start justify-between mb-6">
        <img src={iconSrc} alt={title} className="w-20 h-20 md:w-24 md:h-24" />
        <img src={arrowIcon} alt="Arrow" className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <p className="text-[#023047] font-semibold text-lg md:text-xl mb-3">{title}</p>
      <p className="text-[#023047] font-normal text-sm md:text-base leading-5 md:leading-6">{description}</p>
    </div>
  );
};

export default ScholarshipCard;