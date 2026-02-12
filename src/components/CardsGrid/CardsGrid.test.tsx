import MediaCard from ".";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("MediaCard", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <MediaCard>
          <div>Grid Children</div>
        </MediaCard>
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.getByText(/Grid Children/i)).toBeInTheDocument();
  });
});
