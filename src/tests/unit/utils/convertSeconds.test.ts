import "@testing-library/jest-dom";
import convertSeconds from "@/utils/convertSeconds";

describe("convertSeconds 함수 단위 테스트", () => {
  test("입력된 시간 값이 초 단위로 반환된다.", () => {
    expect(convertSeconds({ hours: 2 })).toBe(7200);
  });

  test("입력된 분 값이 초 단위로 반환된다.", () => {
    expect(convertSeconds({ minutes: 45 })).toBe(2700);
  });

  test("입력된 초 값이 초 단위로 반환된다.", () => {
    expect(convertSeconds({ seconds: 120 })).toBe(120);
  });

  test("입력된 시간, 분 값이 초 단위로 반환된다.", () => {
    expect(convertSeconds({ hours: 2, minutes: 45 })).toBe(9900);
  });

  test("입력된 시간, 초 값이 초 단위로 반환된다.", () => {
    expect(convertSeconds({ hours: 1, seconds: 30 })).toBe(3630);
  });

  test("입력된 분, 초 값이 초 단위로 반환된다.", () => {
    expect(convertSeconds({ minutes: 25, seconds: 15 })).toBe(1515);
  });

  test("입력된 시간, 분, 초 값이 초 단위로 반환된다.", () => {
    expect(convertSeconds({ hours: 1, minutes: 30, seconds: 15 })).toBe(5415);
  });

  test("시간, 분, 초 값을 하나도 입력하지 않으면 에러가 반환된다.", () => {
    expect(() => convertSeconds({})).toThrow(
      "seconds, minutes, hours 중 하나 이상의 값을 입력해 주세요"
    );
  });
});
