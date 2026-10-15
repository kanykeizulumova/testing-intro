const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const catalog = [
      { id: 1, category: 'electronics', },
      { id: 2, category: 'electronics', },
      { id: 3, category: 'books', },
      { id: 4, category: 'home', },
      { id: 5, category: 'home', },
      { id: 6, category: 'books', },
    ]
    let needIds = filterByCategory(catalog, 'all').map(cat => cat.id)
    expect(needIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const catalog = [
      { id: 1, category: 'electronics', },
      { id: 2, category: 'electronics', },
      { id: 3, category: 'books', },
      { id: 4, category: 'home', },
      { id: 5, category: 'home', },
      { id: 6, category: 'books', },
    ]
    let needIds = filterByCategory(catalog, undefined).map(cat => cat.id)
    expect(needIds).toEqual([1, 2, 3, 4, 5, 6]);
  });


  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const catalog = [
      { id: 1, category: 'electronics', },
      { id: 2, category: 'electronics', },
      { id: 3, category: 'books', },
      { id: 4, category: 'home', },
      { id: 5, category: 'home', },
      { id: 6, category: 'books', },
    ]
    let needIds = filterByCategory(catalog, '').map(cat => cat.id)
    expect(needIds).toEqual([1, 2, 3, 4, 5, 6]);
  });


  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const catalog = [
      { id: 1, category: 'electronics', },
      { id: 2, category: 'electronics', },
      { id: 3, category: 'books', },
      { id: 4, category: 'home', },
      { id: 5, category: 'home', },
      { id: 6, category: 'books', },
    ]
    let needIds = filterByCategory(catalog, 'electronics').map(cat => cat.id)
    expect(needIds).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const catalog = [
      { id: 1, category: 'electronics', },
      { id: 2, category: 'electronics', },
      { id: 3, category: 'books', },
      { id: 4, category: 'home', },
      { id: 5, category: 'home', },
      { id: 6, category: 'books', },
    ]
    let needIds = filterByCategory(catalog, 'books').map(cat => cat.id)
    expect(needIds).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const catalog = [
      { id: 1, category: 'electronics', },
      { id: 2, category: 'electronics', },
      { id: 3, category: 'books', },
      { id: 4, category: 'home', },
      { id: 5, category: 'home', },
      { id: 6, category: 'books', },
    ]
    let needIds = filterByCategory(catalog, 'home').map(cat => cat.id)
    expect(needIds).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const catalog = [
      { id: 1, category: 'electronics', },
      { id: 2, category: 'electronics', },
      { id: 3, category: 'books', },
      { id: 4, category: 'home', },
      { id: 5, category: 'home', },
      { id: 6, category: 'books', },
    ]
    let needIds = filterByCategory(catalog, 'clothes').map(cat => cat.id)
    expect(needIds).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const catalog = [
      { id: 1, category: 'electronics', },
      { id: 2, category: 'electronics', },
      { id: 3, category: 'books', },
      { id: 4, category: 'home', },
      { id: 5, category: 'home', },
      { id: 6, category: 'books', },
    ]
    let needIds = filterByCategory(catalog, 'toys').map(cat => cat.id)
    expect(needIds).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
    const catalog = [
      { id: 1, category: 'electronics', },
      { id: 2, category: 'electronics', },
      { id: 3, category: 'books', },
      { id: 4, category: 'home', },
      { id: 5, category: 'home', },
      { id: 6, category: 'books', },
    ]
    let needIds = filterByCategory(catalog, 'sports').map(cat => cat.id)
    expect(needIds).toEqual([]);
  });
});
