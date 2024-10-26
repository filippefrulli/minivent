"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import styles from "./ImageSlider.module.css";

interface Event {
  id: number;
  title: string;
  date: string;
  address: string;
  description: string;
  price: number;
  images: string[];
}

interface ImageSliderProps {
  event: Event;
}

export default function ImageSlider({ event }: ImageSliderProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + event.images.length) % event.images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % event.images.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={event.images[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
          width={500}
          height={100}
          className={styles.image}
        />
      </div>
      <button
        className={`${styles.button} ${styles.buttonLeft}`}
        onClick={prevSlide}>
        <IoChevronBack className={styles.icon} />
      </button>
      <button
        className={`${styles.button} ${styles.buttonRight}`}
        onClick={nextSlide}>
        <IoChevronForward className={styles.icon} />
      </button>
      <div className={styles.dotsContainer}>
        {event.images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.dotActive : styles.dotInactive
            }`}></div>
        ))}
      </div>
    </div>
  );
}
