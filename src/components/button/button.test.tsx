import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button Component", () => {
  test("renders button with title", () => {
    render(<Button title="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("applies additional class names", () => {
    render(<Button title="Click" className="extra-class" />);
    expect(screen.getByRole("button")).toHaveClass("extra-class");
  });

  test("passes additional props to button element", () => {
    render(<Button title="Click" data-testid="custom-button" />);
    expect(screen.getByTestId("custom-button")).toBeInTheDocument();
  });

  test("triggers onChange event when clicked", () => {
    const handleClick = jest.fn();
    render(<Button title="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
