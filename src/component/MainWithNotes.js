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
        selectedNote={selectedNote ? notes.find((note) => note.id === selectedNote) : null}
        onSelect={(note) => selectNote(note ? note.id : null)}
        onUpdate={(note) => update(note)}
        onCreate={() => create().then((note) => selectNote(note.id))}
        onDelete={(note) => deleteNote(note).then(() => selectNote())}
        onTogglePin={(note) => togglePin(note)}
        onSignOut={() => onSignOut()}
    />;
};
