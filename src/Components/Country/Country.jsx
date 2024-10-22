import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleShowFlag }) => {
  // console.log(country);
  const { name, flags, population, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h3>Name: {name.common} </h3>
      <img className="size" src={flags.png} alt="" />
      <h4>{population}</h4>
      <h3>{cca3}</h3>
      <button className={visited ? "visited" : ""} onClick={handleVisit}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleVisitedCountry(country)}>Mark Vsited</button>
      <button onClick={()=>handleShowFlag(flags.png)}>Show Flag</button>
    </div>
  );
};

export default Country;
