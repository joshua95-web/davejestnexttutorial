import Calculator from "@/app/Calculator/page";
import { render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("should render a calculator and its buttons", () => {
    render(<Calculator />);

    const addButton = screen.getByText("Add");
    const subtractButton = screen.getByText("Subtract");
    const multiplyButton = screen.getByText("Multiply");
    const divideButton = screen.getByText("Divide");
    expect(addButton).toBeInTheDocument();
    expect(subtractButton).toBeInTheDocument();
    expect(multiplyButton).toBeInTheDocument();
    expect(divideButton).toBeInTheDocument();
  });
});
