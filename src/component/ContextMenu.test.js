import React from 'react';
import { render } from '@testing-library/react';

import { ContextMenu } from './ContextMenu';

test('renders nothing when not open', () => {
    const { container } = render(
        <ContextMenu>
            <div>test</div>
        </ContextMenu>
    );

    expect(container.firstChild).toBeFalsy();
});

test('renders', () => {
    const { getByText } = render(
        <ContextMenu open={true}>
            <div>test</div>
        </ContextMenu>
    );

    expect(getByText('test')).toBeTruthy();
});
