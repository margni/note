import { classNames } from './classNames';

test('Works with styles.', () => {
    expect(classNames({ a: true, b: false, c: true }, { a: '1' })).toEqual(
        '1 c'
    );
});

test('Works without styles.', () => {
    expect(classNames({ a: true, b: false, c: true })).toEqual('a c');
});

test('Returns nothing.', () => {
    expect(classNames({ a: false })).toEqual('');
});
