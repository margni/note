import React from 'react';

import { AuthContext, AuthProvider } from '../context/AuthContext';
import { NoteProvider } from '../context/NoteContext';
import { SignIn } from '../component/SignIn';
import { InstallProvider } from '../context/InstallContext';

const MainWithNotes = React.lazy(() => import('../component/MainWithNotes'));

export const App = () => (
    <InstallProvider>
        <AuthProvider>
            <NoteProvider>
                <AuthContext.Consumer>
                    {({ signInWithGoogle, user }) =>
                        user ? (
                            <React.Suspense fallback={''}>
                                <MainWithNotes />
                            </React.Suspense>
                        ) : (
                            <SignIn onClick={signInWithGoogle} />
                        )
                    }
                </AuthContext.Consumer>
            </NoteProvider>
        </AuthProvider>
    </InstallProvider>
);
