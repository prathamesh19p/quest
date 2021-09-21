import React from "react";
import notes from "../assets/data"
import Listitem from "../components/Listitem"

const NotesPage = () => {
    return(
        <div>
            {notes.map((note, index) => (
                <Listitem key={index} note={note} />
            ))}
        </div>
    )
}

export default NotesPage