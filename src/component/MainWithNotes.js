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
        selectedNote={selectedNote}
        onSelect={(note) => selectNote(note)}
        onUpdate={(note) => update(note)}
        onCreate={() => create().then((note) => selectNote(note))}
        onDelete={(note) => deleteNote(note).then(() => selectNote())}
        onTogglePin={(note) => togglePin(note)}
        onSignOut={() => onSignOut()}
    />;
};
