import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../Components/Header';

const CountryPage = ({ countries, isDark, setIsDark }) => {
  const { countryName } = useParams(); // Extract the country name from the URL
  const navigate = useNavigate();

  // Find the country by matching countryName to the common name
  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return <p>Country not found!</p>;
  }

  // Get the list of border countries
  const borderCountries = country?.borders?.map((borderCode) =>
    countries.find((found) => found.cca3 === borderCode)?.name.common
  );

  const handleBorderCountryClick = (borderCountry) => {
    // Navigate to the border country's page
    navigate(`/${borderCountry.toLowerCase()}`);
  };

  const containerClass = isDark ? 'bg-[#111827] text-white' : 'bg-[#f1ffff] text-black';
  const buttonTheme = isDark ? 'bg-[#2b3743] text-[#bbbbbb]' : 'bg-white text-black';
  return (
    <div>
      <Header themeChange={setIsDark} isDark={isDark} />
      <div className={`flex flex-col items-center bg-gray h-[80rem] ${containerClass}`}>
        <div className='flex w-[90%] mt-10'>
          <button
            className={`flex justify-center items-center gap-[1rem] mb-8 px-4 py-2 rounded w-[10rem] shadow-md ${buttonTheme}`}
            onClick={() => navigate("/")}
          >
            <FaArrowLeft />
            Back
          </button>
        </div>
        <div className='flex w-[90%] sm:items-start md:items-center sm:gap-[1rem] md:gap-[6rem] sm:flex-col md:flex-row'>
          <img
            className="sm:w-[100%] sm:h-[15rem] md:w-[40%] md:h-[20rem]"
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
          />
          <div className='flex flex-col'>
            <div>
              <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
              <div className='flex text-[0.9rem] sm:gap-[0.5rem] md:gap-[2rem] sm:w-[90%] sm:flex-col md:w-[full] md:flex-row'>
                <div className='flex flex-col w-[50%]'>
                  <p>
                    <strong>Native Name:</strong> {country.name.nativeName
                      ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].official
                      : "No Native Name"}
                  </p>
                  <p>
                    <strong>Population:</strong> {country.population.toLocaleString()}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Sub-Region:</strong> {country.subregion || "No Sub-Region"}
                  </p>
                  <p>
                    <strong>Capital:</strong> {Array.isArray(country.capital)
                      ? country.capital.join(", ")
                      : country.capital}
                  </p>
                </div>
                <div className='w-[50%]'>
                  <p>
                    <strong>Top Level Domain:</strong> {Array.isArray(country.tld)
                      ? country.tld.join(", ")
                      : country.tld}
                  </p>
                  <p>
                    <strong>Currency:</strong> {Object.keys(country.currencies || {}).length
                      ? country.currencies[Object.keys(country.currencies)[0]].name
                      : "N/A"}
                  </p>
                  <p>
                    <strong>Languages:</strong> {Object.values(country.languages || {}).join(", ") || "No Languages"}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Border Countries:</h3>
                {borderCountries && borderCountries.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {borderCountries.map((borderCountry, index) => (
                      <button
                        key={index}
                        className={`px-4 py-2  rounded shadow-md ${buttonTheme}`}
                        onClick={() => handleBorderCountryClick(borderCountry)}
                      >
                        {borderCountry}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p>No bordering countries.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
