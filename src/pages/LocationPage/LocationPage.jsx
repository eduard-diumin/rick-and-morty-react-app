import { useState, useEffect } from "react";
import s from "./LocationPage.module.css";
import axios from "axios";

export const LocationPage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location").then((response) => {
      setLocations(response.data.results);
    });
  }, []);

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Location page</h1>

      {locations.map((location) => (
        <>
          <ul key={location.id} className={s.locationList}>
            <li className={s.locationName}>Location name: <strong>{location.name}</strong></li>
            <li className={s.locationType}> Location type: <strong>{location.type}</strong></li>
            <li className={s.locationDimension}>The dimension in which the location is located: <strong>{location.dimension}</strong></li>
            <li className={s.locationResidents}>Number of characters seen in this location: <strong>{location.residents.length}</strong></li>
          </ul>
          <hr/>
        </>
      ))}
    </div>
  );
};
