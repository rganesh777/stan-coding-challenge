import type { MediaItem, ProgramType } from "../types/media";

// Filters media items by program type and release year, sorts them alphabetically, and limits to 21 items
export const filterMedia = (data: MediaItem[], type: ProgramType) =>
  data
    .filter((item) => item.programType === type && item.releaseYear >= 2010)
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 21);
