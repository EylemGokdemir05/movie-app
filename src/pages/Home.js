import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../context/actions/movieAction";
import getMovieList from "../data/movieList";
import MovieList from "./../components/MovieList";
import FilterList from "../components/FilterList";

const Home = ({ getMovies, filters }) => {
  const [error, setError] = useState("");

  const fetchMovies = () => {
    getMovieList(filters.title)
      .then((data) => {
        getMovies(data);
      })
      .catch(() => {
        setError("Sorry, movies not found.");
      });
  };

  useEffect(() => {
    fetchMovies();
  }, [filters]);

  return (
    <div className="container">
      {error && <p className="error-msg">{error}</p>}
      <FilterList />
      <MovieList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (data) => dispatch(getMovies(data)),
});

Home.propTypes = {
  getMovies: PropTypes.func,
  filters: PropTypes.instanceOf(Object),
};

Home.defaultProps = {
  getMovies: null,
  filters: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
