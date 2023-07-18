const fetchProduct = require('../../async.js');

describe('Async', () => {
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  //보통은 done보다 return, await방식을 더 많이 사용한다.
  //return을 수행하면 즉각적으로 확인가능, 더 빠르게 수행됨
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });
  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
