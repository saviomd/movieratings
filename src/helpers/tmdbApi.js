const tmdbApi = {
  img: {
    attributionUrl:
      "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
    baseUrl: "https://image.tmdb.org/t/p/",
    backdropSize: "w1280",
    fallbackUrl:
      "https://www.themoviedb.org/assets/1/v4/logos/293x302-powered-by-square-blue-ee05c47ab249273a6f9f1dcafec63daba386ca30544567629deb1809395d8516.png",
    posterSize: "w780",
  },
  key: "6f875d4fba2e999f480afa6275a08f75",
  methods: {
    movieCredits: ({ movieId }) => `movie/${movieId}/credits`,
    movieRecommendations: ({ movieId }) => `movie/${movieId}/recommendations`,
    searchMovies: () => "search/movie",
  },
  url: "https://api.themoviedb.org/3/",
};

export default tmdbApi;
