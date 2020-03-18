import React, { useContext, useState } from 'react';

import { Main } from './Main';
import { NoteContext } from '../NoteProvider';

export const MainWithNotes = ({onSignOut}) => {
    const {create, update, deleteNote, togglePin, notes} = useContext(NoteContext);
    const [selectedNote, selectNote] = useState(null);

    if (!notes) {
        return null;
    }

    return <Main
        notes={notes}
        onClose={() => selectNote()}
        onCreate={() => create().then((note) => selectNote(note.id))}
        onDelete={(note) => deleteNote(note).then(() => selectNote())}
        onSelect={(note) => selectNote(note.id)}
        onSignOut={() => onSignOut()}
        onTogglePin={(note) => togglePin(note)}
        onUpdate={(note) => update(note)}
        selectedNote={selectedNote ? notes.find((note) => note.id === selectedNote) : null}
    />;
};
