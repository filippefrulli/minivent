"use client";

import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import EventListItem from "../components/event-list-item/EventListItem";
import testCities from "../lib/testcities";
import { useRouter } from "next/navigation";
import { get_events } from "../api/endpoints";
import { Event } from "../lib/event";
import MapComponent from "../components/map/Map";

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Chiavari");
  const [oldText, setOldText] = useState("Chiavari");
  const [cities, setCities] = useState([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const router = useRouter()

  const handleTextClick = () => {
    setOldText(text);
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setText(inputText);
    setFilteredCities(
      cities.filter((city) =>
        city.name.toLowerCase().includes(inputText.toLowerCase())
      )
    );
  };

  const handleDropdownItemClick = (name: string) => {
    setText(name);
    setIsEditing(false);
  };

  const handleBlur = () => {
    if (!filteredCities.some((city) => city.name === text)) {
      setText(oldText);
    }
    setIsEditing(false);
  };

  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, JSON.stringify(value))

    return params.toString();
  };

  const handleEventClick = (event) => {

    router.push(`/event/${event.id}`);
  };

  const fetchEvents = async () => {
    const events = await get_events();
    setEvents(events);
  }

  const fetchCities = async () => {
    setCities(testCities);
    setFilteredCities(testCities);
    // const url =
    //   "https://wft-geo-db.p.rapidapi.com/v1/geo/locations/44.319494+9.424215/nearbyCities?types=CITY&radius=50&distanceUnit=KM&minPopulation=5000&limit=10";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-Rapidapi-Key": "5ded3d8ab8mshf66f5f42585dbbdp1753a6jsnbf23818cfdd9",
    //     "X-Rapidapi-Host": "wft-geo-db.p.rapidapi.com",
    //   },
    // };

    // try {
    //   const response = await fetch(url, options);
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   setCities(data.data);
    //   setFilteredCities(data.data); // Initialize filteredCities with all cities
    //   console.log("Cities:", data.data);
    // } catch (error) {
    //   console.error("Error fetching cities:", error);
    // }
  };

  useEffect(() => {
    fetchCities();
    fetchEvents();
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
              {filteredCities.map((item) => (
                <div
                  key={item.id}
                  className={styles.dropdownItem}
                  onMouseDown={() => handleDropdownItemClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.eventListContainer}>
          {events.map((event, index) => (
            <a
              key={event.id}
              onMouseEnter={() => setHoveredEvent(event)}
              onMouseLeave={() => setHoveredEvent(null)}
              onClick={() => handleEventClick(event)}>
              <EventListItem
                key={index}
                imageSrc={event.banner}
                title={event.name}
                location={event.location}
                date={event.date}
                price={event.price}
              />
            </a>
          ))}
        </div>
        <div className={styles.mapContainer}>
          <MapComponent
            markerLocations={events.map((event) => ({
              lat: event.latitude,
              long: event.longitude,
              popupText: event.name,
            }))}
            hoveredEvent={hoveredEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
