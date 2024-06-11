import MovieDetails from "./MovieDetails";
import { MovieDetailsContextMock } from "src/contexts/MovieDetailsContext";
import { formatMovieDetails } from "src/utils";
import movieDetailsMock from "src/__mocks__/movieDetailsMock";

const movie = {
  Date: "2013-04-25",
  Name: "Batman",
  Year: 1989,
  LetterboxdURI: "https://boxd.it/2aIU",
  Rating: 5,
};

const providerValue = {
  movieDetails: formatMovieDetails({
    movie,
    movieDetails: movieDetailsMock,
  }),
  movieDetailsStatus: "success",
};

const meta = {
  title: "app/MovieDetails",
  component: MovieDetails,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MovieDetailsContextMock.Provider value={providerValue}>
        <Story />
      </MovieDetailsContextMock.Provider>
    ),
  ],
};

export default meta;

export const Default = {
  args: {},
};
