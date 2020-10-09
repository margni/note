import React from 'react';
import { render } from '@testing-library/react';

import { ContextMenu } from './ContextMenu';

test('Renders only open button when not open.', () => {
    const { container } = render(
        <ContextMenu>
            <div>test</div>
        </ContextMenu>
    );

    expect(container.childNodes.length).toEqual(1);
});

test('Renders', () => {
    const { getByText } = render(
        <ContextMenu open={true}>
            <div>test</div>
        </ContextMenu>
    );

    expect(getByText('test')).toBeTruthy();
});
