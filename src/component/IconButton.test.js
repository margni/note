import { fireEvent, render } from '@testing-library/react';

import { IconButton } from './IconButton';

test('fires click', () => {
    const click = jest.fn();
    const { getByRole } = render(<IconButton onClick={click} />);

    expect(click).not.toHaveBeenCalled();

    fireEvent.click(getByRole('button'));

    expect(click).toHaveBeenCalled();
});
