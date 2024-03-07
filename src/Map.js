import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map({ apiKey }) {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {/* Gerekiyorsa burada İşaretleyici(ler) ekleyin */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
