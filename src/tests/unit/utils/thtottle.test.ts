import "@testing-library/jest-dom";
import throttle from "@/utils/throttle";

describe("throttle 함수 단위 테스트", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("처음 throttledFn가 호출되면 콜백함수가 호출된다.", () => {
    const callback = jest.fn();
    const throttledFn = throttle(callback, 500);
    throttledFn();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("wait 인자로 전달된 시간이 지나지 않았다면 이벤트가 다시 발생해도 콜백함수는 호출되지 않는다.", () => {
    const callback = jest.fn();
    const throttledFn = throttle(callback, 500);
    throttledFn();
    throttledFn();

    expect(callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(300);
    throttledFn();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("wait 인자로 전달된 시간이 지난 후 이벤트가 발생했다면 콜백함수가 호출된다.", () => {
    const callback = jest.fn();
    const throttledFn = throttle(callback, 500);
    throttledFn();
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    throttledFn();
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
