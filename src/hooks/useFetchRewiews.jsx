import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../servises/api/EventAPI';

export const useFetchReviews = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(setCast).catch(console.error);
  }, [movieId]);

  return cast;
};
