import React, { useState } from "react";

/**
 * TODO: Add support for discounts on bill
 */

function BillCalculator(){

    const [bill, setBill] = useState("");
    const [tipPercent, setTipPercent] = useState("");
    const [partySize, setPartySize] = useState("");
    const [tipPerPerson, setTipPerPerson] = useState("");

    function findTip(e){
        e.preventDefault();
        console.log(bill, tipPercent, partySize);
        setTipPerPerson(solveTip());
    }
    function updateBill(e){
        console.log(e.target.value);
        setBill(e.target.value);
    }
    function updateTip(e){
        setTipPercent(e.target.value);
    }
    function updateParty(e){
        setPartySize(e.target.value);
    }
    function solveTip(){
        return bill * (tipPercent / 100.0) / partySize;
    }

    return (
        <div className="wrap-border">
        <p style={{textDecoration: "underline"}}>Bill Calculator</p>

        <form action="">
            <label htmlFor="">Bill Total</label>
            <input onChange={updateBill} value={bill} type="number" name="" id="" placeholder="Enter bill total here"/>
            <label htmlFor="">Tip Percentage</label>
            <input onChange={updateTip} value={tipPercent} type="number" name="" id="" placeholder="Enter tip percentage"/>
            <label htmlFor="">Party Size</label>
            <input onChange={updateParty} value={partySize} type="number" name="" id="" placeholder="Enter size of the party" />
            <label htmlFor="">Tip Per Person</label>
            <input value={tipPerPerson} type="number" name="" id="" placeholder="Total tip per person will generate here" disabled/>
            <button type="submit" onClick={findTip}>Calculate Tip Per Person</button>
        </form>
        </div>
    );
}

export default BillCalculator;