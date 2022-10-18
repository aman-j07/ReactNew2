import React, { useRef, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function Map() {
  const [cordinates, setCordinates] = useState({lat:26.8467,lng:80.9462});
  let latRef=useRef();
  let lngRef=useRef();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDbvHwG-hVIkiJLlhoRWAmX3aeOlEzs0qo",
  });

  const changeMap=()=>{
    let obj={lat:parseFloat(latRef.current.value),lng:parseFloat(lngRef.current.value)}
    console.log(obj)
    setCordinates(obj) 
  } 

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div id="inputs"><input placeholder="Latitude" ref={latRef} /> <input placeholder="Longitude" ref={lngRef}/>
      <button onClick={changeMap}>Submit</button>
      </div>
      <GoogleMap
        zoom={10}
        center={{ lat: cordinates.lat , lng: cordinates.lng }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </>
  );
}

export default Map;
