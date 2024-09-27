"use client";

import React, { useEffect, useState } from "react";
import styles from "./home.module.css";

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Chiavari");
  const [cities, setCities] = useState([]);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleDropdownItemClick = (name: string) => {
    setText(name);
    setIsEditing(false);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const fetchCities = async () => {
    const url =
      "https://wft-geo-db.p.rapidapi.com/v1/geo/locations/44.319494+9.424215/nearbyCities?types=CITY&radius=50&distanceUnit=KM&minPopulation=5000&limit=10";
    const options = {
      method: "GET",
      headers: {
        "X-Rapidapi-Key": "5ded3d8ab8mshf66f5f42585dbbdp1753a6jsnbf23818cfdd9",
        "X-Rapidapi-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCities(data.data);
      console.log("Cities:", data.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div>
          <a className={styles.normalText}>Discover events near</a>
          {isEditing ? (
            <input
              type="text"
              placeholder={text}
              onChange={handleInputChange}
              onBlur={handleBlur}
              autoFocus
              className={styles.largeTextInput}
            />
          ) : (
            <a className={styles.largeText} onClick={handleTextClick}>
              {text}
            </a>
          )}
          {isEditing ? (
            <div className={styles.dropdown}>
              {cities.map((item) => (
                <div key={item.id} className={styles.dropdownItem}
                onMouseDown={() => handleDropdownItemClick(item.name)}
>
                  {item.name}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.eventList}></div>
      <div className={styles.mapContainer}></div>
    </div>
  );
};

export default Home;
