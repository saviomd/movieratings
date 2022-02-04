import { useMemo, useReducer } from "react";

const initialState = {
  movieDiary: [],
  movieDiaryPage: 1,
  movieDiarySearchString: "",
  movieDiaryStatus: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_MOVIE_DIARY":
      return {
        ...state,
        movieDiary: payload,
        movieDiaryStatus: "loaded",
      };
    case "SET_MOVIE_DIARY_PAGE":
      return { ...state, movieDiaryPage: state.movieDiaryPage + 1 };
    case "SET_MOVIE_DIARY_SEARCH_STRING":
      return { ...state, movieDiarySearchString: payload.toLowerCase() };
    case "SET_MOVIE_DIARY_STATUS":
      return { ...state, movieDiaryStatus: payload };
    default:
      throw new Error();
  }
}

const useMovieDetailsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatcher = useMemo(
    () => ({
      setMovieDiary: (payload) =>
        dispatch({ type: "SET_MOVIE_DIARY", payload }),
      setMovieDiaryPage: () => dispatch({ type: "SET_MOVIE_DIARY_PAGE" }),
      setMovieDiarySearchString: (payload) =>
        dispatch({ type: "SET_MOVIE_DIARY_SEARCH_STRING", payload }),
      setMovieDiaryStatus: (payload) =>
        dispatch({ type: "SET_MOVIE_DIARY_STATUS", payload }),
    }),
    []
  );

  return { dispatcher, state };
};

export default useMovieDetailsStore;
