import React from "react";
import DateComponent from "./DateComponent";
import Header from "./Header";
import Footer from "./Footer";
import Calculator from "./Calculator";
import Pomodoro from "./Pomodoro";

function App() {
  return (
    <div className="container">
      <Header />

      <DateComponent />
      <Calculator />
      <Pomodoro />

      <Footer />
    </div>
  );
}

export default App;
