import React from 'react';
import { fireEvent, render } from '@testing-library/react';

jest.mock('firebase/app', () => ({
    auth: {
        GoogleAuthProvider: jest.fn(),
    },
}));

jest.mock('../firebaseApp', () => {
    const auth = {
        onAuthStateChanged: jest.fn(),
        signInWithRedirect: jest.fn(),
        signOut: jest.fn(),
    };

    return {
        firebaseApp: {
            auth: () => auth,
        },
    };
});

import { firebaseApp } from '../firebaseApp';

import { AuthProvider, useAuth } from './AuthContext';

test('AuthProvider', () => {
    const TestComponent = () => {
        const context = useAuth();

        return (
            <>
                <button onClick={context.signOut()}>SIGNOUT</button>
                <button onClick={context.signInWithGoogle()}>SIGNIN</button>
            </>
        );
    };

    const { getByText } = render(
        <AuthProvider>
            <TestComponent />
        </AuthProvider>
    );

    fireEvent.click(getByText('SIGNOUT'));
    fireEvent.click(getByText('SIGNIN'));

    expect(firebaseApp.auth().signOut).toHaveBeenCalled();
    expect(firebaseApp.auth().signInWithRedirect).toHaveBeenCalled();
});
