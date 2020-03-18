import { firstLine } from './firstLine';

test('get first line', () => {
    expect(firstLine('TEST1\n\nFOO')).toEqual('TEST1');
});

test('ignores whitespace', () => {
    expect(firstLine('\n TEST2\n\nFOO')).toEqual('TEST2');
});

test('entire string if no suitable break', () => {
    const string = 'TEST3 IS ONE LONG STRING';
    expect(firstLine(string)).toEqual(string);
});
