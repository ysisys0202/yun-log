import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { colorVars } from "@/constants/cssVariables";
import Divider from "@/components/common/Divider";

describe("Divider 컴포넌트 단위 테스트", () => {
  const defaultProps = {
    width: "100%",
    height: "1px",
    color: colorVars.border,
  };

  test("props를 전달하지 않으면 default props가 적용된다.", () => {
    render(<Divider />);

    const divider = screen.getByTestId("divider");

    expect(divider).toHaveStyle({
      width: "100%",
      height: "1px",
      backgroundColor: colorVars.border,
    });
  });

  test("color prop으로 전달한 색상이 적용된다.", () => {
    render(<Divider color="ff00ff" />);

    const divider = screen.getByTestId("divider");

    expect(divider).toHaveStyle({
      backgroundColor: "ff00ff",
    });
  });

  test("width prop으로 전달한 너비가 적용된다.", () => {
    render(<Divider width="100px" />);

    const divider = screen.getByTestId("divider");

    expect(divider).toHaveStyle({
      width: "100px",
    });
  });

  test("height prop으로 전달한 높이가 적용된다.", () => {
    render(<Divider height="5px" />);

    const divider = screen.getByTestId("divider");

    expect(divider).toHaveStyle({
      height: "5px",
    });
  });

  test("className prop으로 전달한 class 이름이 적용된다.", () => {
    render(<Divider className="divider" />);

    const divider = screen.getByTestId("divider");

    expect(divider).toBeInTheDocument();
  });
});
