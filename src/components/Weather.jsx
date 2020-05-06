import React, { useState } from "react";

function Weather(){
    const [weatherResource, setWeather] = useState("");

    /**
     * Function that when called updates the weatherResource variable 
     * with the current weather of a geographical location
     */
    function refreshWeather(){
        const url = "https://api.openweathermap.org/data/2.5/weather?q=Brooklyn,usa&appid=cfa213c9a9563140f64787a30ad5a6bc&units=imperial";

        fetch(url)
        .then(data => data.json())
        .then(res => {
            setWeather(res.main.temp);
        })
        .catch( err => console.log(err));
    }

    return (
        <div className="wrap-border">
            <h2>Today's Weather</h2>
            <h4>{weatherResource}</h4>
            <button onClick={refreshWeather}>Click to Update Weather</button>
        </div>
    );
}

export default Weather;