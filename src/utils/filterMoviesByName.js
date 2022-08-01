const filterMoviesByName = (movieList, value) =>
  movieList.filter((movie) => {
    const movieName = movie.Name.toLowerCase();
    return movieName.includes(value.toLowerCase());
  });

export default filterMoviesByName;
