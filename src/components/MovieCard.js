import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import notFoundImg from "../assets/not-found.jpg";
import "../style/MovieCard.css";

const MovieCard = ({ Poster, Title, Year, imdbID }) => {
  console.log('movie card: ,',Poster, Title, Year, imdbID)
  return (
    <div className="card">
      <Link to={`/${imdbID}`}>
        <img
          src={Poster === "N/A" ? notFoundImg : Poster}
          alt={Title || `Movie-${imdbID}`}
        />
      </Link>
      <Link to={`/${imdbID}`} className="info">
        <h2 className="title">{Title || `Movie ${imdbID}`}</h2>
        <div className="year">{Year || ""}</div>
        <span className="IMDB">{imdbID}</span>
      </Link>
      {/* <div className="info">
        <span className="title">{title}</span>
        <span className="year">{year}</span>
        <span className="IMDB">{IMDB}</span>
      </div> */}
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
