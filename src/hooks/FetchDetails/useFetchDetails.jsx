import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../servises/api/EventAPI';

export const useFetchDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  return movie;
};
