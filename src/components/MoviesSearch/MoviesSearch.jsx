import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesSearchForm from './MoviesSearchForm/MoviesSearchForm';
import MoviesSearchList from './MoviesSearchList/MoviesSearchList';
import { searchMovies } from '../../api/movies';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await searchMovies(search, page);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovies();
    }
  }, [search, page]);

  const handleSearch = ({ search }) => {
    setSearchParams({ search, page: 1 });
    setMovies([]);
  };

  const isMovies = Boolean(movies.length);
  
  return (
    <>
      <MoviesSearchForm onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      {loading && <p>...Loading</p>}
      {isMovies && <MoviesSearchList items={movies} />}
    </>
  );
};

export default MoviesSearch;
