import React from 'react';

import { IconButton } from './IconButton';

import styles from './Search.module.css';

export const Search = ({onChange, value}) =>
    <div className={styles.host}>
        <span className={styles.icon + ' icon-search'} />
        <input
            className={styles.input + (value && ` ${styles.hasValue}`)}
            onChange={(event) => onChange(event.target.value)}
            type="text"
            value={value}
        />
        {value && <div className={styles.close}><IconButton name="close" onClick={() => onChange('')} /></div>}
    </div>;
