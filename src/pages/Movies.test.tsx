import Movies from "./Movies";
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

describe("Movies", () => {
  it("renders correctly", async () => {
    render(
      <MemoryRouter>
        <Movies />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("No Activity: The Night Before Christmas")
      ).toBeInTheDocument();
    });
  });
});
