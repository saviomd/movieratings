const formatMovieCredits = (movieCredits) => ({
  ...movieCredits,
  cast: movieCredits.cast.map((person) => ({
    ...person,
    tmdbURI: `https://www.themoviedb.org/person/${person.id}`,
  })),
  crew: movieCredits.crew.map((person) => ({
    ...person,
    tmdbURI: `https://www.themoviedb.org/person/${person.id}`,
  })),
});

export default formatMovieCredits;
