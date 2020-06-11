import React from 'react';

import { AuthContext, AuthProvider } from '../AuthContext';
import { MainWithNotes } from './MainWithNotes';
import { NoteProvider } from '../NoteContext';
import { SignIn } from './SignIn';

export const App = () =>
    <AuthProvider>
        <NoteProvider>
            <AuthContext.Consumer>
                { ({signInWithGoogle, signOut, user}) => user
                    ? <MainWithNotes onSignOut={signOut} />
                    : <SignIn onClick={() => signInWithGoogle()} />
                }
            </AuthContext.Consumer>
        </NoteProvider>
    </AuthProvider>;
