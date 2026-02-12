import MediaCard from ".";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import type { MediaItem } from "../../types/media";

const mediaItem: MediaItem = {
  title: "Rake",
  programType: "series",
  images: {
    "Poster Art": {
      url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
    },
  },
  releaseYear: 2010,
};

describe("MediaCard", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <MediaCard item={mediaItem} />
      </MemoryRouter>
    );
    const mediaCardLink = screen.getByRole("link", { name: /rake/i });
    expect(mediaCardLink).toBeInTheDocument();
    const mediaCardImage = screen.getByRole("img", { name: /rake/i });
    expect(mediaCardImage).toBeInTheDocument();
  });
});
