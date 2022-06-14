import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../context/actions/movieAction";
import getMovieList from "../data/movieList";
import MovieList from "./../components/MovieList";
import FilterList from "../components/FilterList";
import "../style/Home.css";

const Home = ({ getMovies, filters }) => {
  const [error, setError] = useState("");
  // const [movies,setMovies] = useState([]);
  // const { movies } = useSelector((state) => state);
  // console.log('state movies: ',movies)

  const fetchMovies = () => {
    getMovieList(filters.title)
      .then((data) => {
        console.log('data: ',data)
        getMovies(data);
        console.log('getMovies: ',getMovies)
        // setMovies(data);
        // console.log('set movies: ',movies)
      })
      .catch(() => {
        setError("Sorry, movies not found.");
      });
  };

  useEffect(() => {
    fetchMovies();
    console.log('filters: ',filters)
  }, [filters]);

  return (
    <div className="home-container">
      {error && <p>{error}</p>}
      <FilterList />
      <MovieList />
    </div>
  );
  // const { setSearch, movies } = useContext(MovieContext);
  // console.log('movies: ',movies);
  // console.log('setSearch: ',setSearch);
  // const handleSearch = (e) => {
  //     console.log('search value: ',e);
  //   setSearch(e.target.value);
  // };
  // return (
  //   <div className="home-container">
  //     <InputField handleSearch={handleSearch} />
  //     {movies?.length ? (
  //       <div className="movies">
  //         {movies?.map((movie) => {
  //           return (
  //             <Link
  //               to={`movies/${movie.imdbID}`}
  //               className="text-link"
  //               key={movie.imdbID}
  //             >
  //               <MovieCard
  //                 key={movie.imdbID}
  //                 image={movie.Poster}
  //                 title={movie.Title}
  //                 year={movie.Year}
  //                 IMDB={movie.imdbID}
  //               />
  //             </Link>
  //           );
  //         })}
  //       </div>
  //     ) : (
  //       <div className="search-warning">
  //         <p>Search a movie!</p>
  //         <p>i.e. Harry Potter</p>
  //       </div>
  //     )}
  //   </div>
  // );
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
