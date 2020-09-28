import React, { useContext, useEffect, useState } from 'react';

export const InstallContext = React.createContext(null);

export const InstallProvider = ({ children }) => {
    const [deferredPrompt, setDeferredPrompt] = useState();

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();

            setDeferredPrompt(e);
        };

        const handleAppInstalled = () => {
            setDeferredPrompt();
        };

        window.addEventListener(
            'beforeinstallprompt',
            handleBeforeInstallPrompt
        );
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            window.removeEventListener(
                'beforeinstallprompt',
                handleBeforeInstallPrompt
            );
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    return (
        <InstallContext.Provider value={deferredPrompt}>
            {children}
        </InstallContext.Provider>
    );
};

export const useInstall = () => useContext(InstallContext);
