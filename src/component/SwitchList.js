import React from 'react';

import styles from './SwitchList.module.css';

// TODO Bring selected tags to the top?
export const SwitchList = ({ icon, onToggle, selected, values }) => (
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
                    {icon && <span className={`${styles.icon} icon-${icon}`} />}
                    {value}
                </button>
            </li>
        ))}
    </ul>
);
