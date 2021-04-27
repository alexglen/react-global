import styles from './Home.module.scss';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.filters}>{/* <MovieFilters />
          <MoviesSorting /> */}</div>
        {/* <MoviesContainer /> */}
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
      {/* <CardMovieModal />
      <DeleteMovieModal /> */}
    </>
  );
};

export default Home;
