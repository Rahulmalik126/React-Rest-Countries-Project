import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchSection = ({ isDark, handleSearch, handleRegionChange }) => {
  const themeClass = isDark
    ? "bg-[#111827] text-white"
    : "bg-[#f1ffff] text-black";
  const inputTheme = isDark
    ? "bg-[#2b3743] text-[#bbbbbb]"
    : "bg-white text-black";

  return (
    <section className={`flex justify-center ${themeClass}`}>
      <div
        className={`flex items-start w-[90%] h-[150px] sm:mt-[1rem] sm:mb-[1rem] sm:flex-col sm:justify-start sm:gap-[2rem] md:flex-row md:justify-between md:mb-0  ${themeClass}`}
      >
        <div
          className={`flex justify-center items-center shadow-xl ${inputTheme}`}
        >
          <FaSearch className={`w-[2rem] h-[3rem] pl-[0.5rem] ${inputTheme}`} />
          <input
            onChange={(e) => handleSearch(e.target.value)}
            className={`h-[3.5rem] border-none outline-none ml-[1rem] sm:w-[15rem] md:w-[20rem] ${inputTheme}`}
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <select
          onChange={(e) => handleRegionChange(e.target.value)}
          className={`h-[3.5rem] text-[1.1rem] font-900 pl-[0.5rem] pr-[0.5rem] shadow-xl sm:w-[12rem] md:w-[16rem] ${inputTheme}`}
          name="region"
          id="region"
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchSection;
