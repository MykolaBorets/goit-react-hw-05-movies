import { NavLink } from 'react-router-dom';
import styles from './main-menu.module.css';

const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={styles.link}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
export default MainMenu;
