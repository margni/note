import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Main } from './Main';
import { useNotes } from '../context/NoteContext';
import { tokenize } from '../helper/tokenize';

// TODO Delimit
// todo Tag Search
// todo Ultimately client side search may become a problem, especially if someone has a significant number of notes.
const search = (query, notes, tokenizedQuery = tokenize(query)) =>
    tokenizedQuery
        ? notes.filter((note) => tokenizedQuery.test(note.text))
        : notes;

const filter = (archive, tag, notes) =>
    tag
        ? notes.filter((note) => note.tags.includes(tag))
        : notes.filter((note) => note.archive === archive);

// TODO this is a temporary solution and should be refactored urgently.
const MainWithNotes = () => {
    const {
        create,
        update,
        deleteNote,
        toggleArchive,
        togglePin,
        toggleTag,
        notes,
        tags,
        hasArchive,
    } = useNotes();
    const [selectedNote, selectNote] = useState();
    const [query, setQuery] = useState('');
    const [filterArchive, setFilterArchive] = useState(false);
    const [filterTag, setFilterTag] = useState();

    const handleToggleFilterArchive = useCallback(() => {
        setFilterTag();
        setFilterArchive(!filterArchive);
    }, [filterArchive]);

    const handleToggleFilterTag = useCallback(
        (tag) => {
            setFilterArchive(false);
            setFilterTag(filterTag !== tag ? tag : undefined);
        },
        [filterTag]
    );

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

    useEffect(() => {
        setFilterArchive(false);
    }, [hasArchive]);

    const filteredNotes = useMemo(
        () => search(query, filter(filterArchive, filterTag, notes || [])),
        [filterArchive, filterTag, notes, query]
    );

    const selectNoteWithHistory = useCallback(
        (note) => {
            if (note && note !== selectedNote) {
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

    const handleDelete = useCallback(
        (note) => {
            deleteNote(note);

            window.history.back();
        },
        [deleteNote]
    );

    const handleClose = useCallback(
        (note) => {
            if (note && !note.text.trim()) {
                deleteNote(note);
            }

            window.history.back();
        },
        [deleteNote]
    );

    const handleToggleArchive = useCallback(
        (note) => {
            if (note.archive) {
                setFilterArchive(false);
            } else {
                window.history.back();
            }

            toggleArchive(note);
        },
        [toggleArchive]
    );

    const handleSelect = useCallback((note) => selectNoteWithHistory(note.id), [
        selectNoteWithHistory,
    ]);

    const handleCreate = useCallback(() => selectNoteWithHistory(create()), [
        create,
        selectNoteWithHistory,
    ]);

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
            filterArchive={filterArchive}
            filterTag={filterTag}
            hasArchive={hasArchive}
            notes={filteredNotes}
            onClose={handleClose}
            onCreate={handleCreate}
            onDelete={handleDelete}
            onSearch={setQuery}
            onSelect={handleSelect}
            onToggleArchive={handleToggleArchive}
            onToggleFilterArchive={handleToggleFilterArchive}
            onToggleFilterTag={handleToggleFilterTag}
            onTogglePin={togglePin}
            onToggleTag={toggleTag}
            onUpdate={update}
            placeholderMessage={placeholderMessage}
            query={query}
            selectedNote={selectedNoteActual}
            tags={tags}
        />
    );
};

export default MainWithNotes;
