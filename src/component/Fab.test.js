import React from 'react';
import { render } from '@testing-library/react';

import { Fab } from './Fab';

test('renders', () => {
    const { getByText } = render(<Fab><div>test</div></Fab>);

    expect(getByText('test')).toBeTruthy();
});
