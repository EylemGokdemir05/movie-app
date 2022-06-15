import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import notFoundImg from "../assets/not-found.jpg";

const MovieCard = ({ Poster, Title, Year, imdbID }) => {
  return (
    <div className="movies__item">
      <Link to={`/${imdbID}`} className="movies__item__link">
        <img
          src={Poster === "N/A" ? notFoundImg : Poster}
          alt={Title || `Movie-${imdbID}`}
        />
      </Link>
      <Link to={`/${imdbID}`} className="movies__item__text">
        <h2 className="movies__item__title">{Title || `Movie ${imdbID}`}</h2>
        <div className="movies__item__year">{Year || ""}</div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  imdbID: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
  Poster: PropTypes.string,
};

MovieCard.defaultProps = {
  imdbID: "",
  Title: "",
  Year: "",
  Poster: "",
};

export default MovieCard;
