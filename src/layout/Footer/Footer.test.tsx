import Footer from ".";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  const renderFooter = () =>
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

  it("renders correctly", () => {
    const { container } = renderFooter();
    expect(container).toMatchSnapshot();
  });

  it("renders footer links", () => {
    renderFooter();
    const footerLink = screen.getAllByRole("link", {
      name: /terms and conditions/i,
    });
    expect(footerLink).toHaveLength(1);
  });

  it("renders social links", () => {
    renderFooter();
    const socialLink = screen.getAllByRole("link", {
      name: /facebook/i,
    });
    expect(socialLink).toHaveLength(1);
  });

  it("renders app store links", () => {
    renderFooter();
    const appStoreLink = screen.getAllByRole("link", {
      name: /app store/i,
    });
    expect(appStoreLink).toHaveLength(1);
  });
});
