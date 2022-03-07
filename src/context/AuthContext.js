import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';

import { firebaseApp } from '../firebaseApp';

export const AuthContext = React.createContext(null);

const auth = getAuth(firebaseApp);

// TODO add multiple sign-in options
const signInWithGoogle = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
};

const signOut = () => {
    auth.signOut();
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => auth.onAuthStateChanged(setUser), []);

    return user !== undefined ? (
        <AuthContext.Provider value={{ signInWithGoogle, signOut, user }}>
            {children}
        </AuthContext.Provider>
    ) : null;
};

export const useAuth = () => useContext(AuthContext);
