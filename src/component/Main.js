import React from 'react';

import { AppBar } from './AppBar';
import { Empty } from './Empty';
import { Fab } from './Fab';
import { IconButton } from './IconButton';
import { NoteList } from './NoteList';
import { Search } from './Search';
import { TextEditor } from './TextEditor';

import styles from './Main.module.css';

export const Main = ({notes, onClose, onCreate, onDelete, onSearch, onSelect, onSignOut, onTogglePin, onUpdate, query, selectedNote}) =>
    <>
        <section className={styles.notes}>
            <AppBar>
                <div className={styles.notePrimaryActions}><Search onChange={(query) => onSearch(query)} value={query} /></div>
                {!selectedNote && <IconButton name="sign-out" onClick={onSignOut} position="right" secondary />}
            </AppBar>
            {!selectedNote && <Fab><IconButton name="new" onClick={() => onCreate()} size="large" /></Fab>}
            {notes && notes.length
                ? <NoteList
                    notes={notes}
                    onSelect={(note) => onSelect(note)}
                    onTogglePin={(note) => onTogglePin(note)}
                    selectedNote={selectedNote}
                />
                : <Empty message={query ? 'No results.' : 'You haven\'t taken any notes yet.'} />
            }
        </section>
        <div className={styles.placeholder} />
        {selectedNote &&
            <section className={styles.note}>
                <AppBar>
                    <div className={styles.notePrimaryActions}><IconButton name="back" onClick={() => onClose(selectedNote)} /></div>
                    <IconButton name="delete" onClick={() => onDelete(selectedNote)} position="right" secondary />
                </AppBar>
                <TextEditor
                    debounce={2000}
                    key={selectedNote.id}
                    onChange={(text) => onUpdate({...selectedNote, text})}
                    value={selectedNote.text}
                />
            </section>
        }
    </>;
