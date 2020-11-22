describe('fizz buzz', () => {
    // DEMO
    it('should return 1 if given 1', () => {
        const result = fizzBuzz(1);

        expect(result).toEqual('1');
    });

    it('should return 2 if given 2', () => {
        const result = fizzBuzz(2);

        expect(result).toEqual('2');
    });

    it('should return fizz if given 3', () => {
        const result = fizzBuzz(3);

        expect(result).toEqual('fizz');
    });

    it('should return buzz if given 5', () => {
        const result = fizzBuzz(5);

        expect(result).toEqual('buzz');
    });

    it('should return fizz if given 6', () => {
        const result = fizzBuzz(6);

        expect(result).toEqual('fizz');
    });

    it('should return buzz if given 10', () => {
        const result = fizzBuzz(10);

        expect(result).toEqual('buzz');
    });

    it('should return buzz if given 15', () => {
        const result = fizzBuzz(15);

        expect(result).toEqual('fizz buzz');
    });
});

function fizzBuzz(n) {
    let dividedBy3 = n % 3 === 0;
    let dividedBy5 = n % 5 === 0;
    if (dividedBy3 && dividedBy5) {
        return 'fizz buzz';
    }
    if (dividedBy3) {
        return 'fizz';
    }
    if (dividedBy5) {
        return 'buzz';
    }
    return n.toString();
}

 // if 1 -> 1
 // if 2 -> 2
 // if 3 -> fizz
 // if 5 -> buzz
 // if 15 -> fizz buzz

