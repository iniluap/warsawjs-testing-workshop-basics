it('example test should pass', () => {
    expect(true).toBe(true);
});

// DEMO
it('should add two numbers', () => {
    // arrange (given) - isn't always present

    // act (when)
    const sum = add(1, 3);

    // assert (then)
    // toEqual - checks values
    expect(sum).toEqual(4);
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
