import { useMediaFeed, clearMediaCache } from "./useMediaFeed";
import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
  type Mock,
} from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { mockMediaItems } from "../test/mockMediaItems";

beforeEach(() => {
  clearMediaCache();
  vi.spyOn(globalThis, "fetch").mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          total: 4,
          entries: mockMediaItems,
        }),
    } as Response)
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useMediaFeed", () => {
  it("fetches and returns data", async () => {
    const { result } = renderHook(() => useMediaFeed());

    // loading state
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBeNull();

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual(mockMediaItems);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("handles fetch error", async () => {
    (globalThis.fetch as unknown as Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        json: () => Promise.resolve({}),
      } as unknown as Response)
    );

    const { result } = renderHook(() => useMediaFeed());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBe("Oops, Something went wrong...");
  });
});
