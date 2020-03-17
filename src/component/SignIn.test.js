import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { SignIn } from './SignIn';

test('renders', () => {
    const { getByText } = render(<SignIn />);
    const linkElement = getByText(/Sign in with Google/i);

    expect(linkElement).toBeInTheDocument();
});

test('click', () => {
    const fn = jest.fn();
    const { getByText } = render(<SignIn onClick={fn}/>);
    const linkElement = getByText(/Sign in with Google/i);

    fireEvent.click(linkElement);

    expect(fn).toHaveBeenCalled();
});
