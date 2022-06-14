import axios from 'axios';

const getMovieList = async (query) => {
  const data = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
      s: query,
      page: 1,
    },
  }).then((response) => response.data.Search).catch((error) => error);
  console.log('movie data: ',data)
  return data;
};

export default getMovieList;
