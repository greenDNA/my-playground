import React, { useState } from "react";

function NoteGenerator(props){

    function noteFactory(e){
        e.preventDefault();
        //props.pushNote(title + "\n" + description);
        //console.log( {field1: 'text', field2: 'more text'});
        props.pushNote( {title: title, description: description});
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
                <input onChange={changeTitle} value={title} type="text" name="title" id="title" placeholder="Enter note title here" />
                <label htmlFor="">Description</label>
                <input onChange={changeDescription} value={description} type="text" name="description" id="description" placeholder="Enter note description here" />
                <button onClick={noteFactory} type="submit">Submit Note</button>

            </form>
        </div>
    );
}

export default NoteGenerator;