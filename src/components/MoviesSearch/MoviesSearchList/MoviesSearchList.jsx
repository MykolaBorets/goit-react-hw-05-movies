import { Link, useLocation } from 'react-router-dom';

import styles from './movies-search-list.module.css';

const MoviesSearchList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li key={id} className={styles.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MoviesSearchList;
