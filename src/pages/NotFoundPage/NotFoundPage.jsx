import { Link } from 'react-router-dom';

import style from './not-foun-page.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <h2 className={style.text}>Page not found :(</h2>
      <Link className={style.link} to="/">
        Go to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
