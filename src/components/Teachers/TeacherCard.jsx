import React from 'react';

const TeacherCard = ({ name, role, imgSrc }) => {
  return (
    <div className="min-w-[280px] sm:min-w-[330px] flex flex-col gap-5">
      <img src={imgSrc} alt={name} className="w-full h-auto" />
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#023047] font-medium text-xl md:text-2xl">{name}</p>
        <p className="text-[#023047] font-normal text-base md:text-lg">{role}</p>
      </div>
    </div>
  );
};

export default TeacherCard;