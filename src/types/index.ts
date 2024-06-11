export interface IAlternativeTitle {
  iso_3166_1: string;
  title: string;
}

export interface IAlternativeTitles {
  titles: IAlternativeTitle[];
}

export interface IImage {
  file_path: PathType;
}

export interface IMovie {
  Id: string;
  Date: string;
  DateFormatted: string;
  LetterboxdURI: string;
  Name: string;
  Rating: number;
  WatchedDate?: string;
  WatchedDateFormatted?: string;
  Year: number;
}

export interface IMovieCredits {
  cast: IPerson[];
  crew: IPerson[];
}

export interface IMovieDetails {
  alternative_titles: IAlternativeTitles;
  budget?: number;
  credits: IMovieCredits;
  flatrate: IProvider[];
  id: number;
  images: {
    backdrops: IImage[];
    posters: IImage[];
  };
  original_language: string;
  poster_path: PathType;
  recommendations: {
    results: IMovieDetails[];
  };
  release_date: string;
  revenue?: number;
  title: string;
  "watch/providers": {
    results: {
      BR: {
        flatrate: IProvider[];
      };
    };
  };
}

export interface IPerson {
  character: string;
  id: number;
  job?: string | string[];
  name: string;
  order: number;
  popularity: number;
  profile_path: PathType;
  profile_url: string;
  tmdbURI: string;
}

export interface IProvider {
  display_priority: number;
  logo_path: PathType;
  Iprovider_id: number;
  Iprovider_name: string;
}

export interface IRandomMovie {
  Id: string;
  LetterboxdURI: string;
  Name: string;
  poster_path: PathType;
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

export type PathType = string;
