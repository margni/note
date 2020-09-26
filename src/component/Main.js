import React, { useState } from 'react';

import { AppBar } from './AppBar';
import { Empty } from './Empty';
import { Fab } from './Fab';
import { IconButton } from './IconButton';
import { NoteList } from './NoteList';
import { Search } from './Search';
import { TextEditor } from './TextEditor';
import { Menu } from './Menu';
import { useAuth } from '../context/AuthContext';

import styles from './Main.module.css';

export const Main = ({
    notes,
    onClose,
    onCreate,
    onDelete,
    onSearch,
    onSelect,
    onSignOut,
    onTogglePin,
    onUpdate,
    placeholderMessage,
    query,
    selectedNote,
}) => {
    const [menu, setMenu] = useState(false);
    const { user } = useAuth();

    return (
        <>
            <Menu open={menu}>
                <IconButton
                    name="close"
                    position="right"
                    onClick={() => setMenu(false)}
                />
                <IconButton
                    name="sign-out"
                    onClick={onSignOut}
                    position="right"
                    secondary
                />
                <div className={styles.user}>
                    <h3 className={styles.userName}>{user.displayName}</h3>
                    {user.email}
                </div>
            </Menu>
            <section className={styles.notes}>
                <AppBar>
                    <div className={styles.notePrimaryActions}>
                        <Search
                            onChange={(query) => onSearch(query)}
                            value={query}
                        />
                    </div>
                    {!selectedNote && (
                        <IconButton
                            name="context-menu"
                            onClick={() => setMenu(true)}
                            position="right"
                            secondary
                        />
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
                        onSelect={(note) => setMenu(false) & onSelect(note)}
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
                        <IconButton
                            name="delete"
                            onClick={() => onDelete(selectedNote)}
                            position="right"
                            secondary
                        />
                    </AppBar>
                    <TextEditor
                        debounce={2000}
                        key={selectedNote.id}
                        onChange={(text) => onUpdate({ ...selectedNote, text })}
                        value={selectedNote.text}
                    />
                </section>
            )}
        </>
    );
};
