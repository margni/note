import React, { useState } from 'react';

import { Main } from './Main';
import { useNotes } from '../NoteProvider';

const filter = (query, notes) => query.trim()
    ? notes.filter((note) => note.text.toUpperCase().indexOf(query.trim().toUpperCase()) > -1)
    : notes;

// Todo this is a temporary solution and should be refactored.
export const MainWithNotes = ({onSignOut}) => {
    const {create, update, deleteNote, togglePin, notes} = useNotes();
    const [selectedNote, selectNote] = useState(null);
    const [query, setQuery] = useState('');

    const close = (note) => {
        if (note && !note.text.trim()) {
            deleteNote(note);
        }

        selectNote();
    };

    if (!notes) {
        return null;
    }

    return <Main
        notes={filter(query, notes)}
        onClose={(note) => close(note)}
        onCreate={() => selectNote(create())}
        onDelete={(note) => deleteNote(note) && selectNote()}
        onSearch={(query) => setQuery(query)}
        onSelect={(note) => selectNote(note.id)}
        onSignOut={() => onSignOut()}
        onTogglePin={(note) => togglePin(note)}
        onUpdate={(note) => update(note)}
        query={query}
        selectedNote={selectedNote ? notes.find((note) => note.id === selectedNote) : null}
    />;
};
