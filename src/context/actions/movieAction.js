export const getMovies = (movies = []) => ({
  type: "GET_MOVIES",
  movies,
});

export const updateMovie = (id = "", update = {}) => ({
  type: "UPDATE_MOVIE",
  id,
  update,
});
