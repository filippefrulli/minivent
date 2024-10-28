"use client";

import { IoArrowBack } from "react-icons/io5";
import styles from "./eventdetails.module.css";
import ImageSlider from "../../../components/image-slider/ImageSlider";
import { get_event, get_event_images } from "../../../api/endpoints";
import React, { useEffect, useState } from "react";
import { EventImage } from "../../../lib/eventImage";
import { Event } from "../../../lib/event";

const EventDetailsPage = ({ params }: { params: { id: number } }) => {

  const [event, setEvent] = useState<Event | null>(null);
  const [images, setImages] = useState<EventImage[] | []>([]);

  useEffect(() => {
    const fetchEvent = async () => {
      const cachedEvent = localStorage.getItem(`event_${params.id}`);
      if (cachedEvent) {
        setEvent(JSON.parse(cachedEvent));
      } else {
        const event = await get_event(params.id);
        setEvent(event);
        localStorage.setItem(`event_${params.id}`, JSON.stringify(event));
      }
    };

    const fetchImages = async () => {
      const cachedImages = localStorage.getItem(`images_${params.id}`);
      if (cachedImages) {
        setImages(JSON.parse(cachedImages));
      } else {
        const images = await get_event_images(params.id);
        setImages(images);
        localStorage.setItem(`images_${params.id}`, JSON.stringify(images));
      }
    };

    fetchEvent();
    fetchImages();
  }, [params.id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <a href="/" className={styles.backIcon}>
          <IoArrowBack />
        </a>
        <h1 className={styles.title}>{event.name}</h1>
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
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
