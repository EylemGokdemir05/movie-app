import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import list from "../data/list";
import notFoundImg from "../assets/not-found.jpg";
import { updateMovie } from "../context/actions/movieAction";
import NotFound from "../components/NotFound";

const Detail = ({ movie, updateMovie }) => {
  const [error, setError] = useState("");

  const getMovie = async () => {
    try {
      const movieItem = await list(movie.imdbID);
      const { Poster, Title, Year, imdbID } = movieItem;
      updateMovie(movie.imdbID, {
        Poster,
        Title,
        Year,
        imdbID,
      });
    } catch {
      setError("Sorry, unable to fetch the data.");
    }
  };

  const fetchMovieItem = () => {
    const { Poster, Title, Year, imdbID } = movie;
    if (!Poster || !Title || !Year || !imdbID) {
      getMovie();
    }
  };

  useEffect(() => {
    fetchMovieItem();
  }, [movie]);

  const { Poster, Title, Year, imdbID } = movie;

  return (
    <div>
      {error && <p className="error-msg">{error}</p>}
      {Title === undefined ? (
        <NotFound />
      ) : (
        <div>
          <div>
            <img
              src={Poster === "N/A" ? notFoundImg : Poster}
              alt={Title || `Movie-${imdbID}`}
              className="movie__image"
            />
          </div>
          <div className="movie__title-wrap">
            <h2 className="movie__title">{Title}</h2>
            <div className="movie__year">{Year}</div>
          </div>
          <Link to="/" className="btn movie__btn">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  movie: state.movies.find((movie) => movie.imdbID === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateMovie: (id, update) => dispatch(updateMovie(id, update)),
});

Detail.propTypes = {
  movie: PropTypes.instanceOf(Object),
  updateMovie: PropTypes.func,
};

Detail.defaultProps = {
  movie: {},
  updateMovie: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
