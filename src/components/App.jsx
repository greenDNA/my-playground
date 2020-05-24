import React from "react";
import DateComponent from "./DateComponent";
import Header from "./Header";
import Footer from "./Footer";
import Calculator from "./Calculator";
import Weather from "./Weather";
import BillCalculator from "./BillCalculator";
import MusicPlayer from "./MusicPlayer";
import NoteSaver from "./NoteSaver";
// import Pomodoro from "./Pomodoro"; // unfinished component with bugs

function App() {
  return (
    <div className="container">
      <Header />

      <DateComponent />
      <Calculator />
      {/* <Pomodoro /> */}
      <Weather />
      <BillCalculator />
      <MusicPlayer />
      {/* <NoteSaver /> Commented out while I try another solution */}

      <Footer />
    </div>
  );
}

export default App;
