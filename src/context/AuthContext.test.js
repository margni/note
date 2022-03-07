import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { getAuth, signInWithRedirect } from 'firebase/auth';

jest.mock('firebase/auth', () => {
    const auth = {
        onAuthStateChanged: jest.fn(),
        signOut: jest.fn(),
    };

    return {
        getAuth: () => auth,
        GoogleAuthProvider: jest.fn(),
        signInWithRedirect: jest.fn(),
    };
});

jest.mock('../firebaseApp', () => ({
    firebaseApp: {},
}));

import { AuthProvider, useAuth } from './AuthContext';

test('Render nothing until initialized', () => {
    const TestComponent = () => <>TEST</>;

    render(
        <AuthProvider>
            <TestComponent />
        </AuthProvider>
    );

    expect(screen.queryByText('TEST')).not.toBeInTheDocument();
});

test('Render with user and provide sign in and out functions.', () => {
    const TestComponent = () => {
        const context = useAuth();

        return (
            <>
                <button onClick={context.signOut()}>SIGNOUT</button>
                <button onClick={context.signInWithGoogle()}>SIGNIN</button>
            </>
        );
    };

    getAuth().onAuthStateChanged.mockImplementationOnce((fn) =>
        fn({ displayName: 'Test User' })
    );

    render(
        <AuthProvider>
            <TestComponent />
        </AuthProvider>
    );

    fireEvent.click(screen.getByText('SIGNOUT'));
    fireEvent.click(screen.getByText('SIGNIN'));

    expect(getAuth().signOut).toHaveBeenCalled();
    expect(signInWithRedirect).toHaveBeenCalled();
});
