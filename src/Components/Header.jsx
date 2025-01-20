import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ themeChange, isDark }) => {
  const changeTheme = () => {
    themeChange(!isDark);  
  };

  const headerClass = isDark ? "bg-[#2b3743] text-white" : "bg-[#f1ffff] text-black";
  const buttonClass = isDark ? "bg-[#2b3743] text-white" : "bg-[#f1ffff] text-black";

  return (
    <header className={`flex justify-center shadow-md ${headerClass}`}>
      <div className={`flex w-[90%] h-24 justify-between items-center sm:h-20 md:h-20 ${headerClass}`}>
        <div className="font-sans sm:text-[1rem] md:text-3xl font-extrabold">
          Where in the world?
        </div>
        <button
          onClick={changeTheme}
          className={`flex items-center font-sans sm:text-[1rem] md:text-lg font-bold border-none ${buttonClass}`}
        >
          {isDark ? <FaSun className="mt-1 mr-2" /> : <FaMoon className="mt-1 mr-2" />}
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
