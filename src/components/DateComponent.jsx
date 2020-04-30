import React, { useState } from "react";

/**
 * React Component to be an interactive for the user
 * to receive their current date and time 
 */
function DateComponent() {
  const [date, setDate] = useState("");

  function getDate() {
    const refreshDate = new Date().toLocaleString(); 
    setDate(refreshDate);
  }

  return (
    <div>
      <h1>What is the date and time?</h1>
      <button onClick={getDate}>Detect Date and Time</button>
      <h2>{date}</h2>
    </div>
  );
}

export default DateComponent;
