import React, { useState } from "react";

function NoteGenerator(props){

    function noteFactory(e){
        e.preventDefault();
        props.pushNote(title + "\n" + description);
        setTitle("");
        setDescription("");
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function changeTitle(e){
        setTitle(e.target.value);
    }
    function changeDescription(e){
        setDescription(e.target.value);
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Title</label>
                <input onChange={changeTitle} value={title} type="text" name="title" id="" placeholder="Enter note title here" />
                <label htmlFor="">Description</label>
                <input onChange={changeDescription} value={description} type="text" name="description" id="" placeholder="Enter note description here" />
                <button onClick={noteFactory} type="submit">Submit Note</button>

            </form>
        </div>
    );
}

export default NoteGenerator;