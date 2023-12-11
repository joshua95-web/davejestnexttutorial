import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

// Tests are written in triple A: Arrange -> Act -> Assert
describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />); // ARRANGE - The home component should have Docs text in it

    const myElem = screen.getByText("Docs"); // ACT - Taking an action to test that

    expect(myElem).toBeInTheDocument(); //ASSERT - checking our assertion was true
  });
  it("should contain the text 'information' text", () => {
    render(<Home />); // ARRANGE - The home component should have Docs text in it

    const myElem = screen.getByText(/information/); // ACT - Taking an action to test that (this time using regex to find the text)

    expect(myElem).toBeInTheDocument(); //ASSERT - checking our assertion was true
  });
  it("should have a heading", () => {
    render(<Home />); // ARRANGE - The home component should have Docs text in it

    const myElem = screen.getByRole("heading", {
      name: "Learn",
    }); // ACT - Taking an action to test that

    expect(myElem).toBeInTheDocument(); //ASSERT - checking our assertion was true
  });
});
