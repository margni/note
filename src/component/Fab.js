import React from 'react';

import { classNames } from '../helper/classNames';

import styles from './Fab.module.css';

export const Fab = ({ attention, children }) => (
    <div className={classNames({ host: true, attention }, styles)}>
        {children}
    </div>
);
