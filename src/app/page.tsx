"use client";

import React, { useState } from "react";
import styles from "./home.module.css";

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Chiavari");

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

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
        </div>
      </div>
      <div className={styles.eventList}></div>
      <div className={styles.mapContainer}></div>
    </div>
  );
};

export default Home;
