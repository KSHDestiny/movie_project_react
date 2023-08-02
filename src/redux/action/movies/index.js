import { ActionType } from "../action-types";

export const fetchMovies = (movies) => {
  // console.log(movies);
  return {
    type: ActionType.FETCH_MOIVES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ActionType.SELECT_MOVIE,
    payload: movie,
  };
};
