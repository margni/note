import React from 'react';

import { AuthContext, AuthProvider } from '../context/AuthContext';
import { MainWithNotes } from '../component/MainWithNotes';
import { NoteProvider } from '../context/NoteContext';
import { SignIn } from '../component/SignIn';

export const App = () => (
    <AuthProvider>
        <NoteProvider>
            <AuthContext.Consumer>
                {({ signInWithGoogle, signOut, user }) =>
                    user ? (
                        <MainWithNotes onSignOut={signOut} />
                    ) : (
                        <SignIn onClick={() => signInWithGoogle()} />
                    )
                }
            </AuthContext.Consumer>
        </NoteProvider>
    </AuthProvider>
);
