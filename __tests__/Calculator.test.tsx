import Calculator from "@/app/Calculator/page";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

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
  it("adds numbers", async () => {
    render(<Calculator />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: "5" } });
    fireEvent.change(num2input, { target: { value: "8" } });
    addButton.click();
    await waitFor(() => {
      expect(resultArea).toHaveTextContent("13");
    });
  });
  it("subtracts numbers", async () => {
    render(<Calculator />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const subtractButton = screen.getByTestId("subtract");
    const resultArea = screen.getByTestId("result");
    fireEvent.change(num1input, { target: { value: "8" } });
    fireEvent.change(num2input, { target: { value: "5" } });
    subtractButton.click();
    await waitFor(() => {});
    expect(resultArea).toHaveTextContent("3");
  });
});
