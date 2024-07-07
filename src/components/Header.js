import React, { useEffect, useState } from "react";
import Logo from "../images/header_logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [name, setName] = useState("Aman");
  console.log("name", name);

  const [isActive, setIsActive] = useState(false);
  console.log("isActive", isActive);

  useEffect(() => {
    console.log("useEffect");
  }, [name]);

  console.log("name", name);
  console.log("isActive", isActive);

  return (
    <div className="px-5 md:px-10 py-2 bg-gray-300 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img
          src={Logo}
          alt="Logo"
          className="h-7 w-7 md:h-12 md:w-12 rounded-full"
        />
        <h1
          className="text-lg md:text-2xl font-bold"
          onClick={() => setName("Ezee")}
        >
          सहदिव्या
        </h1>
      </div>
      <div className="bg-white px-3 py-1.5 rounded-md outline-none md:flex items-center justify-start space-x-2 flex-1 mx-5 hidden">
        <SearchIcon className="text-gray-600 hover:text-gray-900 duration-300" />
        <input type="text" className="outline-none flex-1" />
      </div>
      <div className="flex space-x-5">
        <Buttons text="Login" />
        <Buttons text="Register" />
      </div>
    </div>
  );
};

export default Header;

const Buttons = ({ text }) => {
  return (
    <div className="px-3 py-1 md:px-5 md:py-2 rounded-md bg-white hover:cursor-pointer hover:opacity-40 duration-300 md:text-base text-sm">
      <p className="font-semibold">{text}</p>
    </div>
  );
};
