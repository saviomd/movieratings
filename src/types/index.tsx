export type ImgType = "backdrop" | "logo" | "poster" | "profile";

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

export type PathType = string;

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
