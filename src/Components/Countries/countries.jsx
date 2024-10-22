import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [flag, setFlag] = useState([]);

  const handleShowFlag = (flags) => {
    let newFlag = [...flag, flags];
    setFlag(newFlag);
    console.log(flags);
  }

  const handleVisitedCountry = country => {
    let newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Visited Country</h4>
        <ul className="layout">
          {visitedCountry.map((visit, index) => (
            <li className="list" key={visit.cca3}>{index + 1}. {visit.name.common}</li>
          ))}
        </ul>
      </div>
      <div>
          {
            flag.map((flg, index) => (<img className="size" key={index} src={flg}></img>))
          }
      </div>
      <div className="layout">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleShowFlag={handleShowFlag}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
