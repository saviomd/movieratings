export type DataStatus = "error" | "pending" | "success";

export interface Image {
  file_path: Path;
}

export type ImgType = "backdrop" | "logo" | "poster" | "profile";

export type MessageType =
  | "error"
  | "noData"
  | "noMovies"
  | "noStats"
  | "pageNotFound"
  | "pending";

export interface MovieCredits {
  cast: Person[];
  crew: Person[];
}

export interface MovieCreditsFormatted {
  cast: PersonFormatted[];
  crew: PersonFormatted[];
}

export interface MovieDetails {
  alternative_titles: {
    titles: {
      iso_3166_1: string;
      title: string;
    }[];
  };
  budget?: number;
  credits: MovieCredits;
  genres: {
    name: string;
  }[];
  id: number;
  images: {
    backdrops: Image[];
    posters: Image[];
  };
  original_language: string;
  original_title?: string;
  overview?: string;
  poster_path: Path;
  production_companies: {
    name: string;
  }[];
  production_countries: {
    name: string;
  }[];
  recommendations: {
    results: MovieDetails[];
  };
  release_date: string;
  revenue?: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
  }[];
  tagline?: string;
  title: string;
  vote_average: number;
  vote_count: number;
  "watch/providers": {
    results: {
      BR?: {
        flatrate?: Provider[];
      };
    };
  };
}

export type MovieDetailsFormatted = Pick<
  MovieDetails,
  | "genres"
  | "original_title"
  | "overview"
  | "production_companies"
  | "production_countries"
  | "release_date"
  | "runtime"
  | "spoken_languages"
  | "tagline"
  | "title"
  | "vote_average"
  | "vote_count"
> & {
  br_title: string | undefined;
  budget: string;
  credits: MovieCreditsFormatted;
  flatrate: ProviderFormatted[];
  images: {
    backdrops: { url: string | undefined }[];
    posters: { url: string | undefined }[];
  };
  letterboxdURI: MovieLoggedFormatted["letterboxdURI"];
  rating: MovieLoggedFormatted["rating"];
  recommendations: MovieRecommendationFormatted[];
  release_year: string;
  revenue: string;
  tmdbURI: string;
};

export interface MovieLogged {
  Date: string;
  "Letterboxd URI": string;
  Name: string | number;
  Rating: number;
  Year: number;
  "Watched Date"?: string;
}

export interface MovieLoggedFormatted {
  date: MovieLogged["Date"];
  dateFormatted: string;
  id: string;
  letterboxdURI: MovieLogged["Letterboxd URI"];
  name: string;
  rating: MovieLogged["Rating"];
  watchedDate?: MovieLogged["Watched Date"];
  watchedDateFormatted?: string;
  year: MovieLogged["Year"];
}

export interface MovieRecommendationFormatted {
  id: MovieDetails["id"];
  poster_url?: string;
  title: MovieDetails["title"];
  tmdbURI: string;
}

export type MovieType = "Diary" | "Ratings";

export type Path = string;

export interface Person {
  character?: string;
  id: number;
  job?: string;
  name: string;
  order?: number;
  popularity: number;
  profile_path: Path;
}

export type PersonFormatted = Pick<
  Person,
  "character" | "id" | "name" | "popularity"
> & {
  job: (string | undefined)[];
  order: number;
  profile_url: string | undefined;
  tmdbURI: string;
};

export interface Provider {
  display_priority: number;
  logo_path: Path;
  provider_id: number;
  provider_name: string;
}

type ProviderFormatted = Pick<Provider, "provider_name"> & {
  logo_url?: string;
};

export interface RandomMovie {
  letterboxdURI: string;
  name: string;
  poster_path: Path;
}

export interface RandomMovieFormatted extends RandomMovie {
  movie_path: string;
  poster_url: string | undefined;
}
