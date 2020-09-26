import React from 'react';

import styles from './Menu.module.css';

// TODO close on click outside.
export const Menu = ({ children, open }) => {
    return open ? <nav className={styles.host}>{children}</nav> : null;
};
