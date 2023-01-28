import {
  SearchMovies,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  MovieLink,
  MovieList,
} from './Movies.styled';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Outlet } from 'react-router-dom';

import { Loader } from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import { fetchMoviesSearch } from '../../servises/api/EventAPI';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getMovies = async () => {
      try {
        setIsLoading(true);

        let movies = await fetchMoviesSearch(query);
        movies = movies.map(movie => {
          return (movie = {
            id: movie.id,
            title: movie.title,
          });
        });
        setMovies(movies);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [query]);

  const onSubmits = event => {
    event.preventDefault();

    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value.toLowerCase() });
    form.reset();
  };

  return (
    <SearchMovies>
      <SearchForm onSubmit={onSubmits}>
        <SearchFormInput
          type="text"
          name="query"
          autocomplete="off"
          autoFocus
          placeholder="Input movies"
        />
        <SearchFormButton type="submit">
          {/* <AiOutlineSearch size={16} /> */}
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
      </SearchForm>

      {isLoading && <Loader />}
      {!isLoading && movies?.length !== 0 && (
        <MovieList>
          {movies?.map(({ id, title }) => (
            <li key={id}>
              <MovieLink state={{ from: location }} to={`${id}`}>
                {title}
              </MovieLink>
            </li>
          ))}
        </MovieList>
      )}

      {isError && toast.error('Oops...We have error.')}
      <Outlet />
    </SearchMovies>
  );
};
