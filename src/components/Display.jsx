import React from 'react';

function Display(props){
    return (
        <button className="buttonHeight" disabled="disabled" style={{width:'75%'}}>{props.val}</button>
    );
}

export default Display;