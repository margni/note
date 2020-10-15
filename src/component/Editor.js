import React, { useEffect, useState } from 'react';

import { AppBar } from './AppBar';
import { ContextMenu } from './ContextMenu';
import { IconButton } from './IconButton';
import { ManageNoteTags } from './ManageNoteTags';
import { TextEditor } from './TextEditor';

import styles from './Editor.module.css';

export const Editor = ({
    note,
    onClose,
    onDelete,
    onTogglePin,
    onToggleTag,
    onUpdate,
    tags,
}) => {
    const [lastNote, setLastNote] = useState();
    const [tagMenuOpen, setTagMenuOpen] = useState(false);
    const [toolbarOpen, setToolbarOpen] = useState(false);

    useEffect(() => {
        if (note.id !== lastNote) {
            setTagMenuOpen(false);
            setToolbarOpen(false);
            setLastNote(note.id);
        }
    }, [lastNote, note]);

    return (
        <section className={styles.host}>
            <AppBar>
                <div className={styles.notePrimaryActions}>
                    <IconButton name="back" title="Back" onClick={onClose} />
                    <IconButton
                        key={note.id + note.pin}
                        name="pin"
                        title={note.pin ? 'Unpin' : 'Pin'}
                        onClick={onTogglePin}
                        secondary={!note.pin}
                    />
                </div>
                <div className={styles.noteSecondaryActions}>
                    <ManageNoteTags
                        tags={tags}
                        note={note}
                        menuOpen={tagMenuOpen}
                        onToggleMenu={setTagMenuOpen}
                        onToggleTag={onToggleTag}
                    />
                    {navigator.share && (
                        <IconButton
                            title="Share"
                            name="share"
                            onClick={() =>
                                navigator.share({
                                    text: note.text,
                                })
                            }
                            secondary
                        />
                    )}
                    <ContextMenu
                        onToggle={setToolbarOpen}
                        open={toolbarOpen}
                        title="Other Actions"
                        width="toolbar"
                    >
                        <IconButton
                            title="Delete"
                            name="delete"
                            onClick={onDelete}
                            secondary
                        />
                    </ContextMenu>
                </div>
            </AppBar>
            <TextEditor
                debounce={1500}
                key={note.id}
                onChange={(text) => onUpdate({ ...note, text })}
                value={note.text}
            />
        </section>
    );
};
