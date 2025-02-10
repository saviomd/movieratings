import type { ImgType, PathType } from "src/types";

interface IImgMethod {
  path: PathType;
}

interface IImgUrl {
  path: PathType;
  type: ImgType;
}

const imgUrl = ({ path, type }: IImgUrl): string | undefined => {
  const types = {
    backdrop: "w1280",
    logo: "w500",
    poster: "w780",
    profile: "h632",
  };
  return path && type
    ? `https://image.tmdb.org/t/p/${types[type]}${path}`
    : undefined;
};

const tmdbApi = {
  img: {
    attribution: () =>
      "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
    backdrop: ({ path }: IImgMethod) => imgUrl({ path, type: "backdrop" }),
    logo: ({ path }: IImgMethod) => imgUrl({ path, type: "logo" }),
    poster: ({ path }: IImgMethod) => imgUrl({ path, type: "poster" }),
    profile: ({ path }: IImgMethod) => imgUrl({ path, type: "profile" }),
  },
  key: "6f875d4fba2e999f480afa6275a08f75",
  url: "https://api.themoviedb.org/3/",
};

export default tmdbApi;
