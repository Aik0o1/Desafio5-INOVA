import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "400px",
  width: "800px"
};

const center = {
  lat: -2.5307, 
  lng: -44.3068  
};

const MapComponent = ({ city }) => {
  const cityCoordinates = {
    "São Luís": { lat: -2.5307, lng: -44.3068 },
    "barreirinhas": { lat: -2.74938, lng: -42.8328 },
    "caxias": { lat: -4.8581, lng: -43.3551 }
  };
  const coordinates = cityCoordinates[city] || center;

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={coordinates}
        zoom={12}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
