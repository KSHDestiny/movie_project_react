import { combineReducers } from "redux";
import { movieReducer } from "./movie";

const reducers = combineReducers({
  movie: movieReducer,
});

export default reducers;
