import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      const newPosition = [e.latlng.lat, e.latlng.lng];

setPosition(newPosition);

onLocationSelect(newPosition);
    },
  });

  return position ? <Marker position={position} /> : null;
}

function LocationPicker({ onLocationSelect }) {
  const [position, setPosition] = useState([
    28.6139,
    77.2090,
  ]);

  return (
    <div className="location-picker">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          position={position}
          setPosition={setPosition}
        />
      </MapContainer>

      <div className="map-location-hint">
        <span>●</span>
        Click anywhere on the map to pin the issue location
      </div>
    </div>
  );
}

export default LocationPicker;