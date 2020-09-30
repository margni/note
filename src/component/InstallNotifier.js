import React, { useCallback } from 'react';

import { useInstall } from '../context/InstallContext';

import styles from './InstallNotifier.module.css';

export const InstallNotifier = () => {
    const deferredPrompt = useInstall();

    const install = useCallback(() => {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    }, [deferredPrompt]);

    return deferredPrompt ? (
        <button className={styles.host} onClick={install}>
            Install
        </button>
    ) : null;
};
