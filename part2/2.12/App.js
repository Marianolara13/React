import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
const Country = ({ name, capital, area, flag, languages, inputLength }) => {
  
  const [show] = useState(false);
  
  const lessInfo = (
    <p>
      <span>{name}</span>
    </p>
  );
  
  const moreInfo = (
    <div style={{ borderBottom: "1px solid #ddd" }}>
      <h3>{name}</h3>
      <p>Capital: {capital}</p> 
      <p>Area: {area}</p>
      <span>Languages: </span>
      <ul>{Object.keys(languages).map(key => 
          <li key={key}>
            {languages[key]}
          </li>
        )}
      </ul>
      <img src={flag} alt="Country flag" style={{ display: "block" }} />
    </div>
  );

  if (inputLength === 1) return moreInfo;
  if (!show) return lessInfo;
  return moreInfo;

};

const CountryDisplay = ({ showCountries, inputLength }) => {
  if (showCountries.length > 10) return "Too many matches specify another filter";
  
  const countries = showCountries.map((country) => (
    <Country
      inputLength={inputLength}
      flag={country.flags.png}
      area={country.area}
      capital={country.capital}
      key={country.name.common}
      name={country.name.common}
      languages={country.languages}
    />
  ));
  
  return countries;

};

const App = () => {
  
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    if (countries.length === 0) return;
    let searchedCountries = countries.filter((country) => country.name.common.toLowerCase().includes(value.toLowerCase()));
    setShowCountries(searchedCountries);
  };

  return (
    <div>
      <div>
        find countries <input type="text" value={search} onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <div>{showCountries.length > 0 ? search === "" ? null : <CountryDisplay showCountries={showCountries} inputLength={showCountries.length} /> : null}</div>
    </div>
  );

};

export default App;