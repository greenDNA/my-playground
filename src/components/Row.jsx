import React from 'react';
import ButtonValue from './ButtonValue';

function Row(props){
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