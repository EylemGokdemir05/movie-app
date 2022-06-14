import { createStore, combineReducers } from "redux";
import movieReducer from "../reducers/movieReducer";
import filterReducer from "../reducers/filterReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      movies: movieReducer,
      filters: filterReducer,
    })
  );
  return store;
};

export default configureStore;
