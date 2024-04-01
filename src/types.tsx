interface PosterArt {
  url: string;
  width: number;
  height: number;
}

interface Image {
  "Poster Art": PosterArt;
}

export interface Entry {
  title: string;
  description: string;
  programType: string;
  images: Image;
  releaseYear: number;
}

export interface ApiResponse {
  total: number;
  entries: Entry[];
}
