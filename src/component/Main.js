import React, { useCallback, useEffect, useState } from 'react';

import { AppBar } from './AppBar';
import { ContextMenu } from './ContextMenu';
import { Empty } from './Empty';
import { Fab } from './Fab';
import { IconButton } from './IconButton';
import { IconInput } from './IconInput';
import { InstallNotifier } from './InstallNotifier';
import { NoteList } from './NoteList';
import { TagList } from './TagList';
import { TextEditor } from './TextEditor';
import { useAuth } from '../context/AuthContext';

import styles from './Main.module.css';
import { ManageNoteTags } from './ManageNoteTags';

export const Main = ({
    filterTag,
    notes,
    onClose,
    onCreate,
    onDelete,
    onSearch,
    onSelect,
    onSignOut,
    onTogglePin,
    onToggleFilterTag,
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

    const handleToggleTag = useCallback(
        (tag) => {
            onToggleTag(selectedNote, tag);
        },
        [onToggleTag, selectedNote]
    );

    return (
        <>
            <section className={styles.notes}>
                <AppBar>
                    <div className={styles.notePrimaryActions}>
                        <IconInput
                            onChange={onSearch}
                            secondary={
                                <IconButton
                                    onClick={() => onSearch('')}
                                    title="Clear"
                                    name="close"
                                />
                            }
                            title="Search"
                            value={query}
                        />
                    </div>
                    {!selectedNote && (
                        <ContextMenu
                            onToggle={setMenuOpen}
                            open={menuOpen}
                            title="Menu"
                        >
                            <IconButton
                                name="sign-out"
                                onClick={onSignOut}
                                position="right"
                                secondary
                                title="Sign-Out"
                            />
                            <div className={styles.user}>
                                <h3 className={styles.userName}>
                                    {user.displayName}
                                </h3>
                                {user.email}
                            </div>
                            <InstallNotifier />
                            <TagList
                                onToggleTag={onToggleFilterTag}
                                selectedTags={[filterTag]}
                                tags={tags}
                            />
                        </ContextMenu>
                    )}
                </AppBar>
                {!selectedNote && (
                    <Fab>
                        <IconButton
                            name="new"
                            onClick={() => onCreate()}
                            size="large"
                            title="New Note"
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
                                title="Back"
                                onClick={() => onClose(selectedNote)}
                            />
                            <IconButton
                                key={selectedNote.id + selectedNote.pin}
                                name="pin"
                                title={selectedNote.pin ? 'Unpin' : 'Pin'}
                                onClick={() => onTogglePin(selectedNote)}
                                secondary={!selectedNote.pin}
                            />
                        </div>
                        <div className={styles.noteSecondaryActions}>
                            <ManageNoteTags
                                tags={tags}
                                note={selectedNote}
                                menuOpen={tagMenuOpen}
                                onToggleMenu={setTagMenuOpen}
                                onToggleTag={handleToggleTag}
                            />
                            {navigator.share && (
                                <IconButton
                                    title="Share"
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
                                title="Delete"
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
