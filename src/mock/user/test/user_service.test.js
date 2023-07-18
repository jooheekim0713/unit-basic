const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

//특정한 상황에 함수를 호출하는지 안하는지 확인할때는 mock을 사용한다.

describe('UserService', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return { login };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('123', '123');
    expect(login.mock.calls.length).toBe(1);
  });

  it('should not call login() on UserClietn again if already logged in', async () => {
    await userService.login('123', '123');
    await userService.login('123', '123');

    expect(login.mock.calls.length).toBe(1);
  });
});
