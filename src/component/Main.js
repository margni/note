import React, { useCallback, useState } from 'react';

import { AppBar } from './AppBar';
import { ContextMenu } from './ContextMenu';
import { Editor } from './Editor';
import { Empty } from './Empty';
import { Fab } from './Fab';
import { IconButton } from './IconButton';
import { IconInput } from './IconInput';
import { InstallNotifier } from './InstallNotifier';
import { NoteList } from './NoteList';
import { SwitchList } from './SwitchList';
import { useAuth } from '../context/AuthContext';

import styles from './Main.module.css';

// TODO This could do with a refactor.
export const Main = ({
    filterTag,
    notes,
    onClose,
    onCreate,
    onDelete,
    onSearch,
    onSelect,
    onSignOut,
    onToggleFilterTag,
    onTogglePin,
    onToggleTag,
    onUpdate,
    placeholderMessage,
    query,
    selectedNote,
    tags,
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useAuth();

    // TODO Performance test these callbacks.
    const handleClose = useCallback(() => onClose(selectedNote), [
        onClose,
        selectedNote,
    ]);

    const handleCreate = useCallback(() => {
        onSearch('');
        onCreate();
    }, [onSearch, onCreate]);

    const handleDelete = useCallback(() => onDelete(selectedNote), [
        onDelete,
        selectedNote,
    ]);

    const handleTogglePin = useCallback(() => onTogglePin(selectedNote), [
        onTogglePin,
        selectedNote,
    ]);

    const handleToggleTag = useCallback(
        (tag) => onToggleTag(selectedNote, tag),
        [onToggleTag, selectedNote]
    );

    const handleToggleFilterTag = useCallback(
        (tag) => {
            setMenuOpen(false);
            onToggleFilterTag(tag);
        },
        [onToggleFilterTag]
    );

    return (
        <>
            <section className={styles.notes}>
                <AppBar>
                    <div className={styles.primaryActions}>
                        {(notes?.length || query) && (
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
                        )}
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
                            <SwitchList
                                onToggle={handleToggleFilterTag}
                                selected={[filterTag]}
                                values={tags}
                            />
                        </ContextMenu>
                    )}
                </AppBar>
                {!selectedNote && (
                    <Fab attention={!notes?.length && !query}>
                        <IconButton
                            name="new"
                            onClick={handleCreate}
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
                <Editor
                    note={selectedNote}
                    onClose={handleClose}
                    onDelete={handleDelete}
                    onTogglePin={handleTogglePin}
                    onToggleTag={handleToggleTag}
                    onUpdate={onUpdate}
                    tags={tags}
                />
            )}
        </>
    );
};
