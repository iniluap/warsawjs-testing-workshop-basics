const { pricesCalculator } = require('../src/price-calculator');

// describe - a tool for grouping tests
// skip - for ignoring tests, can be in describe or in a single test
describe.skip('totalPriceForProducts', () => {
    it('should return 0 when no products', () => {
        // DEMO
        // given
        const products = [];

        // when
        let totalPriceForProduct = pricesCalculator().totalPriceForProducts(products);

        expect(totalPriceForProduct).toEqual(0);
    });

    it('should return sum for all products when single count of each', () => {
        // DEMO
        // given
        const products = [{price: 10, count: 1}, ]

        // when
    });

    it('should return sum for all products when more then single count', () => {
        // DEMO
    });
});


describe('delivery cost', () => {
    // Napisz testy funkcji o sygnaturze: calculator.deliveryCost(productsPrice)
    // Funkcja ta zwraca koszt przesyłki, w zależności od sumy ceny produktów:
    // Jeśli cena produktów < 50, koszty przesyłki wynoszą 20

    it('should return 20 if the price is less than 50', () => {
        // given
        const totalPrice = 20;

        const deliveryCost = pricesCalculator().deliveryCost(totalPrice);

        // when
        expect(deliveryCost).toEqual(20);
    });

    // Jeśli cena produktów < 100, koszty przesyłki wynoszą 10
    it('should return 10 if the price is less than 100', () => {
        // given
        const totalPrice = 70;

        const deliveryCost = pricesCalculator().deliveryCost(totalPrice);

        // when
        expect(deliveryCost).toEqual(10);
    });

    // Jeśli cena produktów >= 100, koszty przesyłki wynoszą 0
    it('should return 0 if the price is more than 100', () => {
        // given
        const totalPrice = 120;

        const deliveryCost = pricesCalculator().deliveryCost(totalPrice);

        // when
        expect(deliveryCost).toEqual(0);
    });
});
