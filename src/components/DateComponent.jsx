import React, { useState } from "react";

/**
 * React Component to be an interactive for the user
 * to receive their current date and time 
 */
function DateComponent() {
  const [date, setDate] = useState("");

  function getDate() {
    const refreshedDate = new Date().toLocaleString(); 
    setDate(refreshedDate);
  }

  return (
    <div style={{border: "1px solid black"}}>
      <h1>What is the date and time?</h1>
      <button onClick={getDate}>Detect Date and Time</button>
      <h2>{date}</h2>
    </div>
  );
}

export default DateComponent;
