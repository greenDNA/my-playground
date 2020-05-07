import React from "react";

function NoteGallery(props){

    return (
        <div>
            {/* Use ul and li, or map */}
            {/* Show a collection of notes here */}
            <h3>Here are the notes</h3>
            <ul>
                {props.noteArray.map( note => {
                    return <li>{note}</li>
                })}
            </ul>
        </div>
    );
}

export default NoteGallery;