import React from 'react';

import styles from './SwitchList.module.css';

export const SwitchList = ({ onToggle, selected, values }) => (
    // TODO Bring selected tags to the top?
    <ul className={styles.host}>
        {values.map((value, i) => (
            <li key={i}>
                <button
                    aria-checked={selected?.includes(value)}
                    className={styles.switch}
                    onClick={() => onToggle(value)}
                    role="switch"
                    type="button"
                >
                    {value}
                </button>
            </li>
        ))}
    </ul>
);
