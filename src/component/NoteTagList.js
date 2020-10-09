import React from 'react';

import styles from './NoteTagList.module.css';

export const NoteTagList = ({ note }) => (
    <>
        {note.tags && note.tags[0] && (
            <span className={styles.tag}>{note.tags[0]}</span>
        )}
        &nbsp;
        {note.tags?.length > 1 && (
            <span className={styles.tag}>+{note.tags.length - 1}</span>
        )}
    </>
);
