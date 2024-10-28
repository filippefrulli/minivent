"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import styles from "./ImageSlider.module.css";
import { EventImage } from "../../lib/eventImage";

interface ImageSliderProps {
  images: EventImage[];
}

export default function ImageSlider({ images }: ImageSliderProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={images[currentIndex].url}
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
        {images.map((_, index) => (
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
