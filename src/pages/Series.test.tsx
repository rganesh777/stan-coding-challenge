import Series from "./Series";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { mockMediaItems } from "../test/mockMediaItems";

vi.mock("../hooks/useMediaFeed", () => ({
  useMediaFeed: () => ({
    data: mockMediaItems,
    loading: false,
    error: null,
  }),
}));

describe("Series", () => {
  it("renders correctly", async () => {
    render(
      <MemoryRouter>
        <Series />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Rake")).toBeInTheDocument();
    });
  });
});
