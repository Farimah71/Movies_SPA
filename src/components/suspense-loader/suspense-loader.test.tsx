import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { SuspenseLoader } from "./suspense-loader";

describe("SuspenseLoader Component", () => {

test("renders suspense loader with loading text", () => {
render(<SuspenseLoader />);
expect(screen.getByText("Loading...")).toBeInTheDocument();
});
    
test("renders Suspense loader with loading icon", () => {
render(<SuspenseLoader />);
expect(screen.getByTestId("suspense-icon")).toBeInTheDocument()
});
    
});
