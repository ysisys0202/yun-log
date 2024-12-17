import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button, { ButtonProps } from "@/components/common/Button";

describe("Button 컴포넌트 단위 테스트", () => {
  const defaultProps: ButtonProps = {
    children: "버튼",
    variant: "outlined",
    size: "md",
    textColor: "#000",
    backgroundColor: "#fff",
    borderColor: "#ddd",
  };

  it("children으로 전달된 텍스트가 노출된다.", () => {
    render(<Button>버튼</Button>);

    const button = screen.getByRole("button", { name: "버튼" });

    expect(button).toBeInTheDocument();
  });

  it("클릭하면 onClick prop으로 전달된 함수가 호출된다.", async () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>클릭</Button>);

    const button = screen.getByRole("button", { name: "클릭" });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
