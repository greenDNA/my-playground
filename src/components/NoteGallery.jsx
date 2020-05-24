import React from "react";

function NoteGallery(props){

    return (
        <div>
            {/* Use ul and li, or map */}
            {/* Show a collection of notes here */}
            <ul>
                {props.noteArray.map( note => {
                    return <div>
                        <li>
                            <p>Title: {note.title}</p>
                            <p>Description: {note.description}</p>
                            <p>{note}</p>
                        </li>
                    </div> 
                })}
            </ul>
        </div>
    );
}

export default NoteGallery;