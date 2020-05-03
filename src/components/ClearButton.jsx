import React from 'react';

export const CLEAR = 'CLEAR';

function ClearButton(props){

    function clearDisplay(){
        props.clearDisplay(CLEAR);
    }

    return (
        <button onClick={clearDisplay} className="buttonHeight" style={{width:'25%'}}>CLR</button>
    );
}

export default ClearButton;