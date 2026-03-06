export interface IImage {
  file_path: PathType;
}

export interface IMovieCredits {
  cast: IPerson[];
  crew: IPerson[];
}

export interface IMovieCreditsFormatted {
  cast: IPersonFormatted[];
  crew: IPersonFormatted[];
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
      BR?: {
        flatrate?: IProvider[];
      };
    };
  };
}

export type IMovieDetailsFormatted = Pick<
  IMovieDetails,
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
  credits: IMovieCreditsFormatted;
  flatrate: IProviderFormatted[];
  images: {
    backdrops: { url: string | undefined }[];
    posters: { url: string | undefined }[];
  };
  letterboxdURI: IMovieLoggedFormatted["letterboxdURI"];
  rating: IMovieLoggedFormatted["rating"];
  recommendations: IMovieRecommendationFormatted[];
  release_year: string;
  revenue: string;
  tmdbURI: string;
};

export interface IMovieLogged {
  Date: string;
  "Letterboxd URI": string;
  Name: string | number;
  Rating: number;
  Year: number;
  "Watched Date"?: string;
}

export interface IMovieLoggedFormatted {
  date: IMovieLogged["Date"];
  dateFormatted: string;
  id: string;
  letterboxdURI: IMovieLogged["Letterboxd URI"];
  name: string;
  rating: IMovieLogged["Rating"];
  watchedDate?: IMovieLogged["Watched Date"];
  watchedDateFormatted?: string;
  year: IMovieLogged["Year"];
}

export interface IMovieRecommendationFormatted {
  id: IMovieDetails["id"];
  poster_url?: string;
  title: IMovieDetails["title"];
  tmdbURI: string;
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

export type IPersonFormatted = Pick<
  IPerson,
  "character" | "id" | "name" | "popularity"
> & {
  job: (string | undefined)[];
  order: number;
  profile_url: string | undefined;
  tmdbURI: string;
};

export interface IProvider {
  display_priority: number;
  logo_path: PathType;
  provider_id: number;
  provider_name: string;
}

type IProviderFormatted = Pick<IProvider, "provider_name"> & {
  logo_url?: string;
};

export interface IRandomMovie {
  letterboxdURI: string;
  name: string;
  poster_path: PathType;
}

export interface IRandomMovieFormatted extends IRandomMovie {
  movie_path: string;
  poster_url: string | undefined;
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
