import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BottomNav = () => {

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-5 py-1 bg-gray-400">
        <NavLinks text="Home" link="/home" />
        <NavLinks text="About Us" link="/about-us" />
        <NavLinks text="About Disabilities" link="/about-disabilities" />
        <NavLinks text="Media" link="/media" />
        <NavLinks text="Contact Us" link="/contact-us" />
        <NavLinks text="Profile" link="/profile" />
      </div>
    </>
  );
};

export default BottomNav;

const NavLinks = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="px-3 py-1 rounded-md hover:cursor-pointer hover:opacity-40 duration-300"
    >
      <div className="text-center">
        {text === "Home" ? (
          <HomeIcon />
        ) : text === "About Us" ? (
          <InfoIcon />
        ) : text === "About Disabilities" ? (
          <WheelchairPickupIcon />
        ) : text === "Media" ? (
          <PermMediaIcon />
        ) : text === "Contact Us" ? (
          <PhoneIcon />
        ) : text === "Profile" ? (
          <AccountCircleIcon />
        ) : (
          "none"
        )}
        <div className="text-sm">
          <span>{text}</span>
        </div>
      </div>
    </Link>
  );
};
