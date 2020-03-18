import React from 'react';

import { AppBar } from './AppBar';
import { Empty } from './Empty';
import { Fab } from './Fab';
import { IconButton } from './IconButton';
import { NoteList } from './NoteList';
import { TextEditor } from './TextEditor';

import './Main.css';

export const Main = ({notes, onClose, onCreate, onDelete, onSelect, onSignOut, onTogglePin, onUpdate, selectedNote}) => {
    return <>
        <section className={'Main__Notes' + (selectedNote ? ' Main__Notes--collapsed' : '')}>
            <AppBar>
                {selectedNote ? '' : <IconButton name="sign-out" onClick={onSignOut} position="right" />}
            </AppBar>
            {selectedNote ? '' : <Fab><IconButton name="new" onClick={() => onCreate()} size="large" /></Fab>}
            {notes && notes.length
                ? <NoteList
                    notes={notes}
                    onSelect={(note) => onSelect(note)}
                    onTogglePin={(note) => onTogglePin(note)}
                />
                : <Empty message="You haven't taken any notes yet." />
            }
        </section>
        {selectedNote
            ? <section className="Main__Note">
                <AppBar>
                    <IconButton name="back" onClick={() => onClose()} />
                    <IconButton name="delete" onClick={() => onDelete(selectedNote)} position="right" secondary />
                </AppBar>
                <TextEditor
                    debounce={2000}
                    key={selectedNote.id}
                    onChange={(text) => onUpdate({...selectedNote, text})}
                    value={selectedNote.text}
                />
            </section>
            : ''
        }
    </>;
};
