import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CountryPage from "./Pages/CountryPage";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const apiUrl = "https://restcountries.com/v3.1/all";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isDark={isDark}
              countries={countries}
              filteredCountries={filteredCountries}
              search={search}
              region={region}
              setFilteredCountries={setFilteredCountries}
              setIsDark={setIsDark}
              setRegion={setRegion}
              setSearch={setSearch}
            />
          }
        />
        <Route path="/:countryName" element={<CountryPage countries={countries} isDark={isDark} setIsDark={setIsDark} />} />
      </Routes>
    </Router>
  );
}

export default App;
