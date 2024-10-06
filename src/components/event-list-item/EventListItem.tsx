import React from "react";
import styles from "./EventListItem.module.css";

interface EventListItemProps {
  imageSrc: string;
  title: string;
  location: string;
  date: string;
  price: number;
}

const EventListItem: React.FC<EventListItemProps> = ({ imageSrc, title, location, date, price }) => {
  return (
    <div className={styles.eventListItem}>
      <img src={imageSrc} alt={title} className={styles.eventImage} />
      <div className={styles.eventDetails}>
        <h3 className={styles.eventTitle}>{title}</h3>
        <p className={styles.eventLocation}>{location}</p>
        <p className={styles.eventDate}>{date}</p>
      </div>
    </div>
  );
};

export default EventListItem;