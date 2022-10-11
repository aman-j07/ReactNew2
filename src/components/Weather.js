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
      let weat;
      if(e.key==="Enter"){
        fetch(weatherApi)
        .then(res=>res.json())
        .then(data=>console.log(data))
        console.log(weat)
        setWeather(weat)
      }
    }
  return (
    <div>
        <div id="searchBar"><SearchIcon/><input onChange={changeHandler} onKeyDown={enterSearch} placeholder='Search for your favourite location'/></div>
    </div>
  )
}

export default Weather