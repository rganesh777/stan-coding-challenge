import Header from ".";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the correct title based on the route", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/movies"]}>
        <Header />
      </MemoryRouter>
    );
    expect(getByText("Popular Movies")).toBeInTheDocument();
  });

  it("renders the default title when route is not found", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <Header />
      </MemoryRouter>
    );
    expect(getByText("Popular Titles")).toBeInTheDocument();
  });
});
