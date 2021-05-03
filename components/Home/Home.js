import Footer from '../Footer/Footer';
import CardMovieModal from '../Modals/CardMovieModal/CardMovieModal';
import DeleteMovieModal from '../Modals/DeleteMovieModal/DeleteMovieModal';
import MovieFilters from '../MovieFilters/MovieFilters';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MoviesSorting from '../MoviesSorting/MoviesSorting';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.filters}>
          <MovieFilters />
          <MoviesSorting />
        </div>
        <MoviesContainer />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
      <CardMovieModal />
      <DeleteMovieModal />
    </div>
  );
};

export default Home;
