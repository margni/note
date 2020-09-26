import React, { useCallback, useEffect, useState } from 'react';

import { Main } from './Main';
import { useNotes } from '../context/NoteContext';

const filter = (query, notes) =>
    query.trim()
        ? notes.filter(
              (note) =>
                  note.text.toUpperCase().indexOf(query.trim().toUpperCase()) >
                  -1
          )
        : notes;

// TODO this is a temporary solution and should be refactored urgently.
export default ({ onSignOut }) => {
    const { create, update, deleteNote, togglePin, notes } = useNotes();
    const [selectedNote, selectNote] = useState();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const popstateNote = (event) => {
            if (event.state && event.state.selectedNote) {
                // Forward history navigation event
                selectNote(event.state.selectedNote);
            } else {
                // Back history navigation event
                selectNote();
            }
        };

        // Ensure that we have a clean main view history state.
        window.history.replaceState({}, '');
        window.addEventListener('popstate', popstateNote);

        return () => {
            window.removeEventListener('popstate', popstateNote);
        };
    }, [selectNote]);

    const selectNoteWithHistory = useCallback(
        (note) => {
            if (note) {
                if (!selectedNote) {
                    window.history.pushState({ selectedNote: note }, '');
                } else {
                    window.history.replaceState({ selectedNote: note }, '');
                }

                selectNote(note);
            } else {
                window.history.back();
            }
        },
        [selectedNote, selectNote]
    );

    const deleteAndBack = useCallback(
        (note) => {
            deleteNote(note);

            window.history.back();
        },
        [deleteNote]
    );

    const close = useCallback(
        (note) => {
            if (note && !note.text.trim()) {
                deleteNote(note);
            }

            window.history.back();
        },
        [deleteNote]
    );

    // If notes haven't been loaded yet then just wait for firebase before
    // rendering anything.
    if (!notes) {
        return null;
    }

    const selectedNoteActual =
        selectedNote && notes.find((note) => note.id === selectedNote);

    const placeholderMessage =
        selectedNote && !selectedNoteActual ? 'No Such Note Exists' : '';

    return (
        <Main
            notes={filter(query, notes)}
            onClose={(note) => close(note)}
            onCreate={() => selectNoteWithHistory(create())}
            onDelete={(note) => deleteAndBack(note)}
            onSearch={(query) => setQuery(query)}
            onSelect={(note) => selectNoteWithHistory(note.id)}
            onSignOut={() => onSignOut()}
            onTogglePin={(note) => togglePin(note)}
            onUpdate={(note) => update(note)}
            placeholderMessage={placeholderMessage}
            query={query}
            selectedNote={selectedNoteActual}
        />
    );
};
