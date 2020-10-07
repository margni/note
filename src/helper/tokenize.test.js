import { tokenize } from './tokenize';

test('Ignores whitespace.', () => {
    expect(tokenize(' \n\t ')).toBeUndefined();
});

test('Single lookaround.', () => {
    expect(tokenize('a')).toEqual(/(?=.*a)/i);
});

test('Multiple tokens and special characters.', () => {
    expect(tokenize(' a  b+ ')).toEqual(/(?=.*a)(?=.*b\+)/i);
});
