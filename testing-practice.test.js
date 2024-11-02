import { capitalize } from './testing-practice.js';

test('capitalize the first letter', () => {
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('testing practice')).toBe('Testing practice');
});