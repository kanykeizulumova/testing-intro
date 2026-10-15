const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    let needIds = sortProductsByPrice(products, 'asc').map(product => product.id)
    expect(needIds).toEqual([3, 6, 5, 4, 2, 1])
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    let needIds = sortProductsByPrice(products, '').map(product => product.id)
    expect(needIds).toEqual([3, 6, 5, 4, 2, 1])
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const catalog = [
      { id: 1, name: 'Наушники', price: 49900 },
      { id: 3, name: 'JavaScript для начинающих', price: 18900 },
      { id: 4, name: 'Настольная лампа', price: 27900 },
    ];

    let needIds = sortProductsByPrice(catalog, 'asc').map(product => product.id)
    expect(needIds).toEqual([3, 4, 1])
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    let needIds = sortProductsByPrice(products, 'desc').map(product => product.id)
    expect(needIds).toEqual([1, 2, 4, 5, 6, 3])
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const catalog = [
      { id: 3, name: 'JavaScript для начинающих', price: 18900 },
      { id: 1, name: 'Наушники', price: 49900 },
      { id: 4, name: 'Настольная лампа', price: 27900 },
    ];

    let needIds = sortProductsByPrice(catalog, 'desc').map(product => product.id)
    expect(needIds).toEqual([1, 4, 3])
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const catalog = [
      { id: 5, name: 'Чехол для ноутбука', price: 24900 },
      { id: 2, name: 'Клавиатура', price: 35900 },
      { id: 6, name: 'Чистый код', price: 21900 }
    ];

    let needIds = sortProductsByPrice(catalog, 'desc').map(product => product.id)
    expect(needIds).toEqual([2, 5, 6])
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const catalog = [
      { id: 1, name: 'Наушники', price: 49900 },
      { id: 3, name: 'JavaScript для начинающих', price: 18900 },
      { id: 4, name: 'Настольная лампа', price: 27900 },
    ];

    sortProductsByPrice(catalog, 'asc');
    expect(catalog.map(product => product.id)).toEqual([1, 3, 4]);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const catalog = [
      { id: 1, name: 'Наушники', price: 49900 },
      { id: 3, name: 'JavaScript для начинающих', price: 18900 },
      { id: 4, name: 'Настольная лампа', price: 27900 },
    ];

    sortProductsByPrice(catalog, 'desc');
    expect(catalog.map(product => product.id)).toEqual([1, 3, 4]);
  });
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    sortProductsByPrice(products);
    expect(products.map(product => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
