import { useState } from "react";
import axios from "axios";
// import styles from 'weather.mudle.css'

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "75c10f679078c5f263f4657b9e74798e";

export const Weather=()=>{
  
 const[weather,setWeather]=useState({})
 const[city,setCity]=useState('')

 const getWeather= async (name)=>{
    const{data}= await axios.get(URL,{
      params:{
        q:name,
        units:"meterc",
        APPID: API_KEY
      }  
    })
    setWeather(data)
 }
    return(
        <>
        <h3>Weather</h3>
        <input type="text" onChange={(text)=> setCity(text.target.value)} />
        <button onClick={()=>  getWeather(city)}>search</button>
        {weather.main ? (
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="weatherIcon"
            />
            <div className="name">{weather.weather[0].main}</div>
          </div>
        ) : null}
        </>
    )
}