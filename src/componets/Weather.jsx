import React, { useEffect,useRef, useState } from 'react'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import './Weather.css'

function Weather() {
    const inputref=useRef();
    const [weatherData , setWeatherData]=useState(false);

    const allIcons={
        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":cloud_icon,
        "03n":cloud_icon,
        "04d":cloud_icon,
        "04n":cloud_icon,
        "09d":drizzle_icon,
        "09n":drizzle_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "11d":rain_icon,
        "11n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,
        "50d":cloud_icon,
        "50n":cloud_icon
    
    }
    const search = async(city)=>{
        if(city===""){
            alert("enter city name")
        }
        try {
            //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const url = `http://api.weatherapi.com/v1/current.json?key=8f9b0a536bb94115a7d130544240107&q=${city}&aqi=no`;
            
            
            const response = await fetch(url);
            const data= await response.json();
            console.log(data);
            setWeatherData({
                humidity: data.current.humidity,
                temp: Math.floor(data.current.temp_c),
                windSpeed: data.current.wind_kph,
                location:data.location.name,
                
            })
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        search("New York");
    },[])
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input ref={inputref} type='text' placeholder='Search'></input>
            <img src={search_icon} alt="search" onClick={()=>search(inputref.current.value)}></img>
        </div>
        <img src={clear_icon} alt="" className='weather-icon'/>
        <p className='temperature'> {weatherData.temp} °C</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
            <div className='col'>
                <img src={humidity_icon} alt=''/>
                <p>{weatherData.humidity}</p>
                <span>Humidity</span>
            </div>
            <div className='col'>
                <img src={wind_icon} alt=''/>
                <p>{weatherData.windSpeed}km/hr</p>
                <span>wind speed</span>
            </div>
        </div>
    </div>
  )
}   

export default Weather
