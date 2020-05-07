import React, { useState } from "react";
import NoteGenerator from "./NoteGenerator";
import NoteGallery from "./NoteGallery";

function NoteSaver(){
    const [notes, addNote] = useState([]);

    function manageNotes(newNote){
        addNote( (prevValue) => {
           return [...prevValue, newNote];
        })
    }

    return (
        <div className="wrap-border">
            <p style={{textDecoration: "underline"}}>NoteSaver</p>
            {/* Area to Create Notes */}
            <NoteGenerator pushNote={manageNotes} />
            {/* Area to Display Saved Notes */}
            <NoteGallery noteArray={notes} />
        </div>
    );
}

export default NoteSaver;