import React, { useContext, useEffect, useState } from 'react';

window.addEventListener(
    'beforeinstallprompt',
    (event) => console.log(event),
    false
);

export const InstallContext = React.createContext(null);

export const InstallProvider = ({ children }) => {
    const [deferredPrompt, setDeferredPrompt] = useState();

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();

            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handler, false);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    return (
        <InstallContext.Provider value={deferredPrompt}>
            {children}
        </InstallContext.Provider>
    );
};

export const useInstall = () => useContext(InstallContext);
