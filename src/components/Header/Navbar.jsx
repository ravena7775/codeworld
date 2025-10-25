import React, { useState } from "react";
import logo from "../../assets/img/logobig.svg";
import { Menu, X } from "lucide-react"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-transparent">
      <div className="h-[86px] flex items-center justify-between px-4 sm:px-6 md:px-12 py-5">
        <div>
          <img src={logo} alt="Logo" className="w-24 sm:w-32" />
        </div>

        <ul className="hidden md:flex font-medium text-xl sm:text-2xl gap-5 text-[#023047]">
          <li><a href="#">Haqqımızda</a></li>
          <li><a href="#">İxtisaslar</a></li>
          <li><a href="#">Təqaüdlər</a></li>
          <li><a href="#">Əlaqə</a></li>
        </ul>

        <div className="hidden md:flex h-[62px] w-[160px] bg-[#D1B200] rounded-[23px] items-center justify-center">
          <a className="text-[#023047] font-medium text-2xl" href="#">
            Qeydiyyat
          </a>
        </div>

        <button
          className="md:hidden flex items-center justify-center text-[#023047] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[86px] left-0 w-full bg-white/90 backdrop-blur-md shadow-md flex flex-col items-center py-8 gap-6 text-[#023047] text-xl font-medium md:hidden transition-all duration-300">
          <a href="#" className="hover:text-[#A25905]" onClick={() => setIsOpen(false)}>
            Haqqımızda
          </a>
          <a href="#" className="hover:text-[#A25905]" onClick={() => setIsOpen(false)}>
            İxtisaslar
          </a>
          <a href="#" className="hover:text-[#A25905]" onClick={() => setIsOpen(false)}>
            Təqaüdlər
          </a>
          <a href="#" className="hover:text-[#A25905]" onClick={() => setIsOpen(false)}>
            Əlaqə
          </a>
          <a
            href="#"
            className="bg-[#D1B200] text-[#023047] px-8 py-3 rounded-[23px] font-semibold hover:bg-[#b79c00] transition"
            onClick={() => setIsOpen(false)}
          >
            Qeydiyyat
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
