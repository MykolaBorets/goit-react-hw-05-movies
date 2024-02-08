import Movies from 'components/Movies/Movies';
import style from './home.module.css';

const Home = () => {
  return (
    <div>
      <div className={style.title}>Trending today</div>
      <Movies />
    </div>
  );
};
export default Home;
