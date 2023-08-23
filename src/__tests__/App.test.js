import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Import the About component
import About from "../components/About";

test("renders the h2 with the text 'About Me'", () => {
  render(<About bio="My bio text goes here" />);
  expect(screen.getByText("About Me")).toBeInTheDocument();
});

test("displays the provided bio in a <p> element", () => {
  render(<About bio="My bio text goes here" />);
  expect(screen.getByText("My bio text goes here")).toBeInTheDocument();
});

test("displays the Links component with the correct prop values", () => {
  render(
    <About
      bio="My bio text goes here"
    />
  );

  // Check if the Links component is rendered with the correct props
  expect(screen.getByText("https://github.com/liza")).toBeInTheDocument();
  expect(screen.getByText("https://linkedin.com/in/liza/")).toBeInTheDocument();
});
