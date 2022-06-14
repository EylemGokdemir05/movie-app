import axios from 'axios';

const list = async (imdbID) => {
  const data = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
      i: imdbID,
    },
  }).then((response) => response.data).catch((error) => error);
  return data;
};

export default list;
