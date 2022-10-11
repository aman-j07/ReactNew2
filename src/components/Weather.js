import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Weather = () => {
  const [location,setLocation]=useState("")
  const [weather,setWeather]=useState("");
  let weatherApi=`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location=${location}`
  const changeHandler=(e)=>{
    setLocation(e.target.value)
    }
    const enterSearch=(e)=>{
      if(e.key==="Enter"){
        fetch(weatherApi)
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setWeather(data)
        })
      }
    }
    if(weather===""){
  return (
    <>
        <div id="searchBar"><SearchIcon/><input onChange={changeHandler} onKeyDown={enterSearch} placeholder='Search for your favourite location'/></div>
    </>
  )
    }
    else{
      return(
        <>
        <div id="searchBar"><SearchIcon/><input onChange={changeHandler} onKeyDown={enterSearch} placeholder='Search for your favourite location'/></div>
        <div id="weatherDeatils">
          <p>{weather.location.name}</p>
          <p>{weather.location.region}</p>
          <p>{weather.location.country}</p>
          <p>{weather.current.temp_c}</p>
          <p>{weather.current.condition.text}</p>
        </div>
    </> 
      )
    }
}

export default Weather