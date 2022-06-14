import React, { useEffect, useState } from "react";
import axios from "axios";

export const MovieContext = React.createContext()

const API_KEY = '637d76e1';

const MovieApp = ({ children }) => {
  const [allMovies, setAllMovies] = useState();
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [q, setQuery] = useState('pokemon');

  const fetchMovies = async () => {
    const response = await axios(
      `http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`
    );
    console.log("response: ", response);
    const data = response.data;
    console.log("data: ", data);
    setAllMovies(data.Search);
  };

  const fetchMoviesBySearchValue = async (searchValue) => {
    console.log('searchValue: ',searchValue)
    const response = await axios(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
    );
    console.log("response: ", response);
    const data = response.data;
    console.log("data: ", data);
    setMovies(data.Search);
  };

  const showDetail = async (id) => {
    const response = await axios(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    const data = response.data;
    console.log("selected data: ", data);
    setSelectedMovie(data);
  };

  useEffect(() => {
    console.log(API_KEY);
    fetchMovies();
    // fetchMoviesBySearchValue(search);
  }, [q]);

  return (
    <MovieContext.Provider
      value={{
        setSearch,
        allMovies,
        movies,
        showDetail,
        selectedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
