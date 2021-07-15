const formatMovieList = (movieList) => {
  movieList.reverse();
  return movieList.map((movie, index) => ({
    ...movie,
    Id: movie.LetterboxdURI.length
      ? movie.LetterboxdURI.split("boxd.it/")[1]
      : index.toString(),
    Name: movie.Name.toString(),
    DateFormatted: new Date(movie.Date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    ...(movie.WatchedDate && {
      WatchedDateFormatted: new Date(movie.WatchedDate).toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),
    }),
  }));
};

export default formatMovieList;
