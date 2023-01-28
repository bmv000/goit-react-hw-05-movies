import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesByTrend } from '../../servises/api/EventAPI';
import { Loader } from '../../components/Loader/Loader';
import { MovieList, MovieLink } from './HomePage.styled';

export const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesByTrend()
      .then(setEvents)
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h2> Trending Today</h2>
      {isLoading && <Loader />}
      {events.length > 0 && (
        <MovieList>
          {events.map(({ id, title }) => {
            return (
              <li key={id}>
                <MovieLink state={{ from: location }} to={`movies/${id}`}>
                  {title}
                </MovieLink>
              </li>
            );
          })}
        </MovieList>
      )}
      <Outlet />
    </>
  );
};
