import TitleCard from ".";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("TitleCard", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <TitleCard title="Series" link="/series" />
      </MemoryRouter>
    );
    const titleCardLink = screen.getByRole("link", { name: /popular series/i });
    expect(titleCardLink).toBeInTheDocument();
  });
});
