import React, { useCallback } from 'react';

import { Browser } from './Browser';
import { Editor } from './Editor';

import styles from './Main.module.css';

export const Main = ({
    filterArchive,
    filterTag,
    hasArchive,
    notes,
    onClose,
    onCreate,
    onDelete,
    onSearch,
    onSelect,
    onToggleArchive,
    onToggleFilterArchive,
    onToggleFilterTag,
    onTogglePin,
    onToggleTag,
    onUpdate,
    placeholderMessage,
    query,
    selectedNote,
    tags,
}) => {
    // TODO Performance test these callbacks.
    const handleClose = useCallback(() => onClose(selectedNote), [
        onClose,
        selectedNote,
    ]);

    const handleDelete = useCallback(() => onDelete(selectedNote), [
        onDelete,
        selectedNote,
    ]);

    const handleToggleArchive = useCallback(
        () => onToggleArchive(selectedNote),
        [onToggleArchive, selectedNote]
    );

    const handleTogglePin = useCallback(() => onTogglePin(selectedNote), [
        onTogglePin,
        selectedNote,
    ]);

    const handleToggleTag = useCallback(
        (tag) => onToggleTag(selectedNote, tag),
        [onToggleTag, selectedNote]
    );

    return (
        <>
            <Browser
                filterArchive={filterArchive}
                filterTag={filterTag}
                hasArchive={hasArchive}
                notes={notes}
                onCreate={onCreate}
                onSearch={onSearch}
                onSelect={onSelect}
                onToggleFilterArchive={onToggleFilterArchive}
                onToggleFilterTag={onToggleFilterTag}
                query={query}
                selectedNote={selectedNote}
                tags={tags}
            />
            <div className={styles.placeholder}>{placeholderMessage}</div>
            {selectedNote && (
                <Editor
                    note={selectedNote}
                    onClose={handleClose}
                    onDelete={handleDelete}
                    onToggleArchive={handleToggleArchive}
                    onTogglePin={handleTogglePin}
                    onToggleTag={handleToggleTag}
                    onUpdate={onUpdate}
                    tags={tags}
                />
            )}
        </>
    );
};
