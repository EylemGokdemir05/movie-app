const movieReducer = (state = [], action) => {
  console.log('reducer state: ',state)
  console.log('reducer action: ',action)
  switch (action.type) {
    case "GET_MOVIES":
      return [...action.movies];
    case "UPDATE_MOVIE":
      return state.map((movie) =>
      movie.imdbID === action.id ? { ...movie, ...action.update } : movie
      );
    default:
      return state;
  }
};

export default movieReducer;
