import {  Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useFetchDetails } from '../../hooks/FetchDetails/useFetchDetails';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  MovieTitle,
  InfoMovie,
  MovieImg,
  MovieDetailsInfo,
  MovieOptionTitle,
  MovieOptionText,
  BackButton,
  MovieAddition,
  MovieAdditionLink,
  MovieInfo,
} from './MovieDetails.styled';
import imageNotFound from '../Cast/not-found.jpg';

export const MovieDetails = () => {
  const movie = useFetchDetails();
  const posterPathBase = 'https://image.tmdb.org/t/p/w500';

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {movie && (
        <MovieInfo>
          <BackButton
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            <AiOutlineArrowLeft size={24} />
            Go Back
          </BackButton>
          <MovieDetailsInfo>
            {movie.poster_path ? (
              <MovieImg
                src={posterPathBase + movie.poster_path}
                alt={movie.title}
                width={320}
              />
            ) : (
              <img
                src={imageNotFound}
                alt="Not found"
                width={320}
                height={320}
              />
            )}
            <InfoMovie>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieOptionTitle>
                User Score: {Math.ceil(movie.vote_average * 10)}%
              </MovieOptionTitle>
              <MovieOptionTitle>Overview</MovieOptionTitle>
              <MovieOptionText>{movie.overview}%</MovieOptionText>
              <MovieOptionTitle>Genres</MovieOptionTitle>
              <MovieOptionText>
                {movie.genres.map(genre => genre.name).join(', ')}
              </MovieOptionText>
            </InfoMovie>
          </MovieDetailsInfo>
          <MovieAddition>
            <MovieOptionTitle>Addition information</MovieOptionTitle>
            <li>
              <MovieAdditionLink to="cast">Cast</MovieAdditionLink>
            </li>
            <li>
              <MovieAdditionLink to="reviews">Reviews</MovieAdditionLink>
            </li>
          </MovieAddition>

          <Outlet />
        </MovieInfo>
      )}
    </>
  );
};
