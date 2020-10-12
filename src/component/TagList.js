import React, { useCallback } from 'react';

import styles from './TagList.module.css';

// TODO Not entirely sure these should be checkboxes.
export const TagList = ({ onToggleTag, selectedTags, tags }) => {
    const handleToggleTag = useCallback(
        (event) => onToggleTag(event.target.value),
        [onToggleTag]
    );

    // TODO Bring selected tags to the top?
    return (
        <ul className={styles.host}>
            {tags.map((tag, i) => (
                <li key={i}>
                    <label
                        className={styles.item}
                        title={
                            selectedTags?.includes(tag)
                                ? `Remove ‘${tag}’`
                                : `Add ‘${tag}’`
                        }
                    >
                        <input
                            checked={selectedTags?.includes(tag)}
                            onChange={handleToggleTag}
                            type="checkbox"
                            value={tag}
                        />
                        <span>{tag}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
};
