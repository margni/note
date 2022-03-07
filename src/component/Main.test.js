import { render } from '@testing-library/react';

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(),
}));

jest.mock('../firebaseApp', () => ({}));

import { AuthContext } from '../context/AuthContext';

import { Main } from './Main';

test('renders', () => {
    const wrapper = ({ children }) => (
        <AuthContext.Provider value={{ user: {} }}>
            {children}
        </AuthContext.Provider>
    );

    render(<Main />, { wrapper });
});
