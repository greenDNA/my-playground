import React, { useState } from "react";
import Row from "./Row";
import Display from "./Display";
import ClearButton, { CLEAR } from "./ClearButton";

export const VALUE_ARRAY = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "=",
  "+",
];
/**
 *
 * @param {int} pos1 - position 1 in array
 * @param {int} pos2 - position 2 in array
 */
function buttonValuesMappedToArray(pos1, pos2) {
  return VALUE_ARRAY.slice(pos1, pos2);
}

function Calculator() {
  const [display, setDisplay] = useState("0");
/**
 * 
 * @param {*} command - relates to the button pressed in the UI
 * BUGS: Catch user errors. Evaluating strange phrases crashes the project
 * Ex: "." or ".+" or ".+6". They don't make sense from a mathematical standpoint
 */
  function updateDisplay(command) {
    if (display === "0") {
      if (
        command === "+" ||
        command === "-" ||
        command === "/" ||
        command === "*"
      ) {
        return;
      }
    } else if (
      display.endsWith("+") ||
      display.endsWith("-") ||
      display.endsWith("*") ||
      display.endsWith("/")
    ) {
      if (
        command === "+" ||
        command === "-" ||
        command === "/" ||
        command === "*"
      ) {
        setDisplay((prevValue) => {
          return prevValue.slice(0, prevValue.length - 1);
        });
      }
    } else if (command === "." && display.includes(".")) {
      return;
    }
    if (command === CLEAR) {
      setDisplay("0");
    } else {
      if (display === "0") {
        setDisplay(command);
      } else {
        setDisplay((prevValue) => {
          return prevValue + "" + command;
        });
      }
    }
    if (command === "=") {
      const result = eval(display).toString();
      setDisplay(result);
    }
  }

  return (
    <div style={{ width: "200px", border: "1px solid black" }}>
      <Display val={display} />
      <ClearButton clearDisplay={updateDisplay} />
      <Row
        buttonToDisplay={updateDisplay}
        vals={buttonValuesMappedToArray(0, 4)}
      />
      <Row
        buttonToDisplay={updateDisplay}
        vals={buttonValuesMappedToArray(4, 8)}
      />
      <Row
        buttonToDisplay={updateDisplay}
        vals={buttonValuesMappedToArray(8, 12)}
      />
      <Row
        buttonToDisplay={updateDisplay}
        vals={buttonValuesMappedToArray(12, 16)}
      />
    </div>
  );
}

export default Calculator;
