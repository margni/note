import { render } from '@testing-library/react';

import { AppBar } from './AppBar';

test('renders', () => {
    const { getByText } = render(
        <AppBar>
            <div>test</div>
        </AppBar>
    );

    expect(getByText('test')).toBeTruthy();
});
