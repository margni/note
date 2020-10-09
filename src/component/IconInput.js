import React from 'react';

import { IconButton } from './IconButton';

import styles from './IconInput.module.css';

// TODO Dont send space(s) only, but also dont trim trailing space
// TODO Any limits on input characters/regex?
export const IconInput = ({
    icon = 'search',
    maxLength,
    onChange,
    onSecondaryAction,
    secondaryActionIcon = 'close',
    secondaryActionType = 'button',
    value,
}) => (
    <div className={styles.host}>
        <span className={`${styles.icon} icon-${icon}`} />
        <input
            className={styles.input + (value && ` ${styles.hasValue}`)}
            maxLength={maxLength}
            onChange={(event) => onChange(event.target.value)}
            type="text"
            value={value}
        />
        {secondaryActionIcon && value && (
            <div className={styles.close}>
                <IconButton
                    name={secondaryActionIcon}
                    onClick={onSecondaryAction}
                    type={secondaryActionType}
                />
            </div>
        )}
    </div>
);
