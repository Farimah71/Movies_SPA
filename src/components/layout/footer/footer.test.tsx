import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Footer Component", () => {
test("renders footer text", () => {
render(
<Router>
<Footer />
</Router>
);
expect(screen.getByText("Developed By")).toBeInTheDocument();
});
    
test('renders the developer link', () => {
render(
<Router>
<Footer />
</Router>
);
const linkElement = screen.getByText('Farimah');
expect(linkElement).toBeInTheDocument();
expect(linkElement.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/farimah-fti');
});

test('applies the correct class to the link', () => {
render(
<Router>
<Footer />
</Router>
);
const linkElement = screen.getByText('Farimah');
expect(linkElement).toHaveClass('footer-link');
});

test('link opens in a new tab', () => {
render(
<Router>
<Footer />
</Router>
);
const linkElement = screen.getByText('Farimah');
expect(linkElement.closest('a')).toHaveAttribute('target', '_blank');
expect(linkElement.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
});
    
});
