import React, { useContext, useEffect, useState } from 'react';

export const InstallContext = React.createContext(null);

export const InstallProvider = ({ children }) => {
    const [deferredPrompt, setDeferredPrompt] = useState();

    useEffect(() => {
        const onBeforeInstallPrompt = (e) => {
            e.preventDefault();

            setDeferredPrompt(e);
        };

        const onAppInstalled = () => {
            setDeferredPrompt();
        };

        window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
        window.addEventListener('appinstalled', onAppInstalled);

        return () => {
            window.removeEventListener(
                'beforeinstallprompt',
                onBeforeInstallPrompt
            );
            window.removeEventListener('appinstalled', onAppInstalled);
        };
    }, []);

    return (
        <InstallContext.Provider value={deferredPrompt}>
            {children}
        </InstallContext.Provider>
    );
};

export const useInstall = () => useContext(InstallContext);
