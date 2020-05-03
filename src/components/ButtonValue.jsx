import React from "react";

function ButtonValue(props){
    
    function buttonValueToDisplay(){
        props.toButton(props.val);
    }

    return (
    <button onClick={buttonValueToDisplay} style={{display: "inline-block", width:'25%'}}>{props.val}</button>
    );
}

export default ButtonValue;