import mockRouter from "next-router-mock";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { RecoilRoot } from "recoil";
import Error from "@/container/layouts/Error";

describe("에러 페이지 단위 테스트", () => {
  test("'앗, 에러가 발생했습니다!' 텍스트가 노출된다.", () => {
    render(
      <RecoilRoot>
        <Error />
      </RecoilRoot>
    );
    const message = screen.getByText("앗, 에러가 발생했습니다!");
    expect(message).toBeInTheDocument();
  });

  test("'홈으로 돌아가기' 버튼을 클릭하면 '/' 경로로 navigate 함수가 호출된다.", async () => {
    jest.mock(
      "next/dist/shared/lib/router-context",
      () =>
        jest.requireActual(
          "next/dist/shared/lib/router-context.shared-runtime"
        ),
      { virtual: true }
    );

    render(
      <RecoilRoot>
        <MemoryRouterProvider>
          <Error />
        </MemoryRouterProvider>
      </RecoilRoot>
    );

    const button = screen.getByText("홈으로 돌아가기");
    const user = userEvent.setup();
    await user.click(button);
    expect(mockRouter.asPath).toEqual("/");
  });
});
