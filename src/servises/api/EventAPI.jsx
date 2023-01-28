import axios from 'axios';

const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = 'f1b044fc4333753309c85e543dc6bb03';

// MoviesByTrend
export const fetchMoviesByTrend = async () => {
  const response = await moviesAPI.get('/trending/movie/day?', {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.results;
};

//  MovieById
export const fetchMovieById = async id => {
  const response = await moviesAPI.get(`/movie/${id}?`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};
// MovieCast
export const fetchMovieCast = async id => {
  const response = await moviesAPI.get(`/movie/${id}/credits?`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.cast;
};

//  MovieReviews
export const fetchMovieReviews = async id => {
  const response = await moviesAPI.get(`/movie/${id}/reviews?`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.results;
};
//  MoviesBySearch
export const fetchMoviesSearch = async searchQuery => {
  const response = await moviesAPI.get('/search/movie?', {
    params: {
      api_key: API_KEY,
      query: searchQuery,
    },
  });

  return response.data.results;
};
