import React from "react";

function NoteGallery(props){

    return (
        <div>
            {/* Use ul and li, or map */}
            {/* Show a collection of notes here */}
            <ul>
                {props.noteArray.map( note => {
                    return <li>{note}</li>
                })}
            </ul>
        </div>
    );
}

export default NoteGallery;