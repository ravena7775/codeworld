
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import a from "../../assets/img/headerBg.jpg"
const Header = () => {
  return (
    <header className="w-full">
      <Navbar />
      <HeroSection />
    </header>
  );
};

export default Header;