import React from 'react';

import { AuthContext, AuthProvider } from '../context/AuthContext';
import { NoteProvider } from '../context/NoteContext';
import { SignIn } from '../component/SignIn';

const MainWithNotes = React.lazy(() => import('../component/MainWithNotes'));

export const App = () => (
    <AuthProvider>
        <NoteProvider>
            <AuthContext.Consumer>
                {({ signInWithGoogle, signOut, user }) =>
                    user ? (
                        <React.Suspense fallback={''}>
                            <MainWithNotes onSignOut={signOut} />
                        </React.Suspense>
                    ) : (
                        <SignIn onClick={() => signInWithGoogle()} />
                    )
                }
            </AuthContext.Consumer>
        </NoteProvider>
    </AuthProvider>
);
