import React from 'react';
import ButtonValue from './ButtonValue';

function Row(props){
    // function numberOfRows(num){
    //     let arr = [];
    //     for(var i =0; i < num; i++){
    //         arr.push(i);
    //     }
    //     return arr;
    // }

    const rowArr = [].concat(props.vals);

    return (
        <div>
            {rowArr.map( (value, index ) => {
                return <ButtonValue key={index} toButton={props.buttonToDisplay} val={value} />
            })}
        </div>
    );
}

export default Row;