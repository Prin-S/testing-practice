import { capitalize, reverseString, calculator } from './testing-practice.js';

test('capitalize the first letter', () => {
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('testing practice')).toBe('Testing practice');
});

test('reverse a string', () => {
    expect(reverseString('test')).toBe('tset');
    expect(reverseString('The quick brown fox jumps over the lazy dog')).toBe('god yzal eht revo spmuj xof nworb kciuq ehT');
});

describe('calculate two numbers', () => {
    test('add', () => {
        expect(calculator.add(9, 3)).toBe(12);
    });

    test('subtract', () => {
        expect(calculator.subtract(9, 3)).toBe(6);
    });

    test('multiply', () => {
        expect(calculator.multiply(9, 3)).toBe(27);
    });

    test('divide', () => {
        expect(calculator.divide(9, 3)).toBe(3);
    });
});