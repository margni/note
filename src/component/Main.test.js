import React from 'react';
import { render } from '@testing-library/react';

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
