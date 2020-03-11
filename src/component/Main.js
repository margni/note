import React from 'react';

import { AppBar } from './AppBar';
import { Empty } from './Empty';
import { Fab } from './Fab';
import { IconButton } from './IconButton';
import { NoteList } from './NoteList';
import { TextEditor } from './TextEditor';

import './Main.css';

export const Main = ({notes, selectedNote, onSelect, onSignOut, onUpdate, onCreate, onDelete, onTogglePin}) => {
    return <>
        <section className="Main__Notes">
            <AppBar>
                {selectedNote ? '' : <IconButton name="sign-out" onClick={onSignOut} position="right"></IconButton>}
            </AppBar>
            {selectedNote ? '' : <Fab><IconButton name="new" onClick={() => onCreate()} size="large"></IconButton></Fab>}
            {notes.length
                ? <NoteList notes={notes} onSelect={(note) => onSelect(note)} onTogglePin={(note) => onTogglePin(note)}></NoteList>
                : <Empty message="You haven't taken any notes yet." />
            }
        </section>
        {selectedNote
            ? <section className="Main__Note">
                <AppBar>
                    <IconButton name="back" onClick={() => onSelect()}></IconButton>
                    <IconButton secondary name="delete" onClick={() => onDelete(selectedNote)} position="right"></IconButton>
                </AppBar>
                <TextEditor key={selectedNote.id} debounce={2000} value={selectedNote.text} onChange={(text) => onUpdate({...selectedNote, text})}></TextEditor>
            </section>
            : ''
        }
    </>;
};
