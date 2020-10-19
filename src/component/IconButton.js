import React from 'react';

import { classNames } from '../helper/classNames';

import styles from './IconButton.module.css';

// todo Not accessible
export const IconButton = ({
    disabled = false,
    name,
    onClick = () => undefined,
    position,
    secondary = false,
    size,
    title,
    type = 'button',
}) => (
    <button
        className={classNames(
            {
                host: true,
                [`icon-${name}`]: true,
                large: size === 'large',
                right: position === 'right',
                secondary,
            },
            styles
        )}
        disabled={disabled}
        onClick={onClick}
        title={title}
        type={type}
    />
);
