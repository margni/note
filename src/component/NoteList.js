import React from 'react';

import './NoteList.css';
import {IconButton} from "./IconButton";

export const NoteList = ({notes, onSelect, onTogglePin}) => <ol className="NoteList">
    {notes.map((note) =>
        <li className="NoteList__Item" key={note.id}>
            <button className="NoteList__Button" onClick={() => onSelect(note)}>{note.text}</button>
            <div className="NoteList__Pin"><IconButton key={note.id+note.pin} name="pin" secondary={!note.pin} onClick={() => onTogglePin(note)}></IconButton></div>
        </li>
    )}
</ol>;
