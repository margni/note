import React from 'react';

import { firstLine } from '../helper/firstLine';
import { IconButton } from './IconButton';

import './NoteList.css';

export const NoteList = ({notes, onSelect, onTogglePin}) => <ol className="NoteList">
    {notes.map((note) =>
        <li className="NoteList__Item" key={note.id}>
            <button className="NoteList__Button" onClick={() => onSelect(note)}>{firstLine(note.text)}</button>
            <div className="NoteList__Pin"><IconButton key={note.id+note.pin} name="pin" secondary={!note.pin} onClick={() => onTogglePin(note)} /></div>
        </li>
    )}
</ol>;
