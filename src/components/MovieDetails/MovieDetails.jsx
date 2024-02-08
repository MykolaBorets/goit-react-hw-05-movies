import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { getMovieById } from 'api/movies';

import style from './movie-details.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();

  const from = location.state?.from || '/';

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieById(id);
        setMovie(data);
        const dateObject = new Date(Date.parse(data.release_date));
        setYear(dateObject.getFullYear());
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const goBack = () => navigate(from);

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      <button className={style.button} onClick={goBack} type="button">
        {'\u2190'} Go back
      </button>
      {movie && (
        <>
          <div className={style.info}>
            <div className={style.img_block}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className={style.img}
              />
            </div>
            <div className={style.text_block}>
              <div>
                <p className={style.title}>
                  {movie.title} ({year})
                </p>
                <p>
                  <span>User Score:</span>{' '}
                  {(movie.vote_average * 10).toFixed(2)}%
                </p>
              </div>
              <div>
                <p className={style.subtitle}>Overview</p>
                <p>{movie.overview}</p>
              </div>
              <div>
                <p className={style.subtitle}>Genres</p>
                <>
                  {movie.poster_path && (
                    <p>
                      <span></span>{' '}
                      {movie.genres.map((genre, index) => (
                        <span key={genre.id}>
                          {genre.name}
                          {index !== movie.genres.length - 1 && ' '}
                        </span>
                      ))}
                    </p>
                  )}
                </>
              </div>
            </div>
          </div>
          <p className={style.subtitle}>Additional information</p>
          <ul>
            <li>
              <NavLink to="cast" state={{ from }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={{ from }}>
                Reviews
              </NavLink>
            </li>
            <Suspense> {<Outlet />}</Suspense>
          </ul>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
