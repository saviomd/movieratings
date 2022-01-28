import { useMemo, useReducer } from "react";

const initialState = {
  movieDiary: [],
  movieDiaryPage: 1,
  movieDiarySearchString: "",
  movieDiaryStatus: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setMovieDiary":
      return {
        ...state,
        movieDiary: action.payload,
        movieDiaryStatus: "loaded",
      };
    case "setMovieDiaryPage":
      return { ...state, movieDiaryPage: state.movieDiaryPage + 1 };
    case "setMovieDiarySearchString":
      return { ...state, movieDiarySearchString: action.payload.toLowerCase() };
    case "setMovieDiaryStatus":
      return { ...state, movieDiaryStatus: action.payload };
    default:
      throw new Error();
  }
}

const useMovieDetailsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatcher = useMemo(
    () => ({
      setMovieDiary: (payload) => dispatch({ type: "setMovieDiary", payload }),
      setMovieDiaryPage: () => dispatch({ type: "setMovieDiaryPage" }),
      setMovieDiarySearchString: (payload) =>
        dispatch({ type: "setMovieDiarySearchString", payload }),
      setMovieDiaryStatus: (payload) =>
        dispatch({ type: "setMovieDiaryStatus", payload }),
    }),
    []
  );

  return { dispatcher, state };
};

export default useMovieDetailsStore;
