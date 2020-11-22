describe('calculate discount', () => {
    // TODO: Stwórz implementację funkcji discount(totalPrice) korzystając z podejścia TDD
    // Funkcja ta przyjmuje sumę cen produktów, a zwraca liczbę będącą wartością zniżki zależną (procentowo) od sumy.
    // Założenia funkcji:
    // WAŻNE: staraj się nie czytać kolejnych punktów przed zrobieniem


    // 1. Jeśli suma wynosi 0 - brak zniżki
    it('discount should equal 0 if price is 0', () => {
        let price = 0;
        const discountResult = discount(price);

        expect(discountResult).toEqual(0);
    });

    // 2. Jeśli suma wynosi 49 - brak zniżki
    it('discount should equal 0 if price is 49', () => {
        let price = 49;
        const discountResult = discount(price);

        expect(discountResult).toEqual(0);
    });


    // 3. Jeśli suma znajduje się w przedziale pomiędzy 50, a 99 - znikżka wynosi 5% tej sumy
    it('discount should equal 5% if price is 50 - 99', () => {
        let price = 55;
        const discountResult = discount(55);

        expect(discountResult).toEqual(2.75);
    });


    // 4. Jeśli suma znajduje się w przedziale pomiędzy 100, a 149 - znikżka wynosi 10% tej sumy
    it('discount should equal 10% if price is 100 - 149', () => {
        let price = 105;
        const discountResult = discount(105);

        expect(discountResult).toEqual(10.5);
    });

    // 5. Jeśli suma jest większa bądź równa 150 - znikżka wynosi 15% tej sumy
    it('discount should equal 15% if price is 150 or more', () => {
        let price = 155;
        const discountResult = discount(155);

        expect(discountResult).toEqual(23.25);
    });

    // 6. Zniżka nigdy nie może być większa niż 30
    it('discount should never equal more than 30', () => {
        let price = 1545;
        const discountResult = discount(1545);

        expect(discountResult).toEqual(30);
    });

});

function discount(totalPrice) {
    if (totalPrice >= 150) {
        return Math.min(totalPrice * 0.15, 30);
    }
    if (totalPrice >= 100) {
        return totalPrice * 0.1;
    }
    if (totalPrice >= 50) {
        return totalPrice * 0.05;
    }
    return 0;
}
