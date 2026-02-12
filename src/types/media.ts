export type ProgramType = "series" | "movie";

export type MediaItem = {
  description?: string;
  title: string;
  programType: ProgramType;
  releaseYear: number;
  images: {
    "Poster Art": {
      url: string;
    };
  };
};

export type MediaFeed = {
  entries: MediaItem[];
};
