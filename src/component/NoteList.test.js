import { fireEvent, render } from '@testing-library/react';

import { NoteList } from './NoteList';

test('without notes', () => {
    const { container } = render(<NoteList notes={[]} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
    <ol
      class="host"
    />
  `);
});

test('with notes', () => {
    const notes = [{ id: 'ID', text: 'test', pin: false }];
    const onSelect = jest.fn();
    const { container, getByText } = render(
        <NoteList notes={notes} onSelect={onSelect} />
    );

    expect(container.firstChild.childNodes.length).toBe(1);

    fireEvent.click(getByText('test'));

    expect(onSelect).toHaveBeenCalledWith(notes[0]);
});
