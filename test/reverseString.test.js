import reverserString from "../code/reverseString";

test('abc to cba', () => {
    expect(reverserString('abc')).toBe('cba')
});

test('hey tom to mot yeh', () => {
    expect(reverserString('hey tom')).toBe('mot yeh')
});
test('', () => {
    expect(reverserString('')).toBe('')
});