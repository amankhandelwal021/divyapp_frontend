import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header_logo.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const Logos = [
    {
      id: 0,
      src: "https://www.swavlambancard.gov.in/images/logo-mygov.png",
      link: "http://india.gov.in/",
    },
    {
      id: 1,
      src: "https://www.swavlambancard.gov.in/images/logo-chied-commissioner-gov.png",
      link: "http://www.ccdisabilities.nic.in/",
    },
    {
      id: 2,
      src: "https://www.swavlambancard.gov.in/images/logo-india-gov.png",
      link: "https://mygov.in/",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
        {Logos.map((item, index) => (
          <a href={item.link} target="_blank" rel="noreferrer">
            <div key={index}>
              <img src={item.src} alt="LOGO" />
            </div>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-10 py-2 bg-gray-300 h-screen sm:h-[400px] md:h-[200px] w-full">
        <div className="">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-12 w-12 rounded-full" />
            <h1 className="text-xl font-bold">सहदिव्या</h1>
          </div>
          <span className="">
            Here you can apply for the schemes and avail benifits.
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="px-3 py-1 font-semibold text-xl">Also Visit</span>
          <NavLinks text="Home" link="/home" />
          <NavLinks text="About Us" link="/about-us" />
          <NavLinks text="About Disabilities" link="/about-disabilities" />
          <NavLinks text="Profile" link="/profile" />
        </div>
        <div className="flex flex-col items-start">
          <span className="px-3 py-1 font-semibold text-xl">
            Important Links
          </span>
          <NavLinks text="Help" link="/help" />
          <NavLinks text="Contact Us" link="/contact-us" />
          <NavLinks text="Terms & Conditions" link="/terms-and-conditions" />
          <div className="px-3 py-1 space-x-5">
            <FacebookIcon className="hover:cursor-pointer hover:text-blue-600 duration-300" />
            <InstagramIcon className="hover:cursor-pointer hover:text-pink-700 duration-300" />
            <TwitterIcon className="hover:cursor-pointer hover:text-blue-500 duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const NavLinks = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="px-3 py-1 rounded-md hover:cursor-pointer hover:opacity-40 duration-300"
    >
      <div className="text-center">
        <div className="text-sm">
          <span>{text}</span>
        </div>
      </div>
    </Link>
  );
};
