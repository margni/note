import React from 'react';

import { firstLine } from '../helper/firstLine';

import { IconButton } from './IconButton';
import { NoteTagList } from './NoteTagList';
import { classNames } from '../helper/classNames';

import styles from './NoteList.module.css';

// TODO Enable user UI customizations including having the toggle button on the main list.
const NoteListItem = ({
    note,
    onSelect,
    onTogglePin,
    selected = false,
    pinToggle = false,
}) => (
    <li
        className={classNames(
            { item: true, selected, pinned: pinToggle },
            styles
        )}
        key={note.id}
    >
        <button className={styles.button} onClick={onSelect}>
            {!pinToggle && note.pin && (
                <span className={`${styles.inlinePin} icon-pin`}></span>
            )}
            <span className={styles.title}>{firstLine(note.text)}</span>
            <div className={styles.tags}>
                <NoteTagList note={note} />
            </div>
        </button>
        {pinToggle && (
            <div className={styles.pin}>
                <IconButton
                    key={note.id + note.pin}
                    name="pin"
                    onClick={onTogglePin}
                    secondary={!note.pin}
                />
            </div>
        )}
    </li>
);

// TODO Another approach might be to put a divider in such as:
//{notes[i-1]?.pin !== note.pin ? note.pin ? 'Pinned' : 'Everything Else' : ''}
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
