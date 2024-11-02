import { capitalize, reverseString } from './testing-practice.js';

test('capitalize the first letter', () => {
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('testing practice')).toBe('Testing practice');
});

test('reverse a string', () => {
    expect(reverseString('test')).toBe('tset');
    expect(reverseString('The quick brown fox jumps over the lazy dog')).toBe('god yzal eht revo spmuj xof nworb kciuq ehT');
});