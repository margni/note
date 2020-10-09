import React, { useCallback } from 'react';

import styles from './TagList.module.css';

// TODO Not entirely sure these should be checkboxes.
export const TagList = ({ tags, note, onToggleTag }) => {
    const handleToggleTag = useCallback(
        (event) => onToggleTag(note, event.target.value),
        [onToggleTag, note]
    );

    // TODO Bring selected tags to the top.
    return (
        <ul className={styles.host}>
            {tags.map((tag, i) => (
                <li key={i}>
                    <label
                        className={styles.item}
                        title={
                            note.tags?.includes(tag)
                                ? `Remove ‘${tag}’`
                                : `Add ‘${tag}’`
                        }
                    >
                        <input
                            type="checkbox"
                            checked={note.tags?.includes(tag)}
                            onChange={handleToggleTag}
                            value={tag}
                        />
                        <span>{tag}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
};
