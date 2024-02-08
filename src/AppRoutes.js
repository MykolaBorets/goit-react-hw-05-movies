import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));

const MoviesSearchPage = lazy(() =>
  import('./pages/MoviesSearchPage/MoviesSearchPage.jsx')
);

const SingleMoviePage = lazy(() =>
  import('./pages/SingleMoviePage/SingleMoviePage.jsx')
);
const CastPage = lazy(() => import('./pages/CastPage/CastPage.jsx'));

const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage.jsx'));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearchPage />} />
          <Route path="movies/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />{' '}
        </Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
