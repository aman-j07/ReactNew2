import SearchIcon from "@mui/icons-material/Search";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { useState } from "react";

let backImg = "";
const Weather = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  let weatherApi = `https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location=${location}`;
  const changeHandler = (e) => {
    setLocation(e.target.value);
  };
  const enterSearch = (e) => {
    if (e.key === "Enter") {
      fetch(weatherApi)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          data.current.condition.icon = "https:" + data.current.condition.icon;

          if (data.current.is_day === 1) {
            if (data.current.cloud < 50) {
              backImg = "sunny";
            } else if (data.current.cloud > 50) {
              backImg = "cloudsDay";
            }
            if (
              String(data.current.condition.text).toLowerCase().includes("rain")
            ) {
              backImg = "rainingDay";
            }
          } else {
            if (data.current.cloud < 50) {
              backImg = "night";
            } else if (data.current.cloud > 50) {
              backImg = "cloudsNight";
            }
            if (
              String(data.current.condition.text).toLowerCase().includes("rain")
            ) {
              backImg = "rainingNight";
            }
          }
          console.log("backImg = " + backImg);
          document.querySelector("#App").setAttribute("class", backImg);
          setWeather(data);
        });
    }
  };
  if (weather === "") {
    return (
      <>
        <div id="searchBar">
          <SearchIcon />
          <input
            onChange={changeHandler}
            onKeyDown={enterSearch}
            placeholder="Search for your favourite location"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="searchBar">
          <SearchIcon />
          <input
            onChange={changeHandler}
            onKeyDown={enterSearch}
            placeholder="Search for your favourite location"
          />
        </div>
        <div id="weatherDeatils">
          <p id="cityName">{weather.location.name}</p>
          <p id="cityRegion">
            {weather.location.region}, {weather.location.country}
          </p>
          <div>
            <img src={weather.current.condition.icon} />
            <p id="cityTemp">{weather.current.temp_c} <PanoramaFishEyeIcon id="degreeIcon"/></p><p id="celcius">C</p> 
          </div>
          <p id="cityText">{weather.current.condition.text}</p>
        </div>
      </>
    );
  }
};

export default Weather;
