import React from 'react';

import styles from './IconButton.module.css';

// todo Not accessible
export const IconButton = ({ name, onClick, position, secondary, size }) => (
    <button
        className={`${styles.host} icon-${name} ${
            size === 'large' && styles.large
        } ${position === 'right' && styles.right} ${
            secondary && styles.secondary
        }`}
        onClick={onClick}
    />
);
