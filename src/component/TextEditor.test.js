import { fireEvent, render } from '@testing-library/react';

import { TextEditor } from './TextEditor';

jest.useFakeTimers();

test('initializes, with focus', () => {
    const { container } = render(<TextEditor value="TEST" />);

    expect(container.firstChild).toBe(document.activeElement);
    expect(container.firstChild.value).toBe('TEST');
});

test('runs change deferred', () => {
    const change = jest.fn();
    const { container } = render(<TextEditor value="TEST" onChange={change} />);

    fireEvent.change(container.firstChild, { target: { value: 'BAR' } });
    fireEvent.change(container.firstChild, { target: { value: 'FOO' } });

    expect(change).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(change).toHaveBeenCalledTimes(1);
    expect(change).toHaveBeenCalledWith('FOO');
});

test('runs change immediately when destroyed', () => {
    const change = jest.fn();
    const { container, rerender } = render(
        <TextEditor value="TEST" onChange={change} />
    );

    fireEvent.change(container.firstChild, { target: { value: 'FOO' } });

    expect(change).not.toHaveBeenCalled();

    rerender(<></>);

    expect(change).toHaveBeenCalledWith('FOO');
});
