import React from 'react';
import { useState } from 'react';

function FizzBuzz(){

    const [result, setResult] = useState("");
    const [ui, setUI] = useState("");

    function findFizzBuzz(e){
        e.preventDefault();
        if(ui % 15 === 0){
            setResult("FizzBuzz");
        } else if(ui % 3 === 0){
            setResult("Fizz");
        } else if(ui % 5 === 0){
            setResult("Buzz");
        } else {
            setResult(ui);
        }
    }

    function updateUI(e){
        setUI(e.target.value);
    }

    return (
        <div className="wrap-border">
            <form action="">
                <p>FizzBuzz</p>
                <input onChange={updateUI} value={ui} type="number" name="" id="userinput"/>
                <h2>Enter value to calculate for FizzBuzz</h2>
                <button onClick={findFizzBuzz} type="submit">Solve FizzBuzz</button>
                <h4>{result}</h4>
            </form>
        </div>
    );
}

export default FizzBuzz;