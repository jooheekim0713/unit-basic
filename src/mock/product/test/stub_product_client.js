class StubProductClient {
  //네트워크에 절대 의존하지 않는 stub코드를 작성한다.
  //stub : 상태검증 메소드 수행 후 객체의 상태 즉, return 값을 확인하여 동작의 상태를 검증
  //mock : 행위검증 메소드 수행 후 상태로 검증이 어려운 경우, 특정 동작의 수행 여부를 통해 검증
  async fetchItems() {
    return [
      { item: 'Milk', available: true },
      { item: 'banana', available: false },
    ];
  }
}

module.exports = StubProductClient;
