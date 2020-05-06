import React from "react";
import NoteGenerator from "./NoteGenerator";
import NoteGallery from "./NoteGallery";

function NoteSaver(){

    return (
        <div className="wrap-border">
            <p style={{textDecoration: "underline"}}>NoteSaver</p>
            {/* Area to Create Notes */}
            <NoteGenerator />
            {/* Area to Display Saved Notes */}
            <NoteGallery />
        </div>
    );
}

export default NoteSaver;