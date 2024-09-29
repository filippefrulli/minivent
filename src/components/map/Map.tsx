import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/assets/icons/marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const activeMarker = L.icon({
    iconUrl: "/assets/icons/marker-active.png",
    iconSize: [52, 52],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

interface MarkerLocation {
  lat: number;
  long: number;
  popupText: string;
}

interface MapComponentProps {
  markerLocations: MarkerLocation[];
  hoveredEvent: MarkerLocation | null;
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
          icon={hoveredEvent && hoveredEvent.lat === location.lat && hoveredEvent.long === location.long ? activeMarker : customIcon}>
          <Popup>{location.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
