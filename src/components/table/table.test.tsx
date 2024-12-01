import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MyTableProps } from "./table.types";
import { MyTable } from "./table";

describe("MyTable component", () => {
  const defaultProps: MyTableProps = {
    dataSource: [{ key: "1", name: "John Doe" }],
    columns: [{ title: "Name", dataIndex: "name", key: "name" }],
    searchLoading: false,
    pageSize: 10,
    totalCount: 1,
    currentPage: 1,
    searchColumn: "name",
    onChangeHandler: jest.fn(),
    onSearchHandler: jest.fn(),
  };

  it("renders the table with data", () => {
    render(<MyTable {...defaultProps} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders the search input with placeholder", () => {
    render(<MyTable {...defaultProps} />);
    expect(
      screen.getByPlaceholderText("Search by name...")
    ).toBeInTheDocument();
  });

  it("calls onSearchHandler when search input changes", () => {
    render(<MyTable {...defaultProps} />);
    const searchInput = screen.getByPlaceholderText("Search by name...");
    fireEvent.change(searchInput, { target: { value: "Jane" } });
    expect(defaultProps.onSearchHandler).toHaveBeenCalledWith("Jane");
  });

  it("displays total count correctly", () => {
    render(<MyTable {...defaultProps} />);
    expect(screen.getByText("total:")).toBeInTheDocument();
    expect(screen.getByText("1 item")).toBeInTheDocument();
  });
});
