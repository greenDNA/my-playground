import React, { useState, useEffect } from "react";

const TIME_CONSTANT = 25;

/**
 * Application that will serve as a Pomodoro timer
 * It will be activated and countdown for 25 minutes, alert the user,
 * the user acknowledges the alert, then 5 minutes countdown, then alert the user,
 * the user may then restart the process once acknowledging the alert.
 * 
 * The alerts can be sounds or switch focus to the tab the application is in.
 * Application image based to use the tomato, or is it an apple?
 */
function Pomodoro(){

    const [timeInSeconds, setTime] = useState(TIME_CONSTANT*60);
    const [minutes, setMinutes] = useState(TIME_CONSTANT);
    const [seconds, setSeconds] = useState(60*TIME_CONSTANT%60);
    const [flag, setFlag] = useState(false);

    function updateTime(){
        setTime( prev => {return prev -1} );
    }

    /**
     * Runs whenever the array argument is changed in value
     * 
     * TODO: Change logic to use one object and update it over having several constants for useState()
     */
    useEffect(() => {
        if( flag ){
            const intervalID = setTimeout(() => {
                if(timeInSeconds === 0){
                    clearInterval(intervalID);
                } else {
                    setTime( (prevValue) => {
                        console.log(prevValue);
                        return prevValue-1;
                    });
                    setMinutes( () => {
                        return Math.floor(timeInSeconds / 60);
                    });
                    setSeconds( () => {
                        return timeInSeconds % 60;
                    });
                }
                console.log(timeInSeconds, minutes, seconds);
            }, 1000); 
        } else {
            setFlag(true);
        }
        
    }, [timeInSeconds]);

    return (
        <div className="wrap-border">
            <p>Pomodoro</p>
            <div>
            <img 
                style={{width: "300px"}}
                src="https://www.thedissertationcoach.com/wp-content/uploads/The-Pomodoro-Technique.jpg" 
                alt="pomodoro technique tomato" 
                srcset="" />
            </div>
            <button onClick={updateTime}>Start Timer</button>
            <h6>{minutes}:{seconds}</h6>
        </div>
    );
}

export default Pomodoro;