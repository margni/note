import React, { useEffect, useState } from 'react';

import { AppBar } from './AppBar';
import { Empty } from './Empty';
import { Fab } from './Fab';
import { IconButton } from './IconButton';
import { InstallNotifier } from './InstallNotifier';
import { ContextMenu } from './ContextMenu';
import { NoteList } from './NoteList';
import { IconInput } from './IconInput';
import { TextEditor } from './TextEditor';
import { useAuth } from '../context/AuthContext';

import styles from './Main.module.css';
import { ManageNoteTags } from './ManageNoteTags';

export const Main = ({
    notes,
    onClose,
    onCreate,
    onDelete,
    onSearch,
    onSelect,
    onSignOut,
    onTogglePin,
    onToggleTag,
    onUpdate,
    placeholderMessage,
    query,
    selectedNote,
    tags,
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [tagMenuOpen, setTagMenuOpen] = useState(false);
    const [last, setLast] = useState();
    const { user } = useAuth();

    useEffect(() => {
        if (selectedNote) {
            if (last && selectedNote.id !== last) {
                setTagMenuOpen(false);
            } else {
                setLast(selectedNote.id);
            }
        } else {
            setTagMenuOpen(false);
        }
    }, [last, selectedNote]);

    return (
        <>
            <section className={styles.notes}>
                <AppBar>
                    <div className={styles.notePrimaryActions}>
                        <IconInput
                            onSecondaryAction={() => onSearch('')}
                            onChange={(query) => onSearch(query)}
                            value={query}
                        />
                    </div>
                    {!selectedNote && (
                        <ContextMenu open={menuOpen} onToggle={setMenuOpen}>
                            <IconButton
                                name="sign-out"
                                onClick={onSignOut}
                                position="right"
                                secondary
                            />
                            <div className={styles.user}>
                                <h3 className={styles.userName}>
                                    {user.displayName}
                                </h3>
                                {user.email}
                            </div>
                            <InstallNotifier />
                        </ContextMenu>
                    )}
                </AppBar>
                {!selectedNote && (
                    <Fab>
                        <IconButton
                            name="new"
                            onClick={() => onCreate()}
                            size="large"
                        />
                    </Fab>
                )}
                {notes && notes.length ? (
                    <NoteList
                        notes={notes}
                        onSelect={(note) => setMenuOpen(false) & onSelect(note)}
                        onTogglePin={(note) => onTogglePin(note)}
                        selectedNote={selectedNote}
                    />
                ) : (
                    <Empty
                        message={
                            query
                                ? 'No results.'
                                : "You haven't taken any notes yet."
                        }
                    />
                )}
            </section>
            <div className={styles.placeholder}>{placeholderMessage}</div>
            {selectedNote && (
                <section className={styles.note}>
                    <AppBar>
                        <div className={styles.notePrimaryActions}>
                            <IconButton
                                name="back"
                                onClick={() => onClose(selectedNote)}
                            />
                        </div>
                        <div className={styles.noteSecondaryActions}>
                            <ManageNoteTags
                                tags={tags}
                                note={selectedNote}
                                menuOpen={tagMenuOpen}
                                onToggleMenu={setTagMenuOpen}
                                onToggleTag={onToggleTag}
                            />
                            {navigator.share && (
                                <IconButton
                                    name="share"
                                    onClick={() =>
                                        navigator.share({
                                            text: selectedNote.text,
                                        })
                                    }
                                    secondary
                                />
                            )}
                            <IconButton
                                name="delete"
                                onClick={() => onDelete(selectedNote)}
                                secondary
                            />
                        </div>
                    </AppBar>
                    <TextEditor
                        debounce={1500}
                        key={selectedNote.id}
                        onChange={(text) => onUpdate({ ...selectedNote, text })}
                        value={selectedNote.text}
                    />
                </section>
            )}
        </>
    );
};
