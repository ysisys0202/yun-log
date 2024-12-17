import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { colorVars } from "@/constants/cssVariables";
import SkeletonComponent from "@/components/common/Skeleton";
describe("Skeleton 컴포넌트 단위 테스트", () => {
  const defaultProps = {
    width: "100%",
    height: "100%",
    borderColor: "transparent",
  };
  test("props를 전달하지 않으면 default props가 적용된다.", () => {
    render(<SkeletonComponent data-testid="skeleton" />);

    const Skeleton = screen.getByTestId("skeleton");

    expect(Skeleton).toHaveStyle({
      width: "100%",
      height: "100%",
      borderColor: "transparent",
    });
  });

  test("width prop으로 전달한 너비가 적용된다.", () => {
    render(<SkeletonComponent width="100px" data-testid="skeleton" />);

    const Skeleton = screen.getByTestId("skeleton");

    expect(Skeleton).toHaveStyle({
      width: "100px",
    });
  });

  test("height prop으로 전달한 높이가 적용된다.", () => {
    render(<SkeletonComponent height="100px" data-testid="skeleton" />);

    const Skeleton = screen.getByTestId("skeleton");

    expect(Skeleton).toHaveStyle({
      height: "100px",
    });
  });

  // test("className prop으로 전달한 class 이름이 적용된다.", () => {
  //   render(<SkeletonComponent className="skeleton" data-testid="skeleton" />);

  //   const Skeleton = screen.getByTestId("Skeleton");

  //   expect(Skeleton).toHaveClass("skeleton");
  // });
});
