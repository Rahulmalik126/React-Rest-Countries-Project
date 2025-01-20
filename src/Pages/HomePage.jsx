import React, { useEffect } from "react";
import Header from "../Components/Header";
import CountriesCardsList from "../Components/CountriesCardsList";
import SearchSection from "../Components/SearchSection";

const HomePage = ({
  isDark,
  countries,
  filteredCountries,
  search,
  region,
  setCountries,
  setFilteredCountries,
  setIsDark,
  setRegion,
  setSearch,
}) => {
  const handleSearch = (search) => {
    setSearch(search);
  };

  const handleRegionChange = (region) => {
    setRegion(region);
  };

  useEffect(() => {
    const filteredData = countries.filter((country) => {
      const isMatchingName = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const isMatchingRegion = region
        ? country.region.toLowerCase() === region.toLowerCase()
        : true;
      return isMatchingName && isMatchingRegion;
    });
    setFilteredCountries(filteredData);
  }, [search, region, countries]);

  const changeTheme = (isDark) => {
    setIsDark(isDark); 
  };

  return (
    <>
      <Header themeChange={changeTheme} isDark={isDark} />
      <SearchSection
        isDark={isDark}
        handleSearch={handleSearch}
        handleRegionChange={handleRegionChange}
      />
      <CountriesCardsList isDark={isDark} countries={filteredCountries} />
    </>
  );
};

export default HomePage;
