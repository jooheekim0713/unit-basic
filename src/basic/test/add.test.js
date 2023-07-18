const add = require('../../add.js');

test('1 add 2 tobe 3', () => {
  //테스트 코드 작성
  //introduction> using matchers 자료 참고
  expect(add(1, 2)).toBe(3);
});
