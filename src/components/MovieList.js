import React from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import getVisibleMovies from "../selectors/visibleMovies";

const MovieList = () => {
  const { movies } = useSelector((state) => state);
  return (
    <div>
      {movies.length === 0 && (
        <p className="error-msg">Sorry, any movies have not been found. Try to search again!</p>
      )}
      <div className="movies">
        {movies.map((movie) => {
          const { Poster, Title, Year, imdbID } = movie;
          return (
            <MovieCard
              Poster={Poster}
              Title={Title}
              Year={Year}
              imdbID={imdbID}
              key={imdbID}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: getVisibleMovies(state.movies, state.filters),
});

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

MovieList.defaultProps = {
  movies: [],
};

export default connect(mapStateToProps)(MovieList);
