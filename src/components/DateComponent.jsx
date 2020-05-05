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
    <div className="wrap-border">
      <p style={{textDecoration: "underline"}}>DateComponent</p>
      <h1>What is the date and time?</h1>
      <button onClick={getDate}>Detect Date and Time</button>
      <h2>{date}</h2>
    </div>
  );
}

export default DateComponent;
