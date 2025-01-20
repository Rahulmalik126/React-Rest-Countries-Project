import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import CountriesCard from './CountriesCard';
const CountriesCardsList = ({ isDark, countries }) => {
  const navigate = useNavigate();

  const containerClass = isDark ? 'bg-[#111827] text-white' : 'bg-[#f1ffff] text-black';
  
  const handleCountryClick = (country) => {
    const countryName = country.name.common;
    navigate(`/${countryName}`); 
  };

  return (
    <div className={`flex justify-center items-center h-[100%] m-0 ${containerClass}`}>
      <div className="flex flex-wrap w-[90%] gap-y-[4rem] gap-x-[2%] mb-[50rem] justify-center items-center">
        {countries.map((country, index) => (
          <div
            key={index}
            onClick={() => handleCountryClick(country)}
            className="sm:w-[90%] md:w-[23.5%] cursor-pointer"
          >
            <CountriesCard Country={country} isDark={isDark} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesCardsList;
