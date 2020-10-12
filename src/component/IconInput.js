import React from 'react';

import styles from './IconInput.module.css';

// TODO Dont send space(s) only, but also dont trim trailing space
// TODO Any limits on input characters/regex?
export const IconInput = ({
    icon = 'search',
    maxLength,
    onChange,
    secondary,
    title,
    value,
}) => (
    <div className={styles.host}>
        <span className={`${styles.icon} icon-${icon}`} />
        <input
            placeholder=" "
            title={title}
            className={styles.input}
            maxLength={maxLength}
            onChange={(event) => onChange(event.target.value)}
            type="text"
            value={value}
        />
        {secondary && value && (
            <div className={styles.secondary}>{secondary}</div>
        )}
    </div>
);
