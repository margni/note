import React from 'react';

import { IconButton } from './IconButton';
import { classNames } from '../helper/classNames';

import styles from './ContextMenu.module.css';

// TODO close on click outside.
export const ContextMenu = ({
    children,
    open,
    onToggle,
    name = 'context-menu',
    title,
    width = 'normal',
}) => (
    <div
        className={classNames(
            { host: true, narrow: width === 'narrow' },
            styles
        )}
    >
        <IconButton
            title={`Open ${title}`}
            name={name}
            onClick={() => onToggle(true)}
            secondary
        />
        {open && (
            <nav className={styles.menu}>
                <div className={styles.close}>
                    <IconButton
                        name="close"
                        onClick={() => onToggle(false)}
                        title={`Close ${title}`}
                    />
                </div>
                {children}
            </nav>
        )}
    </div>
);
