import React from 'react';

import { classNames } from '../helper/classNames';

import styles from './IconButton.module.css';

// todo Not accessible
export const IconButton = ({
    disabled = false,
    name,
    onClick = () => undefined,
    position,
    secondary,
    size,
    type = 'button',
}) => (
    <button
        className={classNames(
            {
                host: true,
                [`icon-${name}`]: true,
                large: size === 'large',
                right: position === 'right',
                secondary: secondary,
            },
            styles
        )}
        disabled={disabled}
        type={type}
        onClick={onClick}
    />
);
