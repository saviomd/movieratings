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
  backdrop_path: PathType;
  budget?: number;
  credits: IMovieCredits;
  flatrate: IProvider[];
  id: number;
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

export type AnchorTargetType = "_blank" | "_parent" | "_self" | "_top";

export type DataStatusType = "" | "error" | "loading" | "loaded";

export type ImgType = "backdrop" | "logo" | "poster" | "profile";

export type MessageType =
  | "error"
  | "loading"
  | "noData"
  | "noMovies"
  | "noStats"
  | "pageNotFound";

export type PathType = string;
