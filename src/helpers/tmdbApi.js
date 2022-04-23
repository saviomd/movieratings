const imgUrl = ({ path, type }) => {
  const types = {
    backdrop: "w1280",
    poster: "w780",
    profile: "w185",
  };
  return path ? `https://image.tmdb.org/t/p/${types[type] + path}` : null;
};

const tmdbApi = {
  img: {
    attribution: () =>
      "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
    backdrop: ({ path }) => imgUrl({ path, type: "backdrop" }),
    poster: ({ path }) => imgUrl({ path, type: "poster" }),
    profile: ({ path }) => imgUrl({ path, type: "profile" }),
  },
  key: "6f875d4fba2e999f480afa6275a08f75",
  methods: {
    movieDetails: ({ movieId }) => `movie/${movieId}`,
    searchMovies: () => "search/movie",
  },
  url: "https://api.themoviedb.org/3/",
};

export default tmdbApi;
