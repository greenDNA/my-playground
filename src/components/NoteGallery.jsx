import React from "react";

function NoteGallery(props){

    return (
        <div>
            {/* Use ul and li, or map */}
            {/* Show a collection of notes here */}
            <ul>
                {props.noteArray.map( note => {
                    return (
                        <div>
                            <li>
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <div className="card-title">
                                            <p>Title: {note.title}</p>
                                            <p>Description: {note.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div> 
                    )
                })}
            </ul>
        </div>
    );
}

export default NoteGallery;