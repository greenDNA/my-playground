import React from "react";

function NoteGenerator(){

    return (
        <div>
            <form action="">
                <label htmlFor="">Title</label>
                <input type="text" name="title" id="" placeholder="Enter note title here" />
                <label htmlFor="">Description</label>
                <input type="text" name="description" id="" placeholder="Enter note description here" />
                <button onClick={(e)=>{e.preventDefault()}} type="submit">Submit Note</button>

            </form>
        </div>
    );
}

export default NoteGenerator;