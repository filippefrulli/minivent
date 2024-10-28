import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import L from "leaflet";
import { Event } from "../../lib/event";

const customIcon = L.icon({
  iconUrl: "/assets/icons/marker.png",
  iconSize: [36, 36],
  iconAnchor: [20, 36],
  popupAnchor: [0, -36],
});

const activeMarker = L.icon({
    iconUrl: "/assets/icons/marker-active.png",
    iconSize: [52, 52],
    iconAnchor: [27, 51],
    popupAnchor: [0, -52],
  });

interface MarkerLocation {
  lat: number;
  long: number;
  popupText: string;
}

interface MapComponentProps {
  markerLocations: MarkerLocation[];
  hoveredEvent: Event | null;
}

const MapComponent: React.FC<MapComponentProps> = ({ markerLocations, hoveredEvent }) => {
  const position: [number, number] = [44.319533, 9.314905];

  return (
    <MapContainer center={position} zoom={11} className={styles.mapContainer}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markerLocations.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.long]}
          icon={hoveredEvent && hoveredEvent.latitude === location.lat && hoveredEvent.longitude === location.long ? activeMarker : customIcon}>
          <Popup>{location.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
