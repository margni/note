import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { IconInput } from './IconInput';

test('updates on change without value', () => {
    const change = jest.fn();
    const { container } = render(<IconInput onChange={change} value="" />);

    expect(change).not.toHaveBeenCalled();

    fireEvent.change(container.getElementsByTagName('input')[0], {
        target: { value: 'FOO' },
    });

    expect(change).toHaveBeenCalledWith('FOO');
});
