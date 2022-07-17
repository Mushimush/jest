import capitalize from "../code/capitalize";

test('SeBestIan to Sebestian', () => {
    expect(capitalize('SeBestIan')).toBe('Sebestian')
}); 

test('empty string', () => {
    expect(capitalize('')).toBe('')
});