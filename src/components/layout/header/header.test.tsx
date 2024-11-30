import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("renders header with title", () => {
    render(<Header title="My header" />);
    expect(screen.getByText("My header")).toBeInTheDocument();
  });

  test("applies correct class to header wrapper", () => {
    render(<Header title="My header" />);
    expect(screen.getByText("My header").parentElement).toHaveClass(
      "header-wrapper"
    );
  });

  test("applies correct class to header title", () => {
    render(<Header title="My header" />);
    expect(screen.getByText("My header")).toHaveClass("header-title");
  });
});
