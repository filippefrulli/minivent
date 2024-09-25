import React from "react";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <a className={styles.normalText}>Discover events near</a>
      </div>
      <div className={styles.eventList}></div>
      <div className={styles.mapContainer}></div>
    </div>
  );
}

export default Home;