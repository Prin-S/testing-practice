import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './testing-practice.js';

test('capitalize the first letter', () => {
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('testing practice')).toBe('Testing practice');
});

test('reverse a string', () => {
    expect(reverseString('test')).toBe('tset');
    expect(reverseString('The quick brown fox jumps over the lazy dog.')).toBe('.god yzal eht revo spmuj xof nworb kciuq ehT');
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

describe('Caesar cipher', () => {
    test(`caesarCipher('xyz', 3)`, () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test(`caesarCipher('HeLLo', 3)`, () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test(`caesarCipher('Hello, World!', 3)`, () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    test(`caesarCipher('The quick brown fox jumps over the lazy dog.', 15)`, () => {
        expect(caesarCipher('The quick brown fox jumps over the lazy dog.', 15)).toBe('Iwt fjxrz qgdlc udm yjbeh dktg iwt apon sdv.');
    });

    test(`caesarCipher('Hello, World!', 0)`, () => {
        expect(caesarCipher('Hello, World!', 0)).toBe('Hello, World!');
    });

    test(`caesarCipher('Hello, World!', 26)`, () => {
        expect(caesarCipher('Hello, World!', 26)).toBe('Hello, World!');
    });

    test(`caesarCipher('Hello, World!', 24)`, () => {
        expect(caesarCipher('Hello, World!', 24)).toBe('Fcjjm, Umpjb!');
    });

    test(`caesarCipher('Hello, World!', -2)`, () => {
        expect(caesarCipher('Hello, World!', -2)).toBe('Fcjjm, Umpjb!');
    });

    test('shiftFactor under -26', () => {
        expect(caesarCipher('Hello, World!', -88)).toBe('The shift factor needs to be from -26 to 26.');
    });

    test('shiftFactor over 26', () => {
        expect(caesarCipher('Hello, World!', 99)).toBe('The shift factor needs to be from -26 to 26.');
    });
});

describe('analyze an array', () => {
    test('analyzeArray([1, 8, 3, 4, 2, 6])', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    });

    test('analyzeArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])', () => {
        expect(analyzeArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])).toEqual({average: 486.85714285714283, min: 1, max: 6345, length: 14});
    });

    test('object', () => {
        expect(analyzeArray({one:1, eight:8 , three:3, four:4, two:2, six:6})).toEqual({average: 4, min: 1, max: 8, length: 6});
    });
    
    test('empty array', () => {
        expect(analyzeArray([])).toBe('The array is empty.');
    });

    test('not an array of numbers', () => {
        expect(analyzeArray(['dog', 2, 3])).toBe('The array must contain only numbers.');
    });

    test('text', () => {
        expect(analyzeArray('test')).toBe('Only an array is accepted.');
    });

    test('number', () => {
        expect(analyzeArray(2)).toBe('Only an array is accepted.');
    });

    test('boolean', () => {
        expect(analyzeArray(true)).toBe('Only an array is accepted.');
    });
});