import React, {useEffect, useState} from 'react';
import firebase from 'firebase/app';

import {Firebase} from './firebase';

export const AuthContext = React.createContext(null);

// TODO add multiple sign-in options
const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    Firebase.auth().signInWithRedirect(provider);
};

const signOut = () => {
    Firebase.auth().signOut();
};

// make an auth class object?
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = Firebase.auth().onAuthStateChanged(setUser);

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider
            value={{signInWithGoogle, signOut, user}}
        >
            {children}
        </AuthContext.Provider>
    );
};
