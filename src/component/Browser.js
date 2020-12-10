import { useCallback, useState } from 'react';

import { AppBar } from './AppBar';
import { ContextMenu } from './ContextMenu';
import { Empty } from './Empty';
import { Fab } from './Fab';
import { IconButton } from './IconButton';
import { IconInput } from './IconInput';
import { InstallNotifier } from './InstallNotifier';
import { NoteList } from './NoteList';
import { SwitchButton } from './SwitchButton';
import { SwitchList } from './SwitchList';
import { useAuth } from '../context/AuthContext';

import styles from './Browser.module.css';

export const Browser = ({
    filterArchive,
    filterTag,
    hasArchive,
    notes,
    onSearch,
    onCreate,
    onSelect,
    onToggleFilterArchive,
    onToggleFilterTag,
    query,
    selectedNote,
    tags,
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { signOut, user } = useAuth();

    const handleCreate = useCallback(() => {
        onSearch('');
        onCreate();
    }, [onSearch, onCreate]);

    const handleToggleFilterArchive = useCallback(() => {
        setMenuOpen(false);
        onToggleFilterArchive();
    }, [onToggleFilterArchive]);

    const handleToggleFilterTag = useCallback(
        (tag) => {
            setMenuOpen(false);
            onToggleFilterTag(tag);
        },
        [onToggleFilterTag]
    );

    return (
        <section className={styles.host}>
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
                            onClick={signOut}
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
                            icon="tag"
                            onToggle={handleToggleFilterTag}
                            selected={[filterTag]}
                            values={tags}
                        />
                        {hasArchive && (
                            <div className={styles.filterArchive}>
                                <SwitchButton
                                    checked={filterArchive}
                                    icon="archive"
                                    onToggle={handleToggleFilterArchive}
                                >
                                    Archive
                                </SwitchButton>
                            </div>
                        )}
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
    );
};
