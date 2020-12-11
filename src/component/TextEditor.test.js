import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextEditor } from './TextEditor';

beforeEach(() => {
    jest.useFakeTimers();
});

test('initializes, with focus', () => {
    const { container } = render(<TextEditor value="TEST" />);

    expect(container.firstChild).toBe(document.activeElement);
    expect(container.firstChild.value).toBe('TEST');
});

test('runs change deferred', () => {
    const change = jest.fn();
    const { container } = render(<TextEditor value="BAR" onChange={change} />);

    userEvent.type(
        container.firstChild,
        '{backspace}{backspace}{backspace}FOO'
    );

    expect(change).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(change).toHaveBeenCalledTimes(1);
    expect(change).toHaveBeenCalledWith('FOO');
});

test('runs change immediately when destroyed', () => {
    const change = jest.fn();
    const { container, unmount } = render(
        <TextEditor value="" onChange={change} />
    );

    userEvent.type(container.firstChild, 'FOO');

    expect(change).not.toHaveBeenCalled();

    unmount();

    expect(change).toHaveBeenCalledTimes(1);
    expect(change).toHaveBeenCalledWith('FOO');
});
