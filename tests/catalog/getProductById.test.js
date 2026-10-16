const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('ID 1 возвращает products[0]', () => {
    let needIds = getProductById(products, 1)
    expect(needIds).toEqual(products[0])
  });

  test('ID 4 возвращает products[3]', () => {
    let needIds = getProductById(products, 4)
    expect(needIds).toEqual(products[3])
  });

  test('ID 6 возвращает products[5]', () => {
    let needIds = getProductById(products, 6)
    expect(needIds).toEqual(products[5])
  });

  test('ID 0 возвращает null', () => {
    let needIds = getProductById(products, 0)
    expect(needIds).toEqual(null)
  });

  test('ID 999 возвращает null', () => {
    let needIds = getProductById(products, 999)
    expect(needIds).toEqual(null)
  });

  test('ID -1 возвращает null', () => {
    let needIds = getProductById(products, -1)
    expect(needIds).toEqual(null)
  });

  test("строковый ID '1' возвращает null", () => {
    let needIds = getProductById(products, '1')
    expect(needIds).toEqual(null)
  });

  test('ID undefined возвращает null', () => {
    let needIds = getProductById(products, undefined)
    expect(needIds).toEqual(null)
  });

  test('ID NaN возвращает null', () => {
    let needIds = getProductById(products, NaN)
    expect(needIds).toEqual(null)
  });
});
