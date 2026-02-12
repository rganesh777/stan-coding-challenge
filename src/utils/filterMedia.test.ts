import { filterMedia } from "./filterMedia";
import { describe, it, expect } from "vitest";
import { mockMediaItems } from "../test/mockMediaItems";

describe("filterMedia", () => {
  it("filters, sorts, and limits media items correctly", () => {
    const filteredMedia = filterMedia(mockMediaItems, "series");
    expect(filteredMedia).toHaveLength(2);
    expect(filteredMedia[0].title).toBe("Rake");
    expect(filteredMedia[1].title).toBe("The Resort");
  });
});
