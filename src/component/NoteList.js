import React from 'react';

import { firstLine } from '../helper/firstLine';
import { IconButton } from './IconButton';

import styles from './NoteList.module.css';

const NoteListItem = ({ note, onSelect, onTogglePin, selected }) => (
    <li
        className={`${styles.item} ${selected && `${styles.selected}`}`}
        key={note.id}
    >
        <button className={styles.button} onClick={onSelect}>
            {firstLine(note.text)}
        </button>
        <div className={styles.pin}>
            <IconButton
                key={note.id + note.pin}
                name="pin"
                onClick={onTogglePin}
                secondary={!note.pin}
            />
        </div>
    </li>
);

export const NoteList = ({ notes, onSelect, onTogglePin, selectedNote }) => (
    <ol className={styles.host}>
        {notes.map((note, i) => (
            <NoteListItem
                key={i}
                note={note}
                onSelect={() => onSelect(note)}
                onTogglePin={() => onTogglePin(note)}
                selected={selectedNote === note}
            />
        ))}
    </ol>
);
