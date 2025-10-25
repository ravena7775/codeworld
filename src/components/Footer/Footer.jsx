import React from 'react';
import Container from '../UI/Container';
import logo from "../../assets/img/footerlogo.svg"
import linkedin from "../../assets/img/linkedin.svg"
import instagram from "../../assets/img/instagram.svg"
import facebook from "../../assets/img/facebook.svg"
const Footer = () => {
  return (
    <footer className="py-10 bg-[#023047] text-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <img src={logo} alt="Logo" className="mb-4" />
            <ul className="text-base md:text-lg">
              <li>İxtisaslar</li>
              <li>Qrafik Dizayn UX/Uİ Dizayn</li>
              <li>Frontend Backend</li>
              <li>Data Analitika QA</li>
            </ul>
          </div>
          <div>
            <div className='flex gap-2'>
              <img src={linkedin} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </div>
            <div>
              <p>Diger</p>
              <p>Mexfilik</p>
              <p>Bizimle elaqe</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;