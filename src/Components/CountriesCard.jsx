import React from "react";

const CountriesCard = ({ Country, isDark }) => {
  const cardClass = isDark ? "bg-[#2b3743] text-white" : "bg-white text-black";

  return (
    <div
      className={`flex flex-col gap-[2%] pb-8  h-[20rem] rounded-lg shadow-xl ${cardClass}`}
    >
      <img
        className="w-[100%] h-[9rem] rounded-sm "
        src={Country.flags.png}
        alt={`${Country.name.common} Flag.png`}
      />
      <div className="text-[18px] font-extrabold ml-5 mr-1 mt-2">
        {Country.name.common}
      </div>
      <ul className="list-none ml-5 ">
        <li className="font-sans text-[13px]">
          Population: {` ${Country.population.toLocaleString()}`}
        </li>
        <li className="font-sans text-[13px]">
          Region: {` ${Country.region}`}
        </li>
        <li className="font-sans text-[13px] mr-1">
          Capital:{" "}
          {Country.capital ? ` ${Country.capital.join(", ")}` : " No Capital"}
        </li>
      </ul>
    </div>
  );
};

export default CountriesCard;
