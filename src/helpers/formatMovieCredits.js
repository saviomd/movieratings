const formatMovieCredits = ({ credits }) => ({
  ...credits,
  cast: credits?.cast.map((person) => ({
    ...person,
    tmdbURI: `https://www.themoviedb.org/person/${person.id}`,
  })),
  crew: credits?.crew.map((person) => ({
    ...person,
    tmdbURI: `https://www.themoviedb.org/person/${person.id}`,
  })),
});

export default formatMovieCredits;
