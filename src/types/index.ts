export interface IImage {
  file_path: PathType;
}

export interface IMovieCredits {
  cast: IPerson[];
  crew: IPerson[];
}

export interface IMovieDetails {
  alternative_titles: {
    titles: {
      iso_3166_1: string;
      title: string;
    }[];
  };
  budget?: number;
  credits: IMovieCredits;
  genres: {
    name: string;
  }[];
  id: number;
  images: {
    backdrops: IImage[];
    posters: IImage[];
  };
  original_language: string;
  original_title?: string;
  overview?: string;
  poster_path: PathType;
  production_companies: {
    name: string;
  }[];
  production_countries: {
    name: string;
  }[];
  recommendations: {
    results: IMovieDetails[];
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
      BR: {
        flatrate: IProvider[];
      };
    };
  };
}

export interface IMovieLogged {
  Date: string;
  LetterboxdURI: string;
  Name: string;
  Rating: number;
  Year: number;
  WatchedDate?: string;
}

export interface IMovieLoggedFormatted extends IMovieLogged {
  DateFormatted: string;
  Id: string;
  WatchedDate?: string;
  WatchedDateFormatted?: string;
}

export interface IPerson {
  character?: string;
  id: number;
  job?: string;
  name: string;
  order?: number;
  popularity: number;
  profile_path: PathType;
}

export interface IProvider {
  display_priority: number;
  logo_path: PathType;
  provider_id: number;
  provider_name: string;
}

export type DataStatusType = "error" | "pending" | "success";

export type ImgType = "backdrop" | "logo" | "poster" | "profile";

export type MessageType =
  | "error"
  | "noData"
  | "noMovies"
  | "noStats"
  | "pageNotFound"
  | "pending";

export type MovieType = "Diary" | "Ratings";

export type PathType = string;
