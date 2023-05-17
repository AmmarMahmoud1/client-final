import React from "react";
import logo from "./../assets/Images/logo.png";

const Header = () => {
  return (
    <div className="flex items-center gap-80 justify-start mx-10">
      <img src={logo} className="w-[30px] md:w-[50px] object-cover" />
    </div>
  );
};

export default Header;
