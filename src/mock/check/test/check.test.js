const check = require('../check');

describe('check', () => {
  let onSucess;
  let onFail;

  beforeEach(() => {
    onSucess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSucess when predicate is true', () => {
    check(() => true, onSucess, onFail);
    //expect(onSucess.mock.calls.length).toBe(1);
    expect(onSucess).toHaveBeenCalledTimes(1);
    //expect(onSucess.mock.calls[0][0]).toBe('yes');
    expect(onSucess).toHaveBeenCalledWith('yes');
    //expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSucess, onFail);
    expect(onSucess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onFail).toHaveBeenCalledTimes(1);
  });
});
