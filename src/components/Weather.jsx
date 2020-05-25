import React, { useState } from "react";

const API_LOCATION = "Brooklyn, New York";

/**
 * TODO: Error handling when user enters invalid data for "location" field
 * TODO: Further functionality for Weather Component: Sunrise, sunset, rain, snow, etc.
 */
function Weather(){
    const [weatherResource, setWeather] = useState("");
    const [location, setLocation] = useState(API_LOCATION);

    /**
     * Function that when called updates the weatherResource variable 
     * with the current weather of a geographical location
     */
    function refreshWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cfa213c9a9563140f64787a30ad5a6bc&units=imperial`;

        fetch(url)
        .then(data => data.json())
        .then(res => {
            setWeather(res.main.temp);
        })
        .catch( err => console.log(err));
    }

    function updateLocation(e){
        setLocation(e.target.value);
    }

    return (
        <div className="wrap-border">
            <h2>Today's Weather in {location}</h2>
            <h4>{weatherResource}</h4>
            <button onClick={refreshWeather}>Click to Update Weather</button>
            <br/>
            <label htmlFor="">Location</label>
            <input value={location} onChange={updateLocation} type="text" name="" id="location"/>
        </div>
    );
}

export default Weather;