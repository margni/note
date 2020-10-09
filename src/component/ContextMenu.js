import React from 'react';

import { IconButton } from './IconButton';

import styles from './ContextMenu.module.css';

// TODO close on click outside.
export const ContextMenu = ({
    children,
    open,
    onToggle,
    name = 'context-menu',
    width = 'normal',
}) => (
    <div
        className={`${styles.host} ${width === 'narrow' ? styles.narrow : ''}`}
    >
        <IconButton name={name} onClick={() => onToggle(true)} secondary />
        {open && (
            <nav className={styles.menu}>
                <div className={styles.close}>
                    <IconButton name="close" onClick={() => onToggle(false)} />
                </div>
                {children}
            </nav>
        )}
    </div>
);
