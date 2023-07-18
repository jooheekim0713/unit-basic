const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');
jest.mock('../product_client');

//코드가 얽혀있을 경우 테스트를 위한 방법

//테스트 작성 의도 : ProductService class 테스트
//문제 : ProductService에서 테스트하려는 기능이
//다른 클래스, 모듈과 연결되어있어 개별적인 코드 테스트가 어려워짐
//해결방법 : 따라서 연결되어있는 함수를 mock함수, mockImplementation로 대신해서
//ProductClient에서 데이터가 제대로 받아왔을 경우를 모방해 테스트한다.

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'Milk', available: true },
    { item: 'banana', available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    //jest.config.js > clearMocks > false라면 mock함수가 여러번 불리기 때문에
    //중복되는 함수를 부를경우 기존의 데이터가 남아있을 수 있다.
    //따라서 jest.config.js > clearMocks > true 로 설정하고 밑의 코드를 작성하지 않거나
    //jest.config.js > clearMocks > false 로 설정하고 아래의 코드를 작성해서 mock함수를 clear해줘야한다.
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it('it should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'Milk', available: true }]);
  });
});
