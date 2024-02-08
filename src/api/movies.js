import axios from 'axios';

const URL_TRENDING = 'https://api.themoviedb.org/3/trending/movie/day';
const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
const URL_DETAILS = 'https://api.themoviedb.org/3/movie/';

const API_KEY = '2032b26aa9b0c559d2e14e504dcab073';

const baseParams = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
};

const handleRequestError = error => {
  console.error('Request failed:', error);
  throw error;
};

export const getTrendingMovies = () => {
  const params = {
    ...baseParams,
    page: '1',
    per_page: '20',
  };
  return axios.get(URL_TRENDING, { params }).catch(handleRequestError);
};

export const getMovieById = id => {
  const params = { ...baseParams };
  return axios
    .get(`${URL_DETAILS}/${id}`, { params })
    .catch(handleRequestError);
};

export const getMovieCastById = id => {
  const params = { ...baseParams };
  return axios
    .get(`${URL_DETAILS}/${id}/credits`, { params })
    .catch(handleRequestError);
};

export const getMovieReviewById = id => {
  const params = { ...baseParams };
  return axios
    .get(`${URL_DETAILS}/${id}/reviews`, { params })
    .catch(handleRequestError);
};

export const searchMovies = query => {
  const params = {
    ...baseParams,
    query,
    page: '1',
  };
  return axios.get(URL_SEARCH, { params }).catch(handleRequestError);
};
