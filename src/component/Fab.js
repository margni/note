import React from 'react';

import styles from './Fab.module.css';

export const Fab = ({ children }) => (
    <div className={styles.host}>{children}</div>
);
