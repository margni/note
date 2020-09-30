import React from 'react';

import styles from './ContextMenu.module.css';

// TODO close on click outside.
export const ContextMenu = ({ children, open }) => {
    return open ? <nav className={styles.host}>{children}</nav> : null;
};
