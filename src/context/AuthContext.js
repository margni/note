import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

import { firebaseApp } from '../firebaseApp';

export const AuthContext = React.createContext(null);

// TODO add multiple sign-in options
const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebaseApp.auth().signInWithRedirect(provider);
};

const signOut = () => {
    firebaseApp.auth().signOut();
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => firebaseApp.auth().onAuthStateChanged(setUser), []);

    return (
        <AuthContext.Provider value={{ signInWithGoogle, signOut, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
