import React from 'react';
import { fireEvent, render } from '@testing-library/react';

jest.mock('firebase/app', () => ({
    auth: {
        GoogleAuthProvider: jest.fn(),
    },
}));

jest.mock('../firebase', () => {
    const auth = {
        onAuthStateChanged: jest.fn(),
        signInWithRedirect: jest.fn(),
        signOut: jest.fn(),
    };

    return {
        Firebase: {
            auth: () => auth,
        },
    };
});

import { Firebase } from '../firebase';

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

    expect(Firebase.auth().signOut).toHaveBeenCalled();
    expect(Firebase.auth().signInWithRedirect).toHaveBeenCalled();
});
