import React from 'react';
import { AuthContext, AuthProvider } from '../AuthContext';

import { MainWithNotes } from './MainWithNotes';
import { SignIn } from './SignIn';
import { NoteProvider } from '../NoteProvider';

import './App.css';

export const App = () =>
    <AuthProvider>
        <NoteProvider>
            <AuthContext.Consumer>
                { ({signIn, signOut, user}) => user
                    ? <MainWithNotes user={user} onSignOut={signOut} />
                    : <SignIn onClick={() => signIn()}></SignIn>
                }
            </AuthContext.Consumer>
        </NoteProvider>
    </AuthProvider>;
