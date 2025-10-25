import React from "react";
import Button from "../UI/Button";
import headerImage from "../../assets/img/headerBg.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative h-[600px] sm:h-[700px] md:h-[835px] bg-cover bg-center bg-no-repeat px-6 sm:px-12 md:px-20 py-16 md:py-24"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="absolute bottom-0 left-0 w-full h-[100px] md:h-[150px] bg-gradient-to-t from-white to-transparent"></div>

      <div className="h-auto md:h-[464px] w-full flex flex-col items-center justify-center gap-4 md:gap-9 relative z-10 text-center">
        <p className="font-extrabold text-4xl sm:text-6xl md:text-8xl text-white">
          Bizimlə təhsildə yeniliyə doğru addım at!
        </p>
        <p className="font-semibold text-2xl sm:text-3xl md:text-4xl text-white">
          Axtardığın ixtisaslar burda
        </p>

        <ul className="w-full md:w-[960px] flex flex-wrap gap-4 md:gap-5 justify-center text-base md:text-xl font-normal text-white">
          <li><a href="">Qrafik Dizayn</a></li>
          <li><a href="">UX/UI design</a></li>
          <li><a href="">Frontend proqramlaşdırma</a></li>
          <li><a href="">Backend proqramlaşdırma</a></li>
          <li><a href="">Data Analitika</a></li>
        </ul>

        <Button className="w-[180px] md:w-[211px] h-[50px] md:h-[62px] bg-[#A25905]">
          Bizə qoşul
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
