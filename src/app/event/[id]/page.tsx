"use client";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import styles from "./eventdetails.module.css";
import testEvents from "../../../lib/testevents";
import ImageSlider from "../../../components/image-slider/ImageSlider";

const EventDetailsPage = ({ params }: { params: { id: string } }) => {
  const event = testEvents.find((event) => event.id === parseInt(params.id));

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <a href="/" className={styles.backIcon}>
          <IoArrowBack />
        </a>
        <h1 className={styles.title}>{event.title}</h1>
      </div>
      <div className={styles.subtitle}>
        <p>{event.date}</p>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.textDetails}>
          <div className={styles.tuple}>
            <strong>Description</strong>
            <p>{event.description}</p>
          </div>
          <div className={styles.tuple}>
            <strong>Tickets</strong>
            <p>{event.price != 0 ? event.price + "€" : "Free entry"}</p>
          </div>
          <div className={styles.tuple}>
            <strong>Address</strong>
            <p>{event.address}</p>
          </div>
        </div>
        <div className={styles.detailsImage}>
          <ImageSlider event={event} />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
