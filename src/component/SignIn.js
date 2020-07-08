import React from 'react';

import logo from '../image/logo.svg';
import styles from './SignIn.module.css';

// todo login - provide more login options
// todo logo centered in same location as loading logo (but not animated obviously)
export const SignIn = ({onClick}) =>
    <section className={styles.host}>
        <img alt="mNote" className={styles.image} src={logo} />
        <button className={styles.button} onClick={onClick}>Sign in with Google</button>
        <p className={styles.footer}>© <a className={styles.link} href="http://margni.com">Margni Ltd.</a> 2020</p>
    </section>;
