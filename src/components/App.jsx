import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { HomePage } from '../pages/HomePage/HomePage';
import { MovieDetails } from '../pages/MovieDetals/MovieDetails';
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from '../pages/Reviews/Reviews';
import { Movies } from '../pages/Movies/Movies';
import { NotFound } from '../pages/NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
