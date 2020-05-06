import React, { useState } from "react";

const API_LOCATION = "Brooklyn, New York";

function Weather(){
    const [weatherResource, setWeather] = useState("");
    const [location, setLocation] = useState(API_LOCATION);

    /**
     * Function that when called updates the weatherResource variable 
     * with the current weather of a geographical location
     */
    function refreshWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${API_LOCATION}&appid=cfa213c9a9563140f64787a30ad5a6bc&units=imperial`;

        fetch(url)
        .then(data => data.json())
        .then(res => {
            setWeather(res.main.temp);
        })
        .catch( err => console.log(err));
    }

    return (
        <div className="wrap-border">
            <h2>Today's Weather in {location}</h2>
            <h4>{weatherResource}</h4>
            <button onClick={refreshWeather}>Click to Update Weather</button>
        </div>
    );
}

export default Weather;