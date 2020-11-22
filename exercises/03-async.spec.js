const { InMemoryRepository } = require('../src/InMemoryRepository');
const { ProductsService } = require('../src/ProductsService');

it('should return empty list if no products', async () => {
    // DEMO
    // given
    let productService = new ProductsService();
    let product = await productService.products();

    // when
    expect(product).toEqual([]);
});

it.skip('should allow to add a product',  () => {
    // DEMO
});

it.skip('should not allow to add a product with no count', () => {
    // DEMO
});


// TODO: Napisz test, który w którym dodasz dwa produkty i sprawdzisz, że oba są pobrane po wywołaniu metody products()


// TODO: Napisz test, który doda przynamniej jeden produkt i zweryfikuje, że da się go pobrać za pomocą ID
// HINT: użyj metody productById(productId) do pobrania produktu


// TODO: Napisz test, który w którym próba dodania produktu bez pola id skutkuje rzuceniem błędu
// HINT: użyj asercji expect().rejects.toThrowError
